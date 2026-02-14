import { ArrowRight, AtSign } from "lucide-react";
import * as motion from "motion/react-client"
import ContactForm from "./ContactForm";
import initTranslations from "@/app/[locale]/i18n";
import TranslationsProvider from "@/components/providers/TranslationsProvider";
import Link from "next/link";

type ContactSectionProps = {
    locale: string; 
}

export default async function ContactSection({ locale } : ContactSectionProps) {
    const namespaces = ["contact"]
    const { t, resources } = await initTranslations(locale, namespaces);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-20 space-y-4"
            suppressHydrationWarning
        >
            <h1 className="text-3xl font-bold">
                {`${t("contact.heading")}`}<span className="text-yellow-500">.</span>
            </h1>

            <p className="dark:text-gray-400 text-gray-700">
                {`${t("contact.subheading")}`}
            </p>

            <TranslationsProvider
                locale={locale}
                namespaces={namespaces}
                resources={resources}
            >
                <ContactForm />
            </TranslationsProvider>

            <p className="">
                {`${t("contact.option")}`}
            </p>

            <div className="group border border-gray-600 max-w-32 px-3 py-2 rounded-md hover:bg-gray-100 hover:border-yellow-600 dark:hover:bg-gray-800 dark:hover:border-gray-400 hover:shadow-lg transition-all duration-300">
                <Link
                    href="mailto:tomas.computer.guy@gmail.com?subject=Project%20Request&body=Hello%20there,%20I%20would%20like%20to%20ask%20you%20about..."
                    className="flex items-center gap-2 dark:text-white"
                >
                    <AtSign className="size-5 group-hover:rotate-[360deg] transition-all duration-600" />
                    Email
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-500" />
                </Link>
            </div>
        </motion.section>
    )
}
