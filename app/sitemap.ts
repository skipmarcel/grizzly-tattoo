import { INFO } from "@/constants";

export default async function sitemap() {
  return [
    {
      url: `${INFO.site}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },

    {
      url: `${INFO.site}/gallery`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: `${INFO.site}/artists`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: `${INFO.site}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: `${INFO.site}/booking`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
