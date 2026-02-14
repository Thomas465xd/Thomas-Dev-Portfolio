import { NextRequest, NextResponse } from "next/server";
import i18nConfig from "./i18nConfig";

const { locales, defaultLocale, prefixDefault } = i18nConfig;

function getLocaleFromPathname(pathname: string): string | null {
    const pathnameWithoutQuery = pathname.split("?")[0];
    return locales.find(
        (locale) =>
            pathnameWithoutQuery.startsWith(`/${locale}/`) ||
            pathnameWithoutQuery === `/${locale}`
    ) || null;
}

export function middleware(request: NextRequest) {
    try {
        const pathname = request.nextUrl.pathname;
        const locale = getLocaleFromPathname(pathname);

        // If locale is present in URL, continue
        if (locale) return;

        // Check for locale cookie
        let localeFromCookie = request.cookies.get("NEXT_LOCALE")?.value;
        if (localeFromCookie && !locales.includes(localeFromCookie)) {
            localeFromCookie = undefined;
        }

        // Get locale from Accept-Language header
        const acceptLanguage = request.headers.get("accept-language");
        let localeFromHeader = defaultLocale;
        if (acceptLanguage) {
            const preferred = acceptLanguage
                .split(",")[0]
                .split("-")[0]
                .toLowerCase();
            if (locales.includes(preferred)) {
                localeFromHeader = preferred;
            }
        }

        // Determine final locale: cookie > header > default
        const finalLocale = localeFromCookie || localeFromHeader || defaultLocale;

        // Redirect to localized path (unless it's English with prefixDefault: false)
        if (finalLocale === defaultLocale && !prefixDefault) {
            // English requests stay at root
            return;
        }

        // Redirect to /{locale}{pathname}
        const url = request.nextUrl.clone();
        url.pathname = `/${finalLocale}${pathname}`;
        const response = NextResponse.redirect(url);
        
        // Set locale cookie
        response.cookies.set("NEXT_LOCALE", finalLocale);
        return response;
    } catch (error) {
        console.error("[Middleware Error]", error);
        return NextResponse.next();
    }
}

//? Only run middleware on specific paths
// Only match request paths that are actual routes (not static files)
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder (public assets)
         * - .json, .css, .js, .map files
         */
        '/((?!_next/static|_next/image|favicon.ico|public|.*\\.(?:json|css|js|map|svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}; 
