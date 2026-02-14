import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import ReactQueryProvider from "@/components/providers/QueryClientProvider";
import { Theme } from "@/components/providers/ThemeProvider";
import ToastProvider from "@/components/providers/ToastProvider";
import BackToTopButton from "@/components/ui/BackToTop";
import i18nConfig from "@/i18nConfig";
import initTranslations from "./i18n";

//! change for JetBrains font Font optimization
const jetbrains = JetBrains_Mono({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-mono",
	display: "swap", // Ensures text remains visible during font loading
})

// Viewport configuration for responsive design and mobile optimization
export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
};

//? generateStaticParmams()
// allows to explicitly tell Next.js which dynamic route values exist,
// enabling static rendering even for dynamic routes, in this case for the different language routes.
export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale })); 
}

//? generateMetadata()
// Allows to dinamically generate metadata, in this case for different titles depending on language translations.
export async function generateMetadata({ params } : { params : Promise<{ locale: string }>}) : Promise<Metadata> {
    const { locale } = await params;
    
    const namespaces = ["metadata"]; 
    const { t } = await initTranslations(locale, namespaces)

    return {
        title: {
            template: `%s | ${t("title.layout")}`, 
            default: t("title.layout")
        }, 
        description: t("description.layout"), 
        openGraph: {
            title: t("title.layout"), 
            description: t("description.layout"), 
            siteName: t("siteName.layout"), 
            url: "https://thomas-dev-portfolio.vercel.app",
            locale: locale, 
            type: "website"
        }
    }
}

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode; 
    params: Promise<{ locale: string }>; 
}>) {
    const { locale } = await params;

    return (
        <html 
            lang={locale} 
            suppressHydrationWarning 
            className={jetbrains.variable}
        >
            <head>
                {/* DNS Prefetch & Preconnect */}
                {/* <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
                <link rel="dns-prefetch" href="https://res.cloudinary.com" /> */}
				{/* <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /> */}

				{/* Favicons */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="msapplication-TileColor" content="#ffffff" />

                {/* Preload Critical Resources */}
                {/* <link rel="preload" as="image" href="/logo.svg" type="image/svg+xml"/> */}

                {/* Security Headers */}
                <meta name="referrer" content="origin-when-cross-origin" />

                {/* Additional SEO Meta Tags */}
                <meta name="geo.region" content="CL-RM" />
                <meta name="geo.placename" content="Santiago, Chile" />
                <meta name="geo.position" content="-33.4489;-70.6693" />
                <meta name="ICBM" content="-33.4489, -70.6693" />
            </head>
			<body
				suppressHydrationWarning
				className="
                    font-sans antialiased tracking-wide flex min-h-screen flex-col 
                "
			>
                <div className="
                        flex flex-col min-h-screen
                        dark:bg-radial-[at_50%_75%] from-slate-900 to-slate-950 
                        overflow-hidden
                    "
                >
                    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                        <div className="stars" />
                        <div className="stars2" />
                        <div className="stars3" />
                    </div>


                    <ReactQueryProvider>
                        <Theme>
                            <ToastProvider />
                                <Analytics />
                                {children}
                            <BackToTopButton />
                        </Theme>
                    </ReactQueryProvider>
                </div>
			</body>
		</html>
	);
}