import type { MetadataRoute } from "next";

import { cities, cityPath, services, site } from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const corePages: Entry[] = [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${site.url}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${site.url}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${site.url}/service-areas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const servicePages: Entry[] = services.map((service) => ({
    url: `${site.url}/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // One entry per city page inherited from the previous site at /city/{id}.
  const cityPages: Entry[] = cities.map((city) => ({
    url: `${site.url}${cityPath(city)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...corePages, ...servicePages, ...cityPages];
}
