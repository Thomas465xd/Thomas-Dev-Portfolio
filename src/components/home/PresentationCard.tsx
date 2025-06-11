import { NotebookPen } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

export default function PresentationCard() {

    const { t, i18n } = useTranslation();
    const [key, setKey] = useState(0);

    // Actualiza la animación cada vez que el idioma cambia
    useEffect(() => {
        setKey(prev => prev + 1);
    }, [i18n.language]);

    return (
        <section
            className="w-full mx-auto p-6 bg-white dark:bg-slate-800 rounded-2xl 
                shadow-[10px_10px_#00000020] dark:shadow-[10px_10px_#ffffff30] 
                border dark:border-gray-600 border-gray-200"
        >
            <div className="flex justify-between items-center gap-4 mb-4">
                <div className="flex items-center gap-4">
                    <NotebookPen size={15}  className="hover:animate-pulse "/>
                    <h2 className="uppercase">{ t("presentation.subtitle") }</h2>
                </div>

                <span className="text-blue-400 uppercase text-sm tracking-wide">
                    Full Stack Web Developer
                </span>
            </div>

            <TypeAnimation
                key={key} // ← esto reinicia el componente al cambiar idioma
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    `${ t("presentation.heading-1") }`,
                    3000,
                    `${ t("presentation.heading-2") }`,
                    5000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
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

            </div>

            <div className="flex justify-between mt-4 text-gray-500">
                <div className="flex justify-center gap-4 ">
                    <SiReact size={24} />
                    <SiNextdotjs size={24} />
                    <SiTypescript size={24} />
                    <SiTailwindcss size={24} />
                    <SiNodedotjs size={24} />
                </div>

                <p className="text-center animate-bounce text-slate-400">
                    ↓
                </p>
            </div>


        </section>
    )
}
