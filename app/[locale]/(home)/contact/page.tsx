import { Metadata } from 'next'
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/providers/TranslationsProvider';
import ContactSection from '@/components/home/contact/ContactSection';


// Dynamic metadata with translations
export async function generateMetadata({ params } : { params: Promise<{ locale: string }>}): Promise<Metadata> {
    const { locale } = await params; 
    
    const namespaces = ["metadata"];
    const { t } = await initTranslations(locale, namespaces);

    return {
        title: t("title.contact"),
        description: t("description.contact"),
        openGraph: {
            title: t("title.contact"),
            description: t("description.contact"),
            locale: locale,
            type: 'website',
        },
    };
}

export default async function page({ params } : { params: Promise<{ locale: string }>}) {
    const { locale } = await params; 

    const namespaces = ["projects"]
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={namespaces}
        >
            <ContactSection
                locale={locale}
            />
        </TranslationsProvider>
    )
}
