import { type NextRequest, NextResponse } from "next/server";

// Hard-coded locale config to avoid any dependency issues
const LOCALES: string[] = ["en", "de", "es"];
const DEFAULT_LOCALE: string = "en";
const PREFIX_DEFAULT: boolean = false;

function getLocaleFromPathname(pathname: string): string | null {
    const pathnameWithoutQuery = pathname.split("?")[0];
    const locale = LOCALES.find(
        (loc) =>
            pathnameWithoutQuery.startsWith(`/${loc}/`) ||
            pathnameWithoutQuery === `/${loc}`
    );
    return locale || null;
}

export function middleware(request: NextRequest): NextResponse {
    try {
        const { pathname } = request.nextUrl;
        const locale = getLocaleFromPathname(pathname);

        // If locale is already in URL, pass through without modification
        if (locale !== null) {
            return NextResponse.next();
        }

        // Try to get locale from cookie
        const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
        const isValidCookieLocale = cookieLocale && LOCALES.includes(cookieLocale);
        
        if (isValidCookieLocale) {
            // If it's the default locale and we don't prefix it, stay at root
            if (cookieLocale === DEFAULT_LOCALE && PREFIX_DEFAULT === false) {
                return NextResponse.next();
            }
            // Otherwise redirect to localized path
            const url = request.nextUrl.clone();
            url.pathname = `/${cookieLocale}${pathname}`;
            const response = NextResponse.redirect(url);
            response.cookies.set("NEXT_LOCALE", cookieLocale, { maxAge: 31536000 });
            return response;
        }

        // Parse Accept-Language header
        const acceptLanguage = request.headers.get("accept-language") || "";
        let headerLocale = DEFAULT_LOCALE;
        
        if (acceptLanguage && acceptLanguage.length > 0) {
            const preferred = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();
            if (LOCALES.includes(preferred)) {
                headerLocale = preferred;
            }
        }

        // Use header locale (or default if not found in locales)
        const finalLocale = headerLocale || DEFAULT_LOCALE;

        // If final locale is the default and we don't prefix it, stay at root
        if (finalLocale === DEFAULT_LOCALE && PREFIX_DEFAULT === false) {
            return NextResponse.next();
        }

        // Redirect to localized path
        const url = request.nextUrl.clone();
        url.pathname = `/${finalLocale}${pathname}`;
        const response = NextResponse.redirect(url);
        response.cookies.set("NEXT_LOCALE", finalLocale, { maxAge: 31536000 });
        return response;
    } catch (error) {
        // Log error but don't crash - allow request to proceed
        console.error("[Middleware Error]", error);
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        // Match all paths except:
        // - _next/static (static files)
        // - _next/image (image optimization)
        // - favicon.ico
        // - public folder
        // - file extensions (.json, .css, .js, .map, images, etc)
        '/((?!_next/static|_next/image|favicon.ico|public|.*\\.(?:json|css|js|map|svg|png|jpg|jpeg|gif|webp|woff|woff2|ttf|eot)$).*)',
    ],
}; 