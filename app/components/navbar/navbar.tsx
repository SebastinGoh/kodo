"use client";
import { useState } from "react";
import MobileNav from "@/app/components/navbar/mobilenav";
import Logo from "@/app/components/navbar/logo";
import Link from "next/link";
import Drawer from "@/app/components/cart/drawer";
import CartIcon from "@/app/components/navbar/cart-icon";

export default function Navbar() { 
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
        <MobileNav isOpen={isOpen} toggle={toggle} />
        <Drawer setIsOpen={setIsOpen}/>
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
                <Link href="#" className="md:hidden cursor-pointer" onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </Link>
            </nav>
        </header>
        </>
        
    )
}