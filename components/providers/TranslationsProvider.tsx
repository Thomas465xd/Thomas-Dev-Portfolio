"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance, Resource } from "i18next";
import initTranslations from "@/app/[locale]/i18n";
import { ReactNode } from "react";

//! IMPORTANT:
// Wrapping a server component with TranslationsProvider, even though it is a client component, 
// will not convert the underlying components into client ones, they will still be rendered as server components
export type TranslationsProviderProps = {
    children: ReactNode;
    locale: string;
    namespaces: string[];
    resources?: Resource;
};

//? Allows translations to be used inside the nested client components of the different pages.
export default function TranslationsProvider({
	children,
	locale,
	namespaces,
	resources,
} : TranslationsProviderProps) {
	const i18n = createInstance();

	initTranslations(locale, namespaces, i18n, resources);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
