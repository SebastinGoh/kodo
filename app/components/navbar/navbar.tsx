"use client";
import Logo from "@/app/components/navbar/logo";
import Link from "next/link";
import CartIcon from "@/app/components/navbar/cart-icon";

import { useOverlayStore } from "@/app/store/useOverlayStore";

export default function Navbar() { 

    const toggleMobileNav = useOverlayStore(state => state.toggleMobileNav)

    return (
        <>
        <header className="bg-beige font-slate-900">
            <nav className="max-w-6xl mx-auto flex justify-between items-center p-5 md:p-6 lg:max-w-7xl">
                <Logo />
                <div className='hidden md:flex h-auto gap-14 items-center'>
                    <Link href="/products" className="">
                        Products
                    </Link>
                    <Link href="/about" className="">
                        About
                    </Link>
                    <Link href="/faq" className="">
                        FAQ
                    </Link>
                    <CartIcon />
                </div>
                <Link href="#" className="md:hidden cursor-pointer" onClick={toggleMobileNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </Link>
            </nav>
        </header>
        <div className="bg-beige rounded-full shadow-lg fixed bottom-8 right-8 z-30 p-4 md:hidden">
            <CartIcon />
        </div>
        </>
        
    )
}