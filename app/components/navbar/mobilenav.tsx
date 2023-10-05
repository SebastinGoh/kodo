import Link from "next/link";
import Image from "next/image";
import CartIcon from "@/app/components/navbar/cart-icon";

export default function MobileNav({
    isOpen,
    toggle,
}:{
    isOpen: boolean;
    toggle: () => void;
}) {
    return (
        <div className="fixed w-screen h-screen overflow-hidden bg-beige flex content-center justify-center z-30"
        style={{
            opacity: `${isOpen ? "1" : "0"}`,
            top: ` ${isOpen ? "0" : "-100%"}`,
            display: ` ${isOpen ? "" : "none"}`,
        }}
        >
            <Image className="absolute left-5 top-5" src="/logo.png" width={100} height={100} alt="Logo"/>

            <button className="absolute right-0 py-10 px-6" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <ul className="text-center text-xl flex flex-col content-center justify-center gap-10">
                <li>
                    <Link href="/" onClick={toggle}><p>Home</p></Link>
                </li>
                <li>
                    <Link href="/products" onClick={toggle}><p>Products</p></Link>
                </li>
                <li>
                    <Link href="/about" onClick={toggle}><p>About</p></Link>
                </li>
                <li>
                    <Link href="/faq" onClick={toggle}><p>FAQ</p></Link>
                </li>
                <li className="flex justify-center">
                    <CartIcon />
                </li>
            </ul>
        </div>
    );
}