import Link from "next/link";
import Image from 'next/image';

export default function ProductCard({ 
    id, name, URLname, description, price, mainImg, otherImgsArray
} : { 
    id:string, 
    name:string, 
    URLname:string, 
    description:string, 
    price:number, 
    mainImg:string, 
    otherImgsArray:Array<string>,
}) {
    return (
        <div key={id} className="max-w-xs border bg-white rounded-lg pb-4 flex-none">
            <div className="w-full h-80 overflow-hidden">
                <Image className="rounded-t-lg" src={`/product/${mainImg}`} width={350} height={100} alt={name} />
            </div>
            <div className="p-5">
                <Link href={`/products/${URLname}`} className="hover:underline">
                    <h5 className="text-2xl font-bold text-slate-900">{name}</h5>
                </Link>
                <p className="mb-2 text-slate-800">
                    - SGD ${price}
                </p>
                <p className="mb-8 text-slate-900">
                    {description}
                </p>
                <Link id={id} className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg" href="#">
                    ADD TO CART
                </Link>
            </div>
        </div>
    )
}