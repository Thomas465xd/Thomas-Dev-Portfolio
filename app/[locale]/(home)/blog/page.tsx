import DevelopmentCard from '@/components/ui/DevelopmentCard'
import { ArrowRight, House, Settings } from 'lucide-react'
import Link from 'next/link'
import initTranslations from '../../i18n';
import { Metadata } from 'next';

// Dynamic metadata with translations
export async function generateMetadata({ params } : { params: Promise<{ locale: string }>}): Promise<Metadata> {
    const { locale } = await params; 
    
    const namespaces = ["common"];
    const { t } = await initTranslations(locale, namespaces);

    return {
        title: t("title.blog"),
        description: t("description.blog"),
        openGraph: {
            title: t("title.blog"),
            description: t("description.blog"),
            locale: locale,
            type: 'website',
        },
    };
}


export default function page() {
    return (
        <div className='flex-center-col'>
            <DevelopmentCard
                icon={Settings}
                title='Blog posts in development...'
                description='Blog posts feature for the portfolio is currently an on-development feature.'
            />

            <div className="group border border-cyan-800 w-auto px-3 py-2 rounded-md hover:bg-gray-100 hover:border-cyan-500 dark:hover:bg-gray-800 dark:hover:border-cyan-400 hover:shadow-lg transition-all duration-300 mb-8">
                <Link
                    href={"/"}
                    className="flex justify-between items-center gap-2 dark:text-white truncate"
                >
                    <House className="size-5 group-hover:rotate-[360deg] transition-all duration-600" />
                    Go back home
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-500 pr-1" />
                </Link>
            </div>
        </div>
    )
}
