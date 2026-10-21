#!/usr/bin/env node
import { readdir, readFile, writeFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const POSTS_DIR = join(ROOT, "_posts");
const IMAGES_DIR = join(ROOT, "assets", "blogposts");
const OUTPUT_CSV = join(__dirname, "pinterest-bulk.csv");

const SITE_URL = "https://chooselikebuddha.com";
const BOARD = "What Would Buddha Do";
const BOARD_PATH = "/chooselikebuddha/what-would-buddha-do/";
const HASHTAGS = [
  "mindfulness",
  "buddhism",
  "meditation",
  "wisdom",
  "mentalhealth",
  "selfcare",
  "innerpeace",
  "buddhaquotes",
];

const slugFromFilename = (name) =>
  name.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");

const fileExists = async (p) => {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
};

const csvEscape = (v) => {
  const s = String(v ?? "");
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
};

const cap = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).trimEnd() + "…");

const PINTEREST_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";

// Slugs of blog posts already pinned to the board, via Pinterest's public web API.
// A session sometimes gets only part of the board, so union a few fresh sessions
// until every pin the board reports has been seen.
const fetchPinnedSlugs = async () => {
  const slugs = new Set();
  let pinCount = 0;
  for (let attempt = 0; attempt < 8 && (attempt === 0 || slugs.size < pinCount); attempt++) {
    pinCount = await fetchBoardSession(slugs);
  }
  if (slugs.size < pinCount) {
    console.warn(`warning: board reports ${pinCount} pins but only ${slugs.size} linked posts were found`);
  }
  return slugs;
};

const fetchBoardSession = async (slugs) => {
  const page = await fetch(`https://www.pinterest.com${BOARD_PATH}`, {
    headers: { "User-Agent": PINTEREST_UA },
  });
  const cookie = page.headers
    .getSetCookie()
    .map((c) => c.split(";")[0])
    .join("; ");
  const html = await page.text();
  const initialProps = html.match(/<script id="__PWS_INITIAL_PROPS__" type="application\/json">(.*?)<\/script>/s)?.[1];
  let boardId;
  let pinCount = 0;
  JSON.parse(initialProps ?? "{}", (key, value) => {
    if (value?.type === "board" && value.url === BOARD_PATH && value.id) {
      boardId = value.id;
      pinCount = value.pin_count ?? pinCount;
    }
    return value;
  });
  if (!boardId) throw new Error("could not find board id on Pinterest board page");

  let bookmark = null;
  do {
    const options = { board_id: boardId, board_url: BOARD_PATH, page_size: 50 };
    if (bookmark) options.bookmarks = [bookmark];
    const qs = new URLSearchParams({
      source_url: BOARD_PATH,
      data: JSON.stringify({ options, context: {} }),
    });
    const res = await fetch(`https://www.pinterest.com/resource/BoardFeedResource/get/?${qs}`, {
      headers: {
        "User-Agent": PINTEREST_UA,
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Pinterest-AppState": "active",
        "X-Pinterest-PWS-Handler": "www/[username]/[slug].js",
        "X-Pinterest-Source-Url": BOARD_PATH,
        Referer: "https://www.pinterest.com/",
        Cookie: cookie,
      },
    });
    if (!res.ok) throw new Error(`Pinterest board feed returned ${res.status}`);
    const json = await res.json();
    for (const pin of json.resource_response.data ?? []) {
      const slug = pin.link?.match(/\/blog\/([^/?#]+)/)?.[1];
      if (slug) slugs.add(slug);
    }
    bookmark = json.resource?.options?.bookmarks?.[0];
  } while (bookmark && bookmark !== "-end-");
  return pinCount;
};

const main = async () => {
  const files = (await readdir(POSTS_DIR)).filter((f) => f.endsWith(".md"));
  const today = new Date().toISOString().slice(0, 10);
  const pinned = process.argv.includes("--all") ? new Set() : await fetchPinnedSlugs();
  if (pinned.size) console.log(`found ${pinned.size} post(s) already on "${BOARD}"`);

  const rows = [];
  let skippedNoImage = 0;
  let skippedFuture = 0;
  let skippedPinned = 0;

  for (const file of files.sort()) {
    const slug = slugFromFilename(file);
    if (file.slice(0, 10) > today) {
      skippedFuture++;
      continue;
    }
    if (pinned.has(slug)) {
      skippedPinned++;
      continue;
    }
    const imagePath = join(IMAGES_DIR, `${slug}.png`);
    if (!(await fileExists(imagePath))) {
      skippedNoImage++;
      continue;
    }

    const raw = await readFile(join(POSTS_DIR, file), "utf8");
    const { data } = matter(raw);
    if (!data.title) continue;

    const title = cap(String(data.title).replace(/\?+$/, ""), 100);
    const hashtagLine = HASHTAGS.map((t) => `#${t}`).join(" ");
    const baseDesc = data.description ? String(data.description) : title;
    const description = cap(`${baseDesc}\n\n${hashtagLine}`, 500);

    rows.push({
      Title: title,
      "Media URL": `${SITE_URL}/assets/blogposts/${slug}.png`,
      "Pinterest board": BOARD,
      Thumbnail: "",
      Description: description,
      Link: `${SITE_URL}/blog/${slug}/`,
      "Publish date": "",
      Keywords: HASHTAGS.join(","),
      "Alt text": cap(`${title} — Choose Like Buddha`, 500),
    });
  }

  const headers = [
    "Title",
    "Media URL",
    "Pinterest board",
    "Thumbnail",
    "Description",
    "Link",
    "Publish date",
    "Keywords",
    "Alt text",
  ];

  const csv = [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => csvEscape(r[h])).join(",")),
  ].join("\n");

  await writeFile(OUTPUT_CSV, csv + "\n", "utf8");
  console.log(`wrote ${rows.length} rows → ${OUTPUT_CSV}`);
  if (skippedPinned) console.log(`skipped ${skippedPinned} post(s) already pinned`);
  if (skippedFuture) console.log(`skipped ${skippedFuture} future-dated post(s) not live yet`);
  if (skippedNoImage) console.log(`skipped ${skippedNoImage} post(s) without image`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
