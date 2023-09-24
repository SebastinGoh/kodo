import Link from "next/link";

export default function ProductCard({ 
    mainImg, name, price, description
} : { 
    mainImg: string, name: string, price: number, description: string 
}) {
    return (
        <div className="max-w-xs border bg-white rounded-lg flex-none">
            <div className="w-full h-80 overflow-hidden">
                <img className="rounded-t-lg" src={`./product/${mainImg}`} alt={name} />
            </div>
            <div className="p-5">
                <a href="#" className="hover:underline">
                    <h5 className="text-2xl font-bold text-slate-900">{name}</h5>
                </a>
                <p className="mb-2 text-slate-800">
                    - SGD ${price}
                </p>
                <p className="mb-8 text-slate-900">
                    {description}
                </p>
                <Link className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg" href="#">
                    BUY NOW
                </Link>
            </div>
        </div>
    )
}