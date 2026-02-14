"use client"; 
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

type RightsReservedProps = {
    dark?: boolean; 
}

export default function RightsReserved({ dark } : RightsReservedProps) {
    const [year, setYear] = useState<number | null>(null);
    const { t } = useTranslation(); 

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <p className={`text-center md:truncate py-4 ${dark ? "text-gray-400" : "text-gray-700 dark:text-gray-500"}`}>
            Thomas Dev Portfolio - {`${t("footer.copyright")}`} &copy; {year ?? '----'}
        </p>
    )
}
