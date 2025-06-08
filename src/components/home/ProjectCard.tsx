import { motion } from "framer-motion";
import { ArrowRight, Link } from "lucide-react";
import type { ElementType } from "react";
import { SiGithub } from "react-icons/si";

type Technology = {
    name: string;
    icon: ElementType;
    color: string;
};

type ProjectCardProps = {
    title: string;
    date: string;
    description: string; 
    image: string;
    account?: {
        email: string, 
        password: string, 
    }, 
    technologies: Technology[];
    url: string;
    frontend_repo: string; 
    backend_repo?: string; 
}

export default function ProjectCard({ title, date, description, image, account, technologies, url, frontend_repo, backend_repo} : ProjectCardProps) {
    return (
        <motion.div 
            className="space-y-4"
        >
            <h2 className="text-2xl font-bold">
                { title }
            </h2>

            <div className="">
                <p className="dark:text-gray-400 text-gray-500">
                    { date }
                </p>

                <p className="dark:text-gray-300 text-gray-700">
                    { description }
                </p>

                {account && (
                    <div className=" mt-4">
                        <h3 className="font-bold text-lg mb-2">Test Account: </h3>
                        <p className="">
                            Email: <span className="font-bold">{ account.email } </span>
                            <br />
                            Password: <span className="font-bold">{ account.password }</span>
                        </p>
                    </div>
                )}
            </div>

            <div className="w-full max-w-6xl mx-auto p-50 rounded-2xl bg-gradient-to-bl dark:from-neutral-950 dark:via-slate-900 dark:to-gray-950 border border-gray-800">
                { image }
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
                {technologies.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm px-2 py-1 rounded-full" style={{ backgroundColor: tech.color + "20", color: tech.color }}>
                    <tech.icon className="w-4 h-4" />
                    {tech.name}
                    </div>
                ))}
            </div>

            <div className="flex gap-4">
                <div className="group border border-gray-600 max-w-52 px-3 py-2 rounded-md hover:bg-gray-100 hover:border-orange-500 dark:hover:bg-gray-800 dark:hover:border-orange-400 hover:shadow-lg transition-all duration-300 mb-8">
                    <a
                        href={url}
                        rel="author"
                        target="_blank"
                        type="website"
                        className="flex gap-2 justify-between items-center dark:text-white truncate"
                    >
                        <Link className="size-5 group-hover:rotate-[360deg] transition-all duration-600" />
                        Visit Website
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-500 pr-1" />
                    </a>
                </div>

                <div className="group border border-cyan-800 max-w-52 px-3 py-2 rounded-md hover:bg-gray-100 hover:border-cyan-500 dark:hover:bg-gray-800 dark:hover:border-cyan-400 hover:shadow-lg transition-all duration-300 mb-8">
                    <a
                        href={frontend_repo}
                        rel="author"
                        target="_blank"
                        type="website"
                        className="flex justify-between items-center gap-2 dark:text-white truncate"
                    >
                        <SiGithub className="size-5 group-hover:rotate-[360deg] transition-all duration-600" />
                        Frontend Repo
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-500 pr-1" />
                    </a>
                </div>

                <div className="group border border-purple-800 max-w-52 px-3 py-2 rounded-md hover:bg-gray-100 hover:border-purple-500 dark:hover:bg-gray-800 dark:hover:border-purple-400 hover:shadow-lg transition-all duration-300 mb-8">
                    <a
                        href={backend_repo}
                        rel="author"
                        target="_blank"
                        type="website"
                        className="flex justify-between items-center gap-2 dark:text-white truncate"
                    >
                        <SiGithub className="size-5 group-hover:rotate-[360deg] transition-all duration-600" />
                        Backend Repo
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-500 pr-1" />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}
