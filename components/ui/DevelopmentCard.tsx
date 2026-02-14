import { LucideIcon } from 'lucide-react';
import React from 'react';

type DevelopmentCardProps = {
    icon?: LucideIcon;
    title: string;
    description: string;
    showComingSoon?: boolean;
};

export default function DevelopmentCard({
    icon: Icon = undefined,
    title,
    description,
    showComingSoon = true,
}: DevelopmentCardProps) {
    return (
        <main className="mx-auto max-w-2xl px-4 pt-24 pb-24 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-slate-400 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-6">

                <div className="flex items-center gap-2 mb-4">
                    {Icon && (
                        <Icon className="text-slate-600 dark:text-slate-400" size={24} />
                    )}

                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {title}
                    </h2>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-8 sm:p-12 text-center border border-dashed border-slate-300 dark:border-slate-600">
                    {/* Icon */}
                    {Icon && (
                        <div className="flex justify-center mb-4">
                            <Icon className="w-12 h-12 text-blue-500 dark:text-amber-400" />
                        </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        📋 Feature in Development
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                        {description}
                    </p>

                    {/* Coming Soon Badge */}
                    {showComingSoon && (
                        <div className="mt-4 inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-full">
                            <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                                ⏳ Coming soon.
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
