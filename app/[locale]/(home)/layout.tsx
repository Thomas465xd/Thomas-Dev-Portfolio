import NavBar from "@/components/home/navbar/NavBar";
import initTranslations from '../i18n';
import Footer from "@/components/home/footer/Footer";

export default async function RootLayout({ 
    children,
    params 
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params; 

    return (
        <div className="relative z-10 flex flex-col min-h-screen">
            <NavBar locale={locale} />
            {children}
            <Footer locale={locale} />
        </div>
    )
}