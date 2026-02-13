import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import initTranslations from "@/app/[locale]/i18n";

type NotFoundProps = {
    locale: string; 
}

export default async function NotFound({ locale } : NotFoundProps) {
    const namespaces = ["common"]; 
    const { t } = await initTranslations(locale, namespaces)

	return (
        <>
            <main className="grid min-h-screen place-items-center px-6 pb-24 sm:pb-32 lg:px-8 mt-12">
                <div className="text-center">
                    <div className="flex justify-center shrink-0 items-center mb-12">
                        <Logo mini />
                    </div>
                    <p className="text-base font-semibold text-amber-500 dark:text-amber-400">
                        404
                    </p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-slate-900 sm:text-7xl dark:text-white">
                        {t("error.header")}
                    </h1>
                    <p className="mt-6 text-lg font-medium text-pretty text-slate-500 sm:text-xl/8 dark:text-slate-400">
                        {t("error.message")}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="
                                rounded-md px-3.5 py-2.5 text-sm font-semibold
                                bg-slate-900 text-white shadow-xs hover:bg-slate-800 
                                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 
                                dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus-visible:outline-slate-400 
                                transition-colors duration-200
                            "
                        >
                            {t("error.button-home")}
                        </Link>
                        <Link
                            href="/contact"
                            className="
                                flex-align px-3.5 py-2.5 
                                text-sm text-blue-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 
                                transition duration-200 p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10
                            "
                            aria-label="Contact support"
                        >
                            {t("error.button-report")}
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </main>
        </>
	);
}