const i18nConfig = {
    locales: ["en", "de", "es"], 
    defaultLocale: "en", 
    prefixDefault: false // This adds the /en prefix to the default language
}

/** The selected language will be appended to the start of the URL
 * 
 *  @param /contact - Default english, not appended
 *  @param /de/contact
 *  @param /es/contact
 */

export default i18nConfig; 