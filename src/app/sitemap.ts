import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

    // Define the core routes of the portfolio
    const routes = [
        {path: "", priority: 1.0, changeFrequency: "weekly" as const},
        {path: "/work", priority: 0.9, changeFrequency: "monthly" as const},
        {path: "/about", priority: 0.8, changeFrequency: "monthly" as const},
        {path: "/contact", priority: 0.8, changeFrequency: "monthly" as const},
    ];

    const sitemapRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    return sitemapRoutes;
}
