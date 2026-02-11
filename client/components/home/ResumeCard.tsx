import { ArrowRight, CodeXml, Container, GitCompareArrows, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "motion/react"

export default function ResumeCard() {

    const { t } = useTranslation() 

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-20 mx-auto max-w-6xl"
        >
            {/* Left Content Section */}
            <div className="space-y-8">
                <h2 className="text-2xl lg:text-4xl font-bold flex items-center gap-3">
                    <CodeXml className="text-blue-500" /> 
                    {t("resume.heading")}
                    <span className="font-black text-yellow-500">.</span>
                </h2>

                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>{t("resume.p-1")}</p>
                    <p>{t("resume.p-2")}</p>
                    <p>{t("resume.p-3")}</p>
                </div>

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

            {/* Right Card Section */}
            <div className="relative group">
                {/* Gradient border wrapper */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-none"></div>
                
                <div className="relative bg-white dark:bg-gradient-to-bl dark:from-neutral-950 dark:via-slate-900 dark:to-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 space-y-6 hover:shadow-2xl transition-all duration-300">
                    
                    {/* Header */}
                    <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                            <GraduationCap className="text-white" size={28}/>
                        </div>
                        <div>
                            <p className="uppercase font-bold text-sm tracking-wider text-gray-500 dark:text-gray-400">{t("resume.heading-2")}</p>
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1"></div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        {t("resume.p-resume")}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={`/files/${t("resume.button-resume-url")}.pdf`}
                            download
                            className="group flex-1 px-6 py-2 text-sm border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 rounded-xl text-center transition-all duration-300 hover:border-blue-400 hover:shadow-md transform hover:scale-105"
                        >
                            <span className="font-medium">{t("resume.button-resume")}</span>
                        </a>

                        <Link
                            to="/blog"
                            className="group flex-1 px-6 py-2 text-sm border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 dark:hover:from-purple-900/20 dark:hover:to-cyan-900/20 rounded-xl text-center transition-all duration-300 hover:border-purple-400 hover:shadow-md transform hover:scale-105"
                        >
                            <span className="font-medium">{t("resume.button-blog")}</span>
                        </Link>
                    </div>

                    {/* Skills Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div className="group/card relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 border border-orange-200 dark:border-orange-800/30 rounded-xl p-5 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-orange-400">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full -translate-y-8 translate-x-8"></div>
                            <div className="relative space-y-3">
                                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg w-fit">
                                    <GitCompareArrows className="text-white" size={20}/>
                                </div>
                                <h3 className="font-bold text-gray-800 dark:text-gray-200">
                                    {t("resume.heading-web")}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {t("resume.p-web")}
                                </p>
                            </div>
                        </div>

                        <div className="group/card relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 border border-blue-200 dark:border-blue-800/30 rounded-xl p-5 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-blue-400">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full -translate-y-8 translate-x-8"></div>
                            <div className="relative space-y-3">
                                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg w-fit">
                                    <Container className="text-white" size={20}/>
                                </div>
                                <h3 className="font-bold text-gray-800 dark:text-gray-200">
                                    {t("resume.heading-devops")}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {t("resume.p-devops")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};