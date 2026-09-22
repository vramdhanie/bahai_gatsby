import type { MetadataRoute } from "next";

import { getAllActivities } from "@/lib/activities";

export const dynamic = "force-static";

const BASE = "https://bahaitt.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "abdulbaha",
    "bahaullah",
    "bicentenary",
    "centenary",
    "community",
    "contact",
    "legal",
  ];
  const activities = getAllActivities().map((activity) => activity.slug);

  return [...pages, ...activities].map((path) => ({
    url: path ? `${BASE}/${path}/` : `${BASE}/`,
  }));
}
