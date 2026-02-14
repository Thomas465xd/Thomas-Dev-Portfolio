import { Metadata } from 'next'
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/providers/TranslationsProvider';
import ProjectsList from '@/components/home/projects/ProjectsList';

// Dynamic metadata with translations
export async function generateMetadata({ params } : { params: Promise<{ locale: string }>}): Promise<Metadata> {
    const { locale } = await params; 
    
    const namespaces = ["metadata"];
    const { t } = await initTranslations(locale, namespaces);

    return {
        title: t("title.projects"),
        description: t("description.projects"),
        openGraph: {
            title: t("title.projects"),
            description: t("description.projects"),
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
            <ProjectsList
                locale={locale}
                allProjects
            />
        </TranslationsProvider>
    )
}
