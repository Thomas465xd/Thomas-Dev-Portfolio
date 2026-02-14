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

            <main className="
                    pt-28 p-4 md:pt-36
                    flex-1 max-w-[74rem] w-full
                    mx-auto mt-0 mb-20
                    min-h-screen
                "
            >
                {children}
            </main>
            
            <Footer locale={locale} />
        </div>
    )
}