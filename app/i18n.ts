import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "@/src/locales/en/translation.json";
import es from "@/src/locales/es/translation.json";
import de from "@/src/locales/de/translation.json";

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		lng: "en",
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: {
				translation: en,
			},
			es: {
				translation: es,
			},
			de: {
				translation: de,
			},
		},
	});

export default i18n;
