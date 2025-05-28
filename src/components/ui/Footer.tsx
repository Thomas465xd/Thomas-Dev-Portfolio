import { CodeXml } from 'lucide-react';
import { useEffect, useState } from 'react';

type FooterProps = {
    dark?: boolean; 
}

export default function Footer({ dark }: FooterProps) {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className={`${dark ? "bg-gray-900 border-t-2 border-gray-700" : "bg-gray-100 border-gray-300 dark:bg-gray-900 border-t-2 dark:border-gray-700"} flex justify-between`}>
            <p className={`text-center p-4 ${dark ? "text-gray-400" : "text-gray-700 dark:text-gray-400"}`}>
                Thomas Schrödinger Dev Portfolio - Copyright &copy; {year ?? '----'}
            </p>
            <p className={`text-center p-4 ${dark ? "text-gray-400" : "text-gray-700 dark:text-gray-400"} text-sm flex items-center justify-center gap-2`}>
                <CodeXml size={18}/>
                Developed by{' '}
                <a
                    className={`${dark ? "text-gray-400 hover:text-amber-500" : "hover:text-gray-900 dark:hover:text-yellow-500 "} font-semibold transition-colors duration-300`}
                    href="https://github.csom/Thomas465xd"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Thomas Schrödinger GitHub Profile"
                >
                    Thomas Schrödinger
                </a>
            </p>
        </footer>
    );
}