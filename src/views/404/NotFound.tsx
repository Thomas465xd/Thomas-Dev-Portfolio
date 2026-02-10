import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFound() {

    const { t } = useTranslation();

    return (
        <>
            <main className="grid min-h-full place-items-center px-6 py-12 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-blue-600">404</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance dark:text-white text-gray-900 sm:text-7xl">
                        { t("error.header") }
                    </h1>
                    <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        { t("error.message") }
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-800 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            { t("error.button-home") }
                        </Link>
                        <Link
                            to="/contact"
                            className='rounded-md text-gray-700 px-3.5 py-2.5 font-semibold dark:text-gray-400 hover:underline dark:hover:text-gray-300 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                            { t("error.button-report") }
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}