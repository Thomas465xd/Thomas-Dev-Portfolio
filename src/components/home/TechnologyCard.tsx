import type { ElementType } from "react";

type TechnologyCardProps = {
    icon: ElementType;
    type: string; // Frontend, Backend, other
    name: string;
    color: string;
}

export default function TechnologyCard({ icon: Icon, name, color }: TechnologyCardProps) {
    return (
        <div className="w-20 group relative bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-3 transition-all duration-300 hover:shadow-md hover:shadow-gray-200/40 dark:hover:shadow-gray-900/40 hover:-translate-y-0.5 hover:border-gray-300 dark:hover:border-gray-600">
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent to-gray-50/30 dark:to-gray-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                {/* Icon container with dynamic color */}
                <div 
                    className="w-8 h-8 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: `${color}12` }}
                >
                    <Icon 
                        className="w-4 h-4 transition-colors duration-300"
                        style={{ color: color }}
                    />
                </div>
                
                {/* Technology name */}
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-xs leading-tight">
                    {name}
                </h3>
            </div>
            
            {/* Subtle accent line */}
            <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-6 transition-all duration-300 rounded-full"
                style={{ backgroundColor: color }}
            />
        </div>
    );
}