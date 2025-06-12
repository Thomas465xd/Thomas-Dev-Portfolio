import { CodeXml } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type FooterProps = {
    dark?: boolean; 
}

export default function Footer({ dark }: FooterProps) {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const { t } = useTranslation();

    return (
        <footer className={`w-full max-w-[480px] sm:max-w-xl md:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t-2 dark:border-gray-700 border-gray-300 mb-16`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className={`text-center md:truncate py-4 ${dark ? "text-gray-400" : "text-gray-400 dark:text-gray-600"}`}>
                    Thomas Schrödinger Dev Portfolio - {`${t("footer.copyright")}`} &copy; {year ?? '----'}
                </p>
                <p className={`text-center md:truncate ${dark ? "text-gray-400" : "text-gray-400 dark:text-gray-600"} text-sm flex items-center justify-center gap-2`}>
                    <CodeXml size={18}/>
                    {`${t("footer.developed")}`}{' '}
                    <a
                        className={`${dark ? "text-gray-700 hover:text-amber-500" : "text-gray-500 dark:text-gray-500 hover:text-blue-500 dark:hover:text-yellow-500 hover:underline "} font-semibold transition-colors duration-300`}
                        href="https://github.csom/Thomas465xd"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Thomas Schrödinger GitHub Profile"
                    >
                        Thomas Schrödinger
                    </a>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <div className="space-y-2">
                    <h3 className='font-bold'>{`${t("footer.links-1")}`}</h3>

                    <div className="flex flex-col gap-2">
                        <Link
                            to="/"
                            className='text-gray-700 dark:text-gray-400 hover:underline dark:hover:text-gray-300 transition-colors duration-200'
                        >
                            {`${t("footer.link-home")}`}
                        </Link>

                        <Link
                            to="/projects"
                            className='text-gray-700 dark:text-gray-400 hover:underline dark:hover:text-gray-300 transition-colors duration-200'
                        >
                            {`${t("footer.link-projects")}`}
                        </Link>

                        <Link
                            to="/blog"
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
                            to="https://github.com/Thomas465xd"
                            className='text-gray-700 dark:text-gray-400 hover:underline dark:hover:text-gray-300 transition-colors duration-200'
                        >
                            {`${t("footer.link-github")}`}
                        </Link>

                        <Link
                            to="/"
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
                            to="/contact"
                            className='text-gray-700 dark:text-gray-400 hover:underline dark:hover:text-gray-300 transition-colors duration-200'
                        >
                            {`${t("footer.link-contact")}`}
                        </Link>

                        <Link
                            to="/photography"
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