import {
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiGit,
    SiGithub,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiDocker,
    SiVercel,
    SiEslint,
    SiHtml5,
    SiCss3,
    SiGraphql,
    SiCanva,
    SiApollographql,
    SiPrettier,
    SiNextdotjs
} from "react-icons/si";
import TechnologyCard from "./TechnologyCard";


const technologies = [
    //^Frontend
    { icon: SiHtml5, type: "Frontend", name: "HTML", color: "#E34F26"},
    { icon: SiCss3, type: "Frontend", name: "CSS", color: "#1572B6"},
    { icon: SiJavascript, type: "Frontend", name: "JavaScript", color: "#F7DF1E"},
    { icon: SiTypescript, type: "Frontend", name: "TypeScript", color: "#3178C6"},
    { icon: SiReact, type: "Frontend", name: "React", color: "#61DAFB"},
    { icon: SiNextdotjs, type: "Frontend", name: "Next.js", color: ""},
    { icon: SiTailwindcss, type: "Frontend", name: "TailwindCSS", color: "#38BDF8"},

    //? Backend
    { icon: SiNodedotjs, type: "Backend", name: "Node.js", color: "#339933"},
    { icon: SiExpress, type: "Backend", name: "Express.js", color: "#000000"},
    { icon: SiGraphql, type: "Backend", name: "GraphQL", color: "#E10098"},
    { icon: SiApollographql, type: "Backend", name: "Apollo Server", color: "#311C87"},

    //~ Databases
    { icon: SiMongodb, type: "DB", name: "MongoDB", color: "#47A248"},
    { icon: SiPostgresql, type: "DB", name: "PostgreSQL", color: "#336791"},
    { icon: SiMysql, type: "DB", name: "MySQL", color: "#4479A1"},

    //* Other
    { icon: SiDocker, type: "Other", name: "Docker", color: "#2496ED"},
    { icon: SiGit, type: "Other", name: "Git", color: "#F05032"},
    { icon: SiGithub, type: "Other", name: "GitHub", color: ""},
    { icon: SiEslint, type: "Other", name: "ESlint", color: "#4B32C3"}, 
    { icon: SiPrettier, type: "Other", name: "Prettier", color: "#F7B93E"},
    { icon: SiCanva, type: "Other", name: "Canva", color: "#00C4CC"},
    { icon: SiVercel, type: "Other", name: "Vercel", color: "#000000"},
];

export default function TechnologyList() {

    const frontendTechs = technologies.filter(tech => tech.type === "Frontend");
    const backendTechs = technologies.filter(tech => tech.type === "Backend");
    const databases = technologies.filter(tech => tech.type === "DB")
    const otherTools = technologies.filter(tech => tech.type === "Other");

    return (
        <div className="space-y-10">

            <div className="">
                <h1 className="text-3xl font-bold">
                    Technologies I use<span className="font-black text-neutral-400">:</span>
                </h1>
                <p className="mt-4 dark:text-neutral-300 text-gray-600">
                    Over time, I have worked with a variety of technologies accomodating to the needs of every single project.
                    Here are some of the technologies that i use in my stack: 
                </p>
            </div>

            <h2 className="text-2xl font-bold">
                Frontend<span className="font-black text-yellow-500">:</span>
            </h2>

            <div className="flex flex-wrap gap-4">
                {frontendTechs.map((tech, index) => (
                    <TechnologyCard
                        key={index}
                        name={tech.name}
                        icon={tech.icon}
                        type={tech.type}
                        color={tech.color}
                    />
                ))}
            </div>

            <h2 className="text-2xl font-bold">
                Backend<span className="font-black text-indigo-500">:</span>
            </h2>

            <div className="flex flex-wrap gap-4">
                {backendTechs.map((tech, index) => (
                    <TechnologyCard
                        key={index}
                        name={tech.name}
                        icon={tech.icon}
                        type={tech.type}
                        color={tech.color}
                    />
                ))}
            </div>

            <h2 className="text-2xl font-bold">
                Databases<span className="font-black text-blue-500">:</span>
            </h2>

            <div className="flex flex-wrap gap-4">
                {databases.map((tech, index) => (
                    <TechnologyCard
                        key={index}
                        name={tech.name}
                        icon={tech.icon}
                        type={tech.type}
                        color={tech.color}
                    />
                ))}
            </div>

            <h2 className="text-2xl font-bold">
                Tools that i use<span className="font-black text-blue-500">:</span>
            </h2>

            <div className="flex flex-wrap gap-4">
                {otherTools.map((tech, index) => (
                    <TechnologyCard
                        key={index}
                        name={tech.name}
                        icon={tech.icon}
                        type={tech.type}
                        color={tech.color}
                    />
                ))}
            </div>
        </div>
    )
}
