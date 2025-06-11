import { ArrowRight, CodeXml, Container, GitCompareArrows, GraduationCap } from "lucide-react";
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

                <div className="flex flex-col items-baseline lg:flex-row lg:items-center gap-4 mt-4 truncate">
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
                dark:border-gray-600"
            >    
                <div className="p-8 space-y-4">
                    <div className="flex items-center gap-4 ">
                        <GraduationCap className="text-white bg-blue-600 p-2 rounded-md" size={36}/>
                        <p className="uppercase font-semibold">My Studio</p>
                    </div>

                    <div className="space-y-8">
                        <p className="text-lg">
                            thomas.dev is more than just a portfolios; it's a window into my own world, where passion meets purpose. 
                            Discover my journey and my work.
                        </p>

                        <div className="flex justify-between items-center">
                            <a
                                href="/files/resume.pdf"
                                download
                                className="px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-neutral-900 rounded-full text-sm hover:bg-gray-100 hover:border-blue-500 dark:hover:border-indigo-500 dark:hover:bg-neutral-950 transition-colors duration-200"
                            >
                                Download CV
                            </a>

                            <Link
                                to="/blog"
                                className="px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-neutral-900 rounded-full text-sm hover:bg-gray-100 hover:border-blue-500 dark:hover:border-indigo-500 dark:hover:bg-neutral-950 transition-colors duration-200"
                            >
                                View my Blog
                            </Link>
                        </div>

                        <div className="flex flex-col space-y-4 lg:flex-row justify-between lg:space-y-0 lg:space-x-4">
                            <div className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg space-y-2 dark:bg-slate-900 dark:hover:border-indigo-500 hover:scale-101 transition-all duration-300">
                                <GitCompareArrows className="text-orange-600"/>
                                <h3 className="font-bold text-sm">
                                    Web Development
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    Delivering fast, scalable, and SEO-optimized web apps with clean code.
                                </p>
                            </div>

                            <div className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg space-y-2 dark:bg-slate-900 dark:hover:border-indigo-500 hover:scale-101 transition-all duration-300">
                                <Container className="text-[#1D63ED]"/>
                                <h3 className="font-bold text-sm">
                                    DevOps
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    Building robust infrastructure and dockerized apps for efficient delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};