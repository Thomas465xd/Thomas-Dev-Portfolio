import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react';
import { ChevronRight, Globe, Check } from 'lucide-react';

interface Language {
    code: string;
    name: string;
    flag: string;
}

interface LanguageMenuProps {
    onLanguageChange?: (languageCode: string) => void;
    defaultLanguage?: string;
    className?: string;
}

export default function LanguageMenu({ 
    onLanguageChange, 
    defaultLanguage = 'EN',
    className = ''
}: LanguageMenuProps) {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [currentLanguage, setCurrentLanguage] = useState<string>(defaultLanguage);
    
    const languages: Language[] = [
        { code: 'EN', name: 'English', flag: '🇺🇸' },
        { code: 'ES', name: 'Spanish', flag: '🇪🇸' },
        { code: 'DE', name: 'German', flag: '🇩🇪' }
    ];

    // Handle body overflow when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("overflow-x-hidden");
        } else {
            document.body.classList.remove("overflow-x-hidden");
        }
        return () => document.body.classList.remove("overflow-x-hidden");
    }, [menuOpen]);

    const handleLanguageSelect = (languageCode: string): void => {
        setCurrentLanguage(languageCode);
        setMenuOpen(false);
        onLanguageChange?.(languageCode);

        if(languageCode === "EN") {
            //!SET English
            localStorage.removeItem("ES")
            localStorage.removeItem("DE")

            localStorage.setItem("LANGUAGE", "EN")
        } else if (languageCode === "ES") {
            //?SET Spanish
            localStorage.removeItem("EN")
            localStorage.removeItem("DE")

            localStorage.setItem("LANGUAGE", "ES")
        } else {
            //^SET German
            localStorage.removeItem("ES")
            localStorage.removeItem("EN")

            localStorage.setItem("LANGUAGE", "DE")
        }
    };

    return (
        <Popover className={`relative ${className}`}>
            {({ open }: { open: boolean }) => (
                <>
                    <PopoverButton
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='group flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-100 dark:focus:bg-slate-800/50'
                        aria-label="Change language"
                    >
                        <Globe 
                            size={18} 
                            className="text-slate-600 dark:text-slate-400 transition-colors duration-200"
                        />
                        
                        <span className="text-slate-700 dark:text-slate-300 min-w-[24px] transition-colors duration-200">
                            {currentLanguage}
                        </span>
                        
                        <ChevronRight
                            size={16}
                            className={`text-slate-500 dark:text-slate-400 transition-all duration-300 ease-out ${
                                open || menuOpen ? "rotate-90 text-blue-500 dark:text-blue-400" : "rotate-0"
                            }`}
                        />
                    </PopoverButton>

                    <Transition
                        as={Fragment}
                        show={open}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 scale-95 translate-y-[-4px]'
                        enterTo='opacity-100 scale-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 scale-100 translate-y-0'
                        leaveTo='opacity-0 scale-95 translate-y-[-4px]'
                        afterLeave={() => setMenuOpen(false)}
                    >
                        <PopoverPanel className='absolute right-0 z-50 mt-2 origin-top-right focus:outline-none'>
                            <div className='w-56 rounded-xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10 overflow-hidden backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/30'>
                                {/* Header */}
                                <div className='px-4 py-3 border-b border-slate-200 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/30'>
                                    <p className='text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2'>
                                        <Globe size={16} className="text-blue-500 dark:text-blue-400" />
                                        Change Language
                                    </p>
                                </div>
                                
                                {/* Language Options */}
                                <div className='py-1'>
                                    {languages.map((language: Language, index: number) => (
                                        <button
                                            key={language.code}
                                            onClick={() => handleLanguageSelect(language.code)}
                                            className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-150 group relative ${
                                                currentLanguage === language.code 
                                                    ? 'bg-blue-50 dark:bg-blue-900/20' 
                                                    : ''
                                            }`}
                                            style={{
                                                animationDelay: `${index * 50}ms`
                                            }}
                                            type="button"
                                        >
                                            <div className='flex items-center gap-3'>
                                                <span 
                                                    className='text-lg transition-transform duration-200 group-hover:scale-110'
                                                    role="img"
                                                    aria-label={`${language.name} flag`}
                                                >
                                                    {language.flag}
                                                </span>
                                                <div className='text-left'>
                                                    <div className={`font-medium transition-colors duration-150 ${
                                                        currentLanguage === language.code
                                                            ? 'text-blue-700 dark:text-blue-300'
                                                            : 'text-slate-900 dark:text-slate-100'
                                                    }`}>
                                                        {language.name}
                                                    </div>
                                                    <div className='text-xs text-slate-500 dark:text-slate-400'>
                                                        ({language.code})
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {currentLanguage === language.code && (
                                                <div className="relative">
                                                    <Check 
                                                        size={16} 
                                                        className="text-blue-500 dark:text-blue-400 flex-shrink-0" 
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            )}

                                            {/* Hover indicator */}
                                            <div 
                                                className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-500 dark:bg-blue-400 transition-all duration-200 ${
                                                    currentLanguage === language.code 
                                                        ? 'opacity-100' 
                                                        : 'opacity-0 group-hover:opacity-50'
                                                }`}
                                                aria-hidden="true" 
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </PopoverPanel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}