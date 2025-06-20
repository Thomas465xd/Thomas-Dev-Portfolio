import { CodeXml, NotebookPen } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SiExpress, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react"

export default function PresentationCard() {

    const { t, i18n } = useTranslation();
    const [key, setKey] = useState(0);

    // Actualiza la animación cada vez que el idioma cambia
    useEffect(() => {
        setKey(prev => prev + 1);
    }, [i18n.language]);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1}}

            className="w-full mx-auto p-6 bg-gradient-to-bl from-white dark:from-gray-900 dark:via-slate-950 dark:to-slate-900 rounded-2xl 
                shadow-[10px_10px_#00000020] dark:shadow-[10px_10px_#ffffff30] 
                border dark:border-gray-600 border-gray-200"
        >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-4 group/header">
                    <div className="bg-gradient-to-br dark:from-blue-900 from-blue-500 dark:to-purple-500 to-cyan-500 p-3 rounded-xl shadow-lg group-hover/header:rotate-12 transition-transform duration-300">
                        <NotebookPen size={20} className="text-white"/>
                    </div>
                    <div>
                        <h2 className="uppercase font-bold text-gray-700 dark:text-gray-300 tracking-wider text-sm">
                            {t("presentation.subtitle")}
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r dark:from-blue-700 from-blue-500 dark:to-purple-600 to-cyan-500 rounded-full mt-1"></div>
                    </div>
                </div>

                <span className="dark:text-blue-400 text-blue-600 uppercase text-sm tracking-wide">
                    {t("presentation.title")}
                </span>
            </div>

            <div className="flex items-center">
                <TypeAnimation
                    key={key} // ← esto reinicia el componente al cambiar idioma
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        `${ t("presentation.heading-1") }`,
                        3000,
                        `${ t("presentation.heading-2") }`,
                        5000,
                    ]}
                    wrapper="h1"
                    speed={50}
                    className="text-3xl md:text-3xl lg:text-4xl"
                    repeat={Infinity}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="">
                    <p className="text-gray-600 dark:text-gray-400">
                        { t("presentation.p-1") }
                        <br />
                        <br />
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        { t("presentation.p-2") }
                    </p>
                </div>

                {/* Optional right column for future content */}
                <div className="hidden lg:flex items-center justify-center">
                    <div className="relative">
                        <div className="w-48 h-48 bg-gradient-to-br from-blue-400/20 via-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="">
                                <CodeXml className="text-gray-300 dark:text-gray-700 opacity-99" size={80} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-4 text-gray-500">
                <div className="flex justify-center gap-4 ">
                    <SiReact size={24} />
                    <SiNextdotjs size={24} />
                    <SiTypescript size={24} />
                    <SiTailwindcss size={24} />
                    <SiNodedotjs size={24} />
                    <SiExpress size={24} />
                    <SiMongodb size={24} />
                </div>

                <p className="text-center animate-bounce text-slate-400">
                    ↓
                </p>

            </div>


        </motion.section>
    )
}
