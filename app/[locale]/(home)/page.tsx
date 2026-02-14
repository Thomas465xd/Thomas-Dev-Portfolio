import { Metadata } from 'next'
import TranslationsProvider from '@/components/providers/TranslationsProvider'
import initTranslations from '../i18n';
import PresentationCard from '@/components/home/presentation/PresentationCard';
import ResumeCard from '@/components/home/ResumeCard';
import ProjectsList from '@/components/home/projects/ProjectsList';
import ExperienceList from '@/components/home/experience/ExperienceList';
import TechnologyList from '@/components/home/technologies/TechnologyList';
import ContactSection from '@/components/home/contact/ContactSection';

// Dynamic metadata with translations
export async function generateMetadata({ params } : { params: Promise<{ locale: string }>}): Promise<Metadata> {
    const { locale } = await params; 
    
    const namespaces = ["metadata"];
    const { t } = await initTranslations(locale, namespaces);

    return {
        title: t("title.home"),
        description: t("description.home"),
        openGraph: {
            title: t("title.home"),
            description: t("description.home"),
            locale: locale,
            type: 'website',
        },
    };
}

export default async function page({ params } : { params: Promise<{ locale: string }>}) {
    const { locale } = await params; 

    const namespaces = ["resume", "projects", "contact"]

    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={namespaces}
        >
            <PresentationCard locale={locale}/>
            <ResumeCard locale={locale} />
            <ProjectsList locale={locale} />
            <ExperienceList locale={locale} />
            <TechnologyList locale={locale} />
            <ContactSection locale={locale} />
        </TranslationsProvider>
    )
}
