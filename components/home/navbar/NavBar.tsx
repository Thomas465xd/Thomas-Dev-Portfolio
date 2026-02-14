import Link from 'next/link'
import { SiGithub } from 'react-icons/si'
import NavBarClient from './NavBarClient'
import { DesktopNavLink, MobileNavLink } from './NavLink'
import LanguageMenu from '@/components/ui/LanguageMenu'
import ThemeToggle from '@/components/ui/DarkMode'
import initTranslations from '@/app/[locale]/i18n'
import TranslationsProvider from '@/components/providers/TranslationsProvider'
import Image from 'next/image'

type NavBarProps = {
    locale: string
}

// Server-side NavBar component
// Handles translations and renders static structure
// Uses NavBarClient for interactive features (menu toggle, pathname detection, scroll management)
export default async function NavBar({ locale } : NavBarProps) {
    const namespaces = ["common"]; 
    const { t, resources } = await initTranslations(locale, namespaces)

    // Desktop Navigation Component
    const desktopNav = (
        <div className="hidden md:flex flex-row justify-between items-center w-full p-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 shadow-lg backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-white/10 supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-900/60">
            <div className="flex items-center gap-4 flex-shrink-0">
                <Link
                    href="https://github.com/Thomas465xd"
                    rel="author"
                    target="_blank"
                    type="website"
                    className="p-2 rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/5"
                >
                    <SiGithub size={32} />
                </Link>
                <Link
                    href="/"
                    className="rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/5"
                >
                    <Image
                        src="/complete-circle.png"
                        width={50}
                        height={50}
                        alt="Logo"
                    />
                </Link>
            </div>

            <nav className="flex gap-2 sm:gap-3 lg:gap-4 items-center flex-1 justify-center max-w-md mx-4">
                <DesktopNavLink href="/" label={t("nav.home")} />
                <DesktopNavLink href="/projects" label={t("nav.projects")} />
                <DesktopNavLink href="/contact" label={t("nav.contact")} />
            </nav>

            <div className="flex items-center gap-3 lg:gap-4 flex-shrink-0">
                <div className="p-1 rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
                    <LanguageMenu />
                </div>
                <div className="p-1 rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )

    // Mobile Menu Panel Content - Pre-rendered as JSX (not a function)
    const mobileMenuPanel = (
        <nav className="space-y-3">
            <MobileNavLink href="/" label={t("nav.home")} />
            <MobileNavLink href="/projects" label={t("nav.projects")} />
            <MobileNavLink href="/contact" label={t("nav.contact")} />
        </nav>
    )

    return (
        <TranslationsProvider
            locale={locale}
            namespaces={namespaces}
            resources={resources}
        >
            <NavBarClient
                github={<SiGithub size={24} />}
                languageMenu={<LanguageMenu />}
                themeToggle={<ThemeToggle />}
                desktopNav={desktopNav}
                mobileMenuPanel={mobileMenuPanel}
            />
        </TranslationsProvider>
    )
}