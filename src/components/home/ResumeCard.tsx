import { ArrowRight, CodeXml } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ResumeCard() {

    const { t } = useTranslation() 

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20 mx-auto">
            <div className="">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <CodeXml /> {t("resume.heading")}<span className="font-black text-yellow-500">.</span>
                </h2>

                <p className="text-gray-400 mt-4">
                    {t("resume.p-1")}
                    <br />
                    <br />
                    {t("resume.p-2")}
                    <br />
                    <br />
                    {t("resume.p-3")}
                </p>

                <div className="flex flex-col items-baseline md:flex-row md:items-center gap-4 mt-4 truncate">
                    <Link
                        to="https://github.com/Thomas465xd"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Thomas Schrödinger GitHub Profile"
                        className="bg-blue-600 p-2 rounded-md text-white flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300"
                    >
                        <FaGithub size={22} /> {t("resume.button-1")} <ArrowRight size={15} />
                    </Link>

                    <Link
                        to="/contact"
                        className="bg-neutral-800 p-2 px-4 rounded-md text-white flex items-center gap-2 hover:bg-neutral-900 transition-colors duration-300"
                    >
                        {t("resume.button-2")} <ArrowRight size={15} />
                    </Link>
                </div>
            </div>

            <div className="p-[2px] rounded-2xl bg-gradient-to-bl dark:from-neutral-950 dark:via-slate-900 dark:to-gray-950 border border-gray-300 
                shadow-[10px_10px_#000000] dark:shadow-[10px_10px_#ffffff30] 
                dark:border-gray-600">    

            </div>
        </div>
    );
};