import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter, Cutive } from 'next/font/google';

import Overlays from '@/app/components/overlays';
import Navbar from '@/app/components/navbar';
import Footer from "@/app/components/footer";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cutive = Cutive({ 
  weight: ['400'],
  variable: '--font-cutive',
  display: 'swap',
  preload: false, 
})

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
    <html lang="en" className={`${inter.variable} ${cutive.variable}`}>
      <body className="scroll-smooth h-screen text-slate-900">
        <Overlays />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
