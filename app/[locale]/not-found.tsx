import { Metadata } from 'next'
import { cookies } from 'next/headers'
import NotFound from '@/components/ui/NotFound'
import Footer from '@/components/home/footer/Footer'
import initTranslations from './i18n'
import TranslationsProvider from '@/components/providers/TranslationsProvider'
import NavBar from '@/components/home/navbar/NavBar'

// Get locale from either params or cookies (set by i18nRouter middleware)
// Fallback to cookies when params are undefined (e.g., when redirected from root not-found)
async function getLocale(params?: Promise<{ locale?: string }>) {
    try {
        if (params) {
            const resolvedParams = await params;
            if (resolvedParams?.locale) return resolvedParams.locale;
        }
    } catch {
        // params may be undefined, fall through to cookies
    }
    
    const cookieStore = await cookies();
    return cookieStore.get('NEXT_LOCALE')?.value || 'en';
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
    const locale = await getLocale(params);
    
    const namespaces = ["common", "metadata"];
    const { t } = await initTranslations(locale, namespaces);

    return {
        title: t("error.header"),
        description: t("error.message"),
    };
}

export default async function NotFoundPage({ params }: { params?: Promise<{ locale?: string }> }) {
    const locale = await getLocale(params);
    
    const namespaces = ["common"];
    const { resources } = await initTranslations(locale, namespaces);

    return (
        <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={namespaces}
        >
            <section className=''>
                <NavBar locale={locale} />
                <NotFound locale={locale} />
                <Footer locale={locale} />
            </section>
        </TranslationsProvider>
    )
}