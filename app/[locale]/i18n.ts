import { createInstance, i18n, Resource } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "@/i18nConfig";

/**
 * Type definition for initTranslations function parameters
 */
export type InitTranslationsParams = {
	locale: string;
	namespaces: string[];
	i18nInstance?: i18n;
	resources?: Resource;
};

/**
 * Type definition for initTranslations function return value
 */
export type InitTranslationsReturn = {
	i18n: i18n;
	resources: Resource;
	t: (key: string, options?: Record<string, unknown>) => string;
};

/**
 * Initializes i18next instance for server-side rendering with Next.js App Router
 * 
 * @param locale - The current locale (e.g., 'en', 'de', 'es')
 * @param namespaces - Array of translation namespaces to load (e.g., ['translation', 'common'])
 * @param i18nInstance - Optional existing i18next instance to reuse
 * @param resources - Optional preloaded translation resources
 * @returns Promise with initialized i18n instance, resources, and translation function
 */
export default async function initTranslations(
	locale: string,
	namespaces: string[],
	i18nInstance?: i18n,
	resources?: Resource,
): Promise<InitTranslationsReturn> {
	//? Create new i18next instance if none provided (for SSR)
	i18nInstance = i18nInstance || createInstance();

	// Enable React integration for server-side rendering
	i18nInstance.use(initReactI18next);

	// Setup dynamic resource loading if no resources are preloaded
	if (!resources) {
        i18nInstance.use(
            resourcesToBackend(
                // Dynamically import translation files from /src/locales/{language}/{namespace}.json
                (language: string, namespace: string) : Promise<{ default: Resource }> =>
                    import(`@/src/locales/${language}/${namespace}.json`),
            ),
        );
	}

	// Initialize i18next with configuration
	await i18nInstance.init({
		lng: locale,                                    // Set current language
		resources,                                      // Use preloaded resources if provided
		fallbackLng: i18nConfig.defaultLocale,         // Fallback to default locale if translation missing
		supportedLngs: i18nConfig.locales,              // List of supported languages
		defaultNS: namespaces[0],                       // Default namespace to use
		fallbackNS: namespaces[0],                      // Fallback namespace if key not found
		ns: namespaces,                                 // Namespaces to load
		preload: resources ? [] : i18nConfig.locales,  // Preload all locales if no resources provided
	});

	return {
		i18n: i18nInstance,                             // Configured i18next instance
		resources: {                                    // Loaded translation resources
			[locale]: i18nInstance.services.resourceStore.data[locale],
		},
		t: i18nInstance.t,                              // Translation function for immediate use
	};
}
