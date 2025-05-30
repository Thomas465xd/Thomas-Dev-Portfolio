import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiNpm,
    SiPnpm,
    SiGit,
    SiGithub,
    SiFigma,
    SiTurborepo,
    SiDeno,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiDiscord,
    SiRollupdotjs,
    SiDocker,
    SiVercel,
    SiAstro,
    SiEslint
} from "react-icons/si";

export default function TechnologyList() {
    return (
        <div className="space-y-10">
            <h2 className="text-2xl font-bold">
                My Frontend Stack<span className="font-black text-yellow-500">:</span>
            </h2>

            <h2 className="text-2xl font-bold">
                My Backend Stack<span className="font-black text-yellow-500">:</span>
            </h2>

            <h2 className="text-2xl font-bold">
                Tools that i use<span className="font-black text-yellow-500">:</span>
            </h2>
        </div>
    )
}
