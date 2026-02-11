import { MetadataRoute } from "next";
import { config } from "@/lib/config";

// TODO: make request to get different document ID's (products, orders, etc...)
// This will allow to dynamically map out the available dynamic routes in the site
// However that requires some complex react-query with SSR code... so for now only 
// static pages will be set in sitemap.

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${config.frontendURL}`,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${config.frontendURL}/projects`,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${config.frontendURL}/contact`,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${config.frontendURL}/blog`,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${config.frontendURL}/photography`,
            changeFrequency: "yearly",
            priority: 0.6,
        },
    ];
}