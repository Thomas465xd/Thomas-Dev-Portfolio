import { i18nRouter } from "next-i18n-router"; 
import i18nConfig from "./i18nConfig";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    //* i18nRouter function does various things: 
    // Detect user preferred language from the browser, then redirect them to the preferred language route prefix
    // e.g. preferred language "german", then redirect user to /de/... prefix pages 
    // If not supported language detected, then just use default language
    try {
        return i18nRouter(request, i18nConfig);
    } catch (error) {
        console.error("[Middleware Error]", error);
        return NextResponse.next();
    }
}

//? Only run middleware on specific paths
// Don't run on any API routes, static files, or Next.js internals
export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|public|.*\\.(?:json|css|js|map|svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
