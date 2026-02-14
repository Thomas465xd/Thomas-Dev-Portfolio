"use client"; 
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

export default function TypeWritingAnimation() {
    const [key, setKey] = useState(0);
    const { t, i18n } = useTranslation(); 

    // Actualiza la animación cada vez que el idioma cambia
    useEffect(() => {
        setKey(prev => prev + 1);
    }, [i18n.language]);

	return (
		<div className="flex items-center py-4 min-h-[120px] sm:min-h-[100px] md:min-h-[80px]">
			<TypeAnimation
				key={key} // ← esto reinicia el componente al cambiar idioma
				sequence={[
					// Same substring at the start will only be typed out once, initially
					`${t("presentation.heading-1")}`,
					3000,
					`${t("presentation.heading-2")}`,
					5000,
				]}
				wrapper="h1"
				speed={50}
				className="text-3xl md:text-3xl lg:text-4xl"
				repeat={Infinity}
			/>
		</div>
	);
}
