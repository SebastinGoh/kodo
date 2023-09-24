import Link from "next/link";

export default function ProductCard() {
    return (
        <div className="max-w-xs border bg-white rounded-lg flex-none">
            <div className="w-full h-80 overflow-hidden">
                <img className="rounded-t-lg" src="/product/product-main.jpg" alt="Amazing Dough Set" />
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="text-2xl font-bold text-slate-900">Amazing Dough Set</h5>
                </a>
                <p className="mb-2 text-slate-800">
                    - SGD $12.00
                </p>
                <p className="mb-8 text-slate-900">
                    With 2.5lbs of Kinetic Beach Sand and everything you need to create epic sandcastles, 
                    this resealable sandbox provides endless hours of creative play!
                </p>
                <Link className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg" href="#">
                    BUY NOW
                </Link>
            </div>
        </div>
    )
}