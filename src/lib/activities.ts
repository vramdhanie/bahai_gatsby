import fs from "fs";
import path from "path";

import matter from "gray-matter";

export interface Activity {
  title: string;
  slug: string;
  image: string;
  blurb: string;
  order: number;
  excerpt: string;
  body: string;
}

const ACTIVITIES_DIR = path.join(process.cwd(), "src/content/activities");

/** Rewrite the MDX's relative ./images/ references to the copied public paths. */
function publicPath(dir: string, relative: string): string {
  return `/activities/${dir}/${relative.replace(/^\.\//, "")}`;
}

function excerptOf(body: string): string {
  const text = body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > 140 ? `${text.slice(0, 140)}…` : text;
}

export function getAllActivities(): Activity[] {
  const dirs = fs
    .readdirSync(ACTIVITIES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const activities = dirs.map((dir) => {
    const raw = fs.readFileSync(
      path.join(ACTIVITIES_DIR, dir, "content.mdx"),
      "utf8"
    );
    const { data, content } = matter(raw);
    return {
      title: data.title as string,
      slug: data.slug as string,
      image: publicPath(dir, data.image as string),
      blurb: data.blurb as string,
      order: data.order as number,
      excerpt: excerptOf(content),
      body: content.replace(/\]\(\.\/images\//g, `](/activities/${dir}/images/`),
    };
  });

  return activities.sort((a, b) => a.order - b.order);
}

export function getActivityBySlug(slug: string): Activity | undefined {
  return getAllActivities().find((activity) => activity.slug === slug);
}
