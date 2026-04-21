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

const main = async () => {
  const files = (await readdir(POSTS_DIR)).filter((f) => f.endsWith(".md"));

  const rows = [];
  let skippedNoImage = 0;

  for (const file of files.sort()) {
    const slug = slugFromFilename(file);
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
  if (skippedNoImage) console.log(`skipped ${skippedNoImage} post(s) without image`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
