import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const baseUrl = "https://focusenglish.com";
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
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/cursos-especializados`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diagnostico`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Add blog posts
  const blogSlugs = getSlugsFromDir(`${CONTENT_DIR}/blog`);
  urls.push(
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  // Add course pages dynamically
  const goals = ['trabajo', 'viajes', 'examenes'];
  const levels = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
  
  goals.forEach(goal => {
    levels.forEach(level => {
      urls.push({
        url: `${baseUrl}/cursos/${goal}/${level}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      });
    });
  });

  return urls;
}
