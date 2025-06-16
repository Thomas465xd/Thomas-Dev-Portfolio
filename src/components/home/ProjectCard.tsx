// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Link, UserCircle2 } from "lucide-react";
import type { ElementType } from "react";
import { SiGithub } from "react-icons/si";
import { useTranslation } from 'react-i18next';


type Technology = {
    name: string;
    icon: ElementType;
    color: string;
};

type Image = {
    name: string; 
}

type ProjectCardProps = {
    title: string;
    date: string;
    description: string; 
    images: Image[];
    account?: {
        email: string, 
        password: string, 
    }, 
    technologies: Technology[];
    url: string;
    frontend_repo: string; 
    backend_repo?: string; 
}

export default function ProjectCard({ title, date, description, images, account, technologies, url, frontend_repo, backend_repo} : ProjectCardProps) {

    const { t } = useTranslation();

    return (
        <motion.div 
            className="space-y-4"
        >
            <h2 className="text-2xl font-bold">
                { title }
            </h2>

            <div className="space-y-4">
                <p className="flex items-center gap-4 dark:text-gray-400 text-gray-500">
                    <Calendar size={20} />{ date }
                </p>

                <div className="relative dark:bg-slate-950 bg-gray-100 rounded py-1">
                    <div className="absolute left- top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
                    <p className="dark:text-gray-100 leading-relaxed pl-6">
                        { description }
                    </p>
                </div>

                {account ? (
                    <div className='mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border border-blue-100 dark:border-slate-700'>
                        <h3 className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 mb-3">
                            <UserCircle2 className="text-blue-600 dark:text-blue-400" size={20} />
                            {t("projects.test-account")}
                        </h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-slate-600 dark:text-slate-400 min-w-16">{t("projects.email")}</span>
                                <code className="bg-white dark:bg-slate-700 px-2 py-1 rounded font-mono text-blue-700 dark:text-blue-300 border border-slate-200 dark:border-slate-600">
                                    {account.email}
                                </code>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-slate-600 dark:text-slate-400 min-w-16">{t("projects.password")}</span>
                                <code className="bg-white dark:bg-slate-700 px-2 py-1 rounded font-mono text-blue-700 dark:text-blue-300 border border-slate-200 dark:border-slate-600">
                                    {account.password}
                                </code>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="">
                        <p className="">
                            No Test Account
                        </p>
                    </div>
                )}
            </div>

            {/* Fixed image container */}
            <div className="relative w-full max-w-5xl xl:max-w-6xl max-h-[650px] mx-auto rounded-2xl bg-gradient-to-bl dark:from-neutral-950 dark:via-slate-900 dark:to-gray-950 border border-gray-300 overflow-hidden group cursor-pointer shadow-[10px_10px_#00000020] dark:shadow-[10px_10px_#ffffff30] dark:border-gray-600">
                <div className="relative w-full max-w-5xl xl:max-w-6xl mx-auto rounded-2xl overflow-visible z-10">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ type: 'bullets', clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide
                                key={index}
                            >
                                <img 
                                    src={`/website/${img.name}.png`} 
                                    alt="Website Photo" 
                                    className="w-full h-full object-cover object-top transition-all duration-300 group-hover:brightness-75 group-hover:scale-105"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Optional overlay for better hover effect
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    */}
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
                {technologies.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm px-2 py-1 rounded-full" style={{ backgroundColor: tech.color + "20", color: tech.color }}>
                        <tech.icon className="w-4 h-4" />
                        <span className="">{tech.name}</span>
                    </div>
                ))}
            </div>

            <div className="flex justify-center md:justify-start flex-wrap gap-4">
                <div className="group border border-gray-600 w-auto px-3 py-2 rounded-md hover:bg-gray-100 hover:border-orange-500 dark:hover:bg-gray-800 dark:hover:border-orange-400 hover:shadow-lg transition-all duration-300 mb-8">
                    <a
                        href={url}
                        rel="author"
                        target="_blank"
                        type="website"
                        className="flex gap-2 justify-between items-center dark:text-white truncate"
                    >
                        <Link className="size-5 group-hover:rotate-[360deg] transition-all duration-600" />
                        {`${t("projects.button-visit")}`}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-500 pr-1" />
                    </a>
                </div>

                <div className="group border border-cyan-800 w-auto px-3 py-2 rounded-md hover:bg-gray-100 hover:border-cyan-500 dark:hover:bg-gray-800 dark:hover:border-cyan-400 hover:shadow-lg transition-all duration-300 mb-8">
                    <a
                        href={frontend_repo}
                        rel="author"
                        target="_blank"
                        type="website"
                        className="flex justify-between items-center gap-2 dark:text-white truncate"
                    >
                        <SiGithub className="size-5 group-hover:rotate-[360deg] transition-all duration-600" />
                        {`${t("projects.button-frontend")}`}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-500 pr-1" />
                    </a>
                </div>

                {backend_repo && (
                    <div className="group border border-purple-800 w-auto px-3 py-2 rounded-md hover:bg-gray-100 hover:border-purple-500 dark:hover:bg-gray-800 dark:hover:border-purple-400 hover:shadow-lg transition-all duration-300 mb-8">
                        <a
                            href={backend_repo}
                            rel="author"
                            target="_blank"
                            type="website"
                            className="flex justify-between items-center gap-2 dark:text-white truncate"
                        >
                            <SiGithub className="size-5 group-hover:rotate-[360deg] transition-all duration-600" />
                            {`${t("projects.button-backend")}`}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-500 pr-1" />
                        </a>
                    </div>
                )}
            </div>
        </motion.div>
    )
}