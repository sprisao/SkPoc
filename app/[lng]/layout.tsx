import '../globals.css'
import {ReactNode} from "react";
import {Metadata} from "next";
import {notoSansKR} from "@/app/fonts";
import NavBar from "@/app/[lng]/components/ui/NavBar";
import {languages} from "@/app/i18n/settings";


interface LayoutProps {
    children: ReactNode
    params: {
        lng: string
    }
}

export const metadata: Metadata = {
    title: {
        default: 'SK PoC',
        template: '%s | SK PoC'
    }
}

export async function generateStaticParams() {
    return languages.map(lng => ({params: {lng}}))
}


export default function RootLayout({
                                       children, params: {
        lng
    }
                                   }: LayoutProps) {
    return (
        <html lang={lng} className={`${notoSansKR.className}`}>
        <body className="py-3">
        <header>
            <NavBar/>
        </header>
        <main>
            {children}
        </main>
        </body>
        </html>
    )
}