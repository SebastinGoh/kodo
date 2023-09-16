import Link from "next/link";

export default function MobileNav({
    isOpen,
    toggle,
}:{
    isOpen: boolean;
    toggle: () => void;
}) {
    return (
        <div className="fixed w-screen h-screen overflow-hidden bg-beige flex content-center justify-center "
        style={{
            opacity: `${isOpen ? "1" : "0"}`,
            top: ` ${isOpen ? "0" : "-100%"}`,
        }}
        >
            <button className="absolute right-0 py-10 px-6" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <ul className="text-center text-xl flex flex-col content-center justify-center gap-10">
                <li>
                    <Link href="/product" onClick={toggle}><p>Product</p></Link>
                </li>
                <li>
                    <Link href="/about" onClick={toggle}><p>About</p></Link>
                </li>
                <li>
                    <Link href="/faq" onClick={toggle}><p>FAQ</p></Link>
                </li>
                <li className="flex justify-center">
                    <a className="text-sm bg-transparent rounded-lg" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
}