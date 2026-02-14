import { CodeXml } from 'lucide-react';
import Link from 'next/link';
import RightsReserved from './RightsReserved';
import initTranslations from '@/app/[locale]/i18n';
import TranslationsProvider from '@/components/providers/TranslationsProvider';

type FooterProps = {
    dark?: boolean; 
    locale: string; 
}

export default async function Footer({ dark, locale }: FooterProps) {
    const namespaces = ["common"]
    const { t, resources } = await  initTranslations(locale, namespaces);

    return (
        <footer className={`w-full max-w-[480px] sm:max-w-xl md:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t-2 dark:border-gray-700 border-gray-300 mb-16`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <TranslationsProvider
                    locale={locale}
                    namespaces={namespaces}
                    resources={resources}
                >
                    <RightsReserved />
                </TranslationsProvider>

                <p className={`text-center md:truncate ${dark ? "text-gray-400" : "text-gray-700 dark:text-gray-500"} text-sm flex items-center justify-center gap-2`}>
                    <CodeXml size={18}/>
                    {`${t("footer.developed")}`}{' '}
                    <Link
                        className={`${dark ? "text-gray-700 hover:text-amber-500" : "text-gray-500 dark:text-gray-500 hover:text-blue-500 dark:hover:text-yellow-500 hover:underline "} font-semibold transition-colors duration-300`}
                        href="https://github.com/Thomas465xd/Thomas-Dev-Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Thomas Schrödinger GitHub Profile"
                    >
                        {`${t("footer.name")}`}
                    </Link>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 items-start text-center md:text-left">
                <div className="space-y-2">
                    <h3 className='font-bold'>{`${t("footer.links-1")}`}</h3>

                    <div className="flex flex-col gap-2">
                        <Link
                            href="/"
                            className='text-gray-700 dark:text-gray-400 hover:underline dark:hover:text-gray-300 transition-colors duration-200'
                        >
                            {`${t("footer.link-home")}`}
                        </Link>

                        <Link
                            href="/projects"
                            className='text-gray-700 dark:text-gray-400 hover:underline dark:hover:text-gray-300 transition-colors duration-200'
                        >
                            {`${t("footer.link-projects")}`}
                        </Link>

                        <Link
                            href="/blog"
                            className='text-gray-700 dark:text-gray-400 hover:underline dark:hover:text-gray-300 transition-colors duration-200'
                        >
                            {`${t("footer.link-blog")}`}
                        </Link>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className='font-bold'>{`${t("footer.links-2")}`}</h3>

                    <div className="flex flex-col gap-2">
                        <Link
                            href="https://github.com/Thomas465xd"
                            className='text-gray-700 dark:text-gray-400 hover:underline dark:hover:text-gray-300 transition-colors duration-200'
                        >
                            {`${t("footer.link-github")}`}
                        </Link>

                        <Link
                            href="/"
                            className='text-gray-700 dark:text-gray-400 hover:underline dark:hover:text-gray-300 transition-colors duration-200'
                        >
                            {`${t("footer.link-instagram")}`}
                        </Link>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className='font-bold'>{`${t("footer.links-3")}`}</h3>

                    <div className="flex flex-col gap-2">
                        <Link
                            href="/contact"
                            className='text-gray-700 dark:text-gray-400 hover:underline dark:hover:text-gray-300 transition-colors duration-200'
                        >
                            {`${t("footer.link-contact")}`}
                        </Link>

                        <Link
                            href="/photography"
                            className='text-gray-700 dark:text-gray-400 hover:underline dark:hover:text-gray-300 transition-colors duration-200'
                        >
                            {`${t("footer.link-photography")}`}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}