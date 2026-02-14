import ProjectCard from "./ProjectCard";
import {
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiDocker,
    SiVercel,
    SiNextdotjs,
    SiRender,
    SiGithub,
    SiApollographql,
    SiGraphql,
} from "react-icons/si";
import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client"
import Link from "next/link";
import initTranslations from "@/app/[locale]/i18n";

type ProjectsListProps = {
    allProjects?: boolean;
    locale: string
}


export default async function ProjectsList({ allProjects = false, locale } : ProjectsListProps) {
    const namespaces = ["projects"]
    const { t } = await initTranslations(locale, namespaces); 

    const projects = [
        {
            title: `${t("projects.morangojoyas-title")}`, 
            date: "February 10, 2026 - Now", 
            description: `${t("projects.morangojoyas-description")}`, 
            images: [
                { name: "morangojoyas1" }, 
                { name: "morangojoyas2" }, 
                { name: "morangojoyas3" }
            ], 
            technologies: [
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, color: "#a9a9a9" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
                { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
                { name: "Express.js", icon: SiExpress, color: "#a9a9a9" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "Vercel", icon: SiVercel, color: "#000000"},
                { name: "Render", icon: SiRender, color: "#311C87"},
                { name: "Docker", icon: SiDocker, color: "#2496ED"}
            ], 
            url: "https://morangojoyas.cl", 
            frontend_repo: "https://github.com/Thomas465xd/morango-frontend", 
            backend_repo: "https://github.com/Thomas465xd/morango-backend", 
        },
        {
            title: `${t("projects.jup-title")}`, 
            date: "December 3, 2025 - Now", 
            description: `${t("projects.jup-description")}`, 
            images: [
                { name: "jup1" }, 
                { name: "jup2" }, 
                { name: "jup3" }
            ], 
            technologies: [
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, color: "#a9a9a9" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
                { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
                { name: "Express.js", icon: SiExpress, color: "#a9a9a9" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "Vercel", icon: SiVercel, color: "#000000"},
                { name: "Render", icon: SiRender, color: "#311C87"},
                { name: "Docker", icon: SiDocker, color: "#2496ED"}
            ], 
            url: "https://jup.cl", 
            frontend_repo: "https://github.com/Thomas465xd/JUP-RealEstate_Frontend", 
            backend_repo: "https://github.com/Thomas465xd/JUP-RealEstate_Backend", 
        },
        {
            title: `${t("projects.portalspt-title")}`, 
            date: "March 17, 2025 - Now", 
            description: `${t("projects.portalspt-description")}`, 
            images: [
                { name: "portalspt1" }, 
                { name: "portalspt2" }, 
                { name: "portalspt3" }
            ], 
            technologies: [
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
                { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
                { name: "Express.js", icon: SiExpress, color: "#a9a9a9" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "Vercel", icon: SiVercel, color: "#000000"},
                { name: "Render", icon: SiRender, color: "#311C87"},
                { name: "Docker", icon: SiDocker, color: "#2496ED"}
            ], 
            url: "https://www.portalspt.cl", 
            frontend_repo: "https://github.com/Thomas465xd/spt_frontend", 
            backend_repo: "https://github.com/Thomas465xd/spt_backend", 
        },
        { 
            title: `${t("projects.uptask-title")}`, 
            date: "January 22, 2025 - Now", 
            description: `${t("projects.uptask-description")}`, 
            images: [
                { name: "uptask1" }, 
                { name: "uptask2" }, 
                { name: "uptask3" }
            ], 
            account: {
                email: "test@test.com",
                password: "password", 
            }, 
            technologies: [
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
                { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
                { name: "Express.js", icon: SiExpress, color: "#a9a9a9" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "Vercel", icon: SiVercel, color: "#000000"},
                { name: "Render", icon: SiRender, color: "#311C87"},
                { name: "Docker", icon: SiDocker, color: "#2496ED"}
            ],
            url: "https://uptask-react-ts.vercel.app/", 
            frontend_repo: "https://github.com/Thomas465xd/uptask_frontend", 
            backend_repo: "https://github.com/Thomas465xd/uptask_backend", 
        }, 
        {
            title: `${t("projects.nextcrm-title")}`, 
            date: "May 23, 2025 - Now", 
            description: `${t("projects.nextcrm-description")}`, 
            images: [
                { name: "nextcrm1" }, 
                { name: "nextcrm2" }, 
                { name: "nextcrm3" }
            ], 
            account: {
                email: "test@test.com", 
                password: "password", 
            }, 
                technologies: [
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, color: "#a9a9a9" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
                { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
                { name: "GraphQL", icon: SiGraphql, color: "#E535AB" },
                { name: "Apollo Server", icon: SiApollographql, color: "#311C87" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "Vercel", icon: SiVercel, color: "#000000"},
                { name: "Render", icon: SiRender, color: "#311C87"},
                { name: "Docker", icon: SiDocker, color: "#2496ED"}
            ],
            url: "https://next-crm-graphql.vercel.app", 
            frontend_repo: "https://github.com/Thomas465xd/Frontend-Apollo-Client_CRM-NextJS", 
            backend_repo: "https://github.com/Thomas465xd/Backend-GraphQL-CRM", 
        },
    ];

    const displayedProjects = allProjects ? projects : projects.slice(0, 3);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} 
            className="my-10 space-y-10"
        >
            <div className="">
                {allProjects ? (
                    <>
                        <h2 className="text-3xl font-bold">
                            { t("projects.heading-1") }<span className="font-black text-yellow-500">.</span>
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 my-4">
                            { t("projects.p-1")} 
                        </p>
                    </>
                ) : (
                    <>
                        <h2 className="text-3xl font-bold">
                            { t("projects.heading-2") }<span className="font-black text-yellow-500">.</span>
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 my-4">
                            { t("projects.p-2") }
                        </p>
                    </>
                )}
            </div>

            <div className="grid grid-cols-1 gap-8">
                {displayedProjects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        locale={locale}
                        {...project} 
                    />
                ))}
            </div>

            {allProjects && (
                <div className="flex justify-center">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <p className="dark:text-gray-400 text-gray-700">
                            { t("projects.above-button-1")}
                        </p>
                        <div className="group border border-blue-800 max-w-52 px-3 py-2 rounded-md hover:bg-gray-100 hover:border-blue-500 dark:hover:bg-gray-800 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 mb-8">
                            <a
                                href="https://github.com/Thomas465xd"
                                rel="author"
                                target="_blank"
                                type="website"
                                className="flex justify-between items-center gap-2 dark:text-white truncate"
                            >
                                <SiGithub className="size-5 group-hover:rotate-[360deg] transition-all duration-600" />
                                Github Profile
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-500 pr-1" />
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {!allProjects && (
                <div className="flex justify-center">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <p className="dark:text-gray-400 text-gray-700">
                            { t("projects.above-button-2")}
                        </p>
                        <Link
                            href="/projects"
                            className="
                                group px-4 py-2 rounded-md flex items-center gap-2
                                bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-900 
                                bg-[length:200%_200%] bg-[position:0%_50%] hover:bg-[position:100%_50%] 
                                transition-all duration-500 text-white
                            "
                        >
                            { t("projects.button-1") } <ArrowRight className="group-hover:translate-x-1 transition-all duration-500" size={16} />
                        </Link>
                    </div>
                </div>
            )}
        </motion.section>
    )
}
