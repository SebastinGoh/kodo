import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/navbar/navbar';
import Footer from "@/app/components/footer";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
