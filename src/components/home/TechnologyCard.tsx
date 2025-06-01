import type { ElementType } from "react";

type TechnologyCardProps = {
    icon: ElementType; 
    type: string; //Frontend, Backend, other
    name: string; 
    color: string; 
}

export default function TechnologyCard({ icon: Icon, name, color } : TechnologyCardProps) {

    return (
        <div className="flex gap-2 border dark:border-neutral-600 px-2 py-1.5 rounded-md">
            <Icon size={20} style={{ color }} />
            <h3>{name}</h3>
        </div>
    )
}
