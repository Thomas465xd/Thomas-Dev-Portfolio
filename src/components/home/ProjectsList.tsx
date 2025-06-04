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
    SiGraphql,
    SiApollographql,
    SiNextdotjs,
} from "react-icons/si";

const projects = [
    { 
        title: "UpTask", 
        date: "January 22, 2025 - Now", 
        description: "A Task Management App with teams functionality", 
        image: "", 
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
            { name: "Docker", icon: SiDocker, color: "#2496ED"}
        ],
        url: "https://uptask-react-ts.vercel.app/"
    }, 
    {
        title: "NextCRM", 
        date: "May 23, 2025 - Now", 
        description: "A client management app with analytics", 
        image: "", 
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
            { name: "Docker", icon: SiDocker, color: "#2496ED"}
        ],
        url: "https://next-crm-graphql.vercel.app"
    },
    {
        title: "Portal SPT", 
        date: "March 17, 2025 - Now", 
        description: "A private B2B Partner Portal", 
        image: "", 
        technologies: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
            { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
            { name: "Express.js", icon: SiExpress, color: "#a9a9a9" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Docker", icon: SiDocker, color: "#2496ED"}
        ], 
        url: "https://www.portalspt.cl"
    }
];

export default function ProjectsList() {

    return (
        <div className="my-20 space-y-10">
            <div className="">
                <h2 className="text-2xl font-bold">
                    My Projects<span className="font-black text-yellow-500">.</span>
                </h2>

                <p className="text-gray-600 dark:text-gray-400 my-4">
                    Explore some of my Projects. For more details, visit my GitHub Profile.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        {...project} 
                    />
                ))}
            </div>
        </div>
    )
}
