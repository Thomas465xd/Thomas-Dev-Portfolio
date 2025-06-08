import type { ElementType } from "react";

type TechnologyCardProps = {
    icon: ElementType; 
    type: string; //Frontend, Backend, other
    name: string; 
    color: string; 
}

export default function TechnologyCard({ icon: Icon, name, color } : TechnologyCardProps) {
    return (
        <div className="flex gap-2 border dark:border-neutral-600 border-neutral-400 px-2 py-1.5 rounded-md hover:scale-105 hover:border-indigo-800 dark:hover:border-cyan-500 dark:hover:text-cyan-500 hover:text-indigo-700 transition-all duration-300">
            <Icon size={20} style={{ color }} />
            <p className="">{name}</p>
        </div>
    )
}
