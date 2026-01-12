import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const baseUrl = "https://englishworkinglab.com";
const CONTENT_DIR = "content";

function getSlugsFromDir(relativeDir: string) {
  const dir = path.join(process.cwd(), relativeDir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogSlugs = getSlugsFromDir(`${CONTENT_DIR}/blog`);
  urls.push(
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return urls;
}
