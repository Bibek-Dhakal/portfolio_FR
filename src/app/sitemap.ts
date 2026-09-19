import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

    const routes = [
        {path: "", priority: 1.0, changeFrequency: "weekly" as const},
        {path: "/work", priority: 0.9, changeFrequency: "monthly" as const},
        {path: "/experience", priority: 0.9, changeFrequency: "monthly" as const},
        {path: "/about", priority: 0.8, changeFrequency: "monthly" as const},
        {path: "/contact", priority: 0.8, changeFrequency: "monthly" as const},
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
