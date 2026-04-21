#!/usr/bin/env node
import { readdir, readFile, writeFile, mkdir, access } from "node:fs/promises";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const POSTS_DIR = join(ROOT, "_posts");
const OUTPUT_DIR = join(ROOT, "assets", "blogposts");
const TEMPLATE_PATH = join(__dirname, "og-template.html");
const LOGO_PATH = join(ROOT, "assets", "logo.svg");

const hash = (s) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
};

const hslToRgb = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)].map((v) => Math.round(v * 255));
};

const relLum = ([r, g, b]) => {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
};

const contrastWithWhite = (rgb) => 1.05 / (relLum(rgb) + 0.05);

const pickBg = (seed, { minContrast = 4.5 } = {}) => {
  const hue = hash(seed) % 360;
  const sat = 60 + (hash(seed + "s") % 20);
  let light = 42;
  let rgb = hslToRgb(hue, sat, light);
  while (contrastWithWhite(rgb) < minContrast && light > 10) {
    light -= 2;
    rgb = hslToRgb(hue, sat, light);
  }
  return `rgb(${rgb.join(",")})`;
};

const fileExists = async (p) => {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
};

const slugFromFilename = (name) =>
  name.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");

const renderHtml = (template, { title, bg, logoSrc }) =>
  template
    .replaceAll("{{TITLE}}", escapeHtml(title))
    .replaceAll("{{BG}}", bg)
    .replaceAll("{{LOGO_SRC}}", logoSrc);

const escapeHtml = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const insertImageFrontmatter = (raw, imagePath) => {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const block = match[1];
  if (/^image:\s*/m.test(block)) return null;
  const newBlock = `${block}\nimage: ${imagePath}`;
  return raw.replace(match[0], `---\n${newBlock}\n---`);
};

const main = async () => {
  const force = process.argv.includes("--force");
  const onlyArg = process.argv.find((a) => a.startsWith("--only="));
  const only = onlyArg ? onlyArg.slice("--only=".length) : null;

  await mkdir(OUTPUT_DIR, { recursive: true });

  const template = await readFile(TEMPLATE_PATH, "utf8");
  const logoBuf = await readFile(LOGO_PATH);
  const logoSrc = `data:image/svg+xml;base64,${logoBuf.toString("base64")}`;

  const files = (await readdir(POSTS_DIR)).filter((f) => f.endsWith(".md"));

  const jobs = [];
  for (const file of files) {
    const slug = slugFromFilename(file);
    if (only && slug !== only) continue;

    const outPath = join(OUTPUT_DIR, `${slug}.png`);
    if (!force && (await fileExists(outPath))) continue;

    const postPath = join(POSTS_DIR, file);
    const raw = await readFile(postPath, "utf8");
    const { data } = matter(raw);
    if (!data.title) {
      console.warn(`skip ${file}: no title`);
      continue;
    }
    jobs.push({
      slug,
      title: String(data.title),
      outPath,
      postPath,
      hasImage: Boolean(data.image),
    });
  }

  if (jobs.length === 0) {
    console.log("nothing to generate");
    return;
  }

  console.log(`generating ${jobs.length} image(s)...`);

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1200, height: 630, deviceScaleFactor: 1 },
  });

  try {
    const page = await browser.newPage();
    for (const job of jobs) {
      const html = renderHtml(template, {
        title: job.title,
        bg: pickBg(job.slug),
        logoSrc,
      });
      await page.setContent(html, { waitUntil: "load", timeout: 60000 });
      await page.evaluate(() => document.fonts.ready);
      const buf = await page.screenshot({ type: "png", omitBackground: false });
      await writeFile(job.outPath, buf);
      console.log(`  ✓ ${basename(job.outPath)}`);

      if (!job.hasImage) {
        const imageUrl = `/assets/blogposts/${job.slug}.png`;
        const raw = await readFile(job.postPath, "utf8");
        const updated = insertImageFrontmatter(raw, imageUrl);
        if (updated) {
          await writeFile(job.postPath, updated);
          console.log(`    + image: ${imageUrl} → ${basename(job.postPath)}`);
        }
      }
    }
  } finally {
    await browser.close();
  }
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
