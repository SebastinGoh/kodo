import Link from "next/link";

export default function Footer() {
    return (       
        <footer className="bg-beige text-slate-900">
            <div className="mx-auto w-full max-w-6xl">
                <div className="flex flex-wrap justify-around gap-8 px-6 py-16 md:flex-nowrap">
                    <div>
                        <h2 className="mb-6 uppercase font-semibold">Sitemap</h2>
                        <ul className="font-md">
                            <li className="mb-4">
                                <Link href="/products" className="hover:underline">Products</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/about" className="hover:underline">About</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/faq" className="hover:underline">FAQ</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/contactus" className="hover:underline">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link href="/policies" className="hover:underline">
                            <h2 className="mb-6 uppercase font-semibold">Policies</h2>
                        </Link>
                        <ul className="font-md">
                            <li className="mb-4">
                                <Link href="/policies#privacy" className="hover:underline">Privacy</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/policies#termsandconditions" className="hover:underline">Terms & Conditions</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/policies#shippinganddelivery" className="hover:underline">Shipping & Delivery</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/policies#returnsandrefunds" className="hover:underline">Returns & Refunds</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <h2 className="mb-6 font-semibold uppercase">Socials</h2>
                        <a href="#" className="flex gap-2">
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                            </svg>
                            <span className="sr-only">Facebook page</span>
                            <span className="hover:underline">hello.kodo</span>
                        </a>
                        <a href="https://www.instagram.com/hello.kodo/" className="flex gap-2">
                            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/>
                                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"/>
                            </svg>
                            <span className="sr-only">Instagram account</span>
                            <span className="hover:underline">hello.kodo</span>
                        </a>
                        <a href="#" className="flex gap-2">
                            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/>
                            </svg>
                            <span className="sr-only">TikTok account</span>
                            <span className="hover:underline">hello.kodo</span>
                        </a>
                    </div>
                </div>
                <div className="p-6 flex justify-center">
                    <span className="text-sm">© 2023 <a href="/">Kodo™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}