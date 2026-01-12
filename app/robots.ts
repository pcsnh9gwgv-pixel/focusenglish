import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://englishworkinglab.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog/"],
        disallow: [
          // Público pero NO indexable
          "/diagnostico",
          "/lecciondemuestra",

          // Premium / backend
          "/app/",
          "/api/",
          "/auth/",
          "/checkout/",
          "/acceder",
          "/registro",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
