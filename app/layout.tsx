import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar/navbar'
import Footer from "./footer";
import "tw-elements/dist/css/tw-elements.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kodo',
  description: 'Little Hands, Unlimited Potential',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className + " h-screen text-slate-900"}>
        <Navbar></Navbar>
        {children}
        <Footer />
      </body>
    </html>
  )
}
