import { NextRequest, NextResponse } from "next/server";

// Hard-coded locale config to avoid any dependency issues
const LOCALES = ["en", "de", "es"];
const DEFAULT_LOCALE = "en";
const PREFIX_DEFAULT = false;

function getLocaleFromPathname(pathname: string): string | null {
    const pathnameWithoutQuery = pathname.split("?")[0];
    return LOCALES.find(
        (locale) =>
            pathnameWithoutQuery.startsWith(`/${locale}/`) ||
            pathnameWithoutQuery === `/${locale}`
    ) || null;
}

export function middleware(request: NextRequest) {
    try {
        const pathname = request.nextUrl.pathname;
        const locale = getLocaleFromPathname(pathname);

        // If locale is present in URL, pass through
        if (locale) {
            return NextResponse.next();
        }

        // Check for locale cookie
        let localeFromCookie = request.cookies.get("NEXT_LOCALE")?.value;
        if (localeFromCookie && !LOCALES.includes(localeFromCookie)) {
            localeFromCookie = undefined;
        }

        // Get locale from Accept-Language header
        const acceptLanguage = request.headers.get("accept-language");
        let localeFromHeader = DEFAULT_LOCALE;
        if (acceptLanguage) {
            const preferred = acceptLanguage
                .split(",")[0]
                .split("-")[0]
                .toLowerCase();
            if (LOCALES.includes(preferred)) {
                localeFromHeader = preferred;
            }
        }

        // Determine final locale: cookie > header > default
        const finalLocale = localeFromCookie || localeFromHeader || DEFAULT_LOCALE;

        // Redirect to localized path (unless it's English with prefixDefault: false)
        if (finalLocale === DEFAULT_LOCALE && !PREFIX_DEFAULT) {
            // English requests stay at root
            return NextResponse.next();
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

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|public|.*\\.(?:json|css|js|map|svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}; 