import { MetadataRoute } from "next";
import { config } from "@/lib/config";
import i18nConfig from "@/i18nConfig";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        {
            route: "",
            changeFrequency: "weekly" as const,
            priority: 1.0,
        },
        {
            route: "/projects", 
            changeFrequency: "weekly" as const,
            priority: 1.0,
        },
        {
            route: "/contact",
            changeFrequency: "yearly" as const,
            priority: 0.6,
        },
        {
            route: "/blog",
            changeFrequency: "yearly" as const,
            priority: 0.6,
        },
        {
            route: "/photography",
            changeFrequency: "yearly" as const,
            priority: 0.6,
        },
    ];

    const sitemap: MetadataRoute.Sitemap = [];

    // Add routes for each locale
    routes.forEach((route) => {
        i18nConfig.locales.forEach((locale) => {
            const localePrefix = locale === i18nConfig.defaultLocale ? "" : `/${locale}`;
            sitemap.push({
                url: `${config.frontendURL}${localePrefix}${route.route}`,
                changeFrequency: route.changeFrequency,
                priority: route.priority,
                lastModified: new Date(),
                alternates: {
                    languages: i18nConfig.locales.reduce((acc, loc) => {
                        const prefix = loc === i18nConfig.defaultLocale ? "" : `/${loc}`;
                        acc[loc] = `${config.frontendURL}${prefix}${route.route}`;
                        return acc;
                    }, {} as Record<string, string>),
                },
            });
        });
    });

    return sitemap;
}