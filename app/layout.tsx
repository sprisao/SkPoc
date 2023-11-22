import './globals.css'
import {ReactNode} from "react";
import {Metadata} from "next";
import {notoSansKR} from "@/app/fonts";
import NavBar from "@/app/components/ui/NavBar";

interface LayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: {
        default: 'SK PoC',
        template: '%s | SK PoC'
    }

}


export default function RootLayout({children}: LayoutProps) {
    return (
        <html lang="ko" className={`${notoSansKR.className}`}>
        <body className="py-5">
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