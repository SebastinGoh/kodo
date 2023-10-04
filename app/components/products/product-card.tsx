'use client';

import Link from "next/link";
import Image from 'next/image';
import { useCartStore } from "@/app/store/useCartStore";
import { Product } from "@/app/types.d";

interface Props {
	product: Product
}

export default function ProductCard({ product } : Props) {
    const addToCart = useCartStore(state => state.addToCart)

    return (
        <div key={product.id} className="max-w-xs border bg-white rounded-lg pb-4 flex-none shadow">
            <Link href={`/products/${product.URLname}`} className="w-full h-80 overflow-hidden">
                <Image className="rounded-t-lg" src={`/product/${product.images[0]}`} width={350} height={100} alt={product.name} />
            </Link>
            <div className="p-5">
                <Link href={`/products/${product.URLname}`} className="hover:underline">
                    <h5 className="text-2xl font-bold text-slate-900">{product.name}</h5>
                </Link>
                <p className="mb-2 text-slate-800">
                    - SGD ${product.price}
                </p>
                <p className="mb-8 text-slate-900">
                    {product.description}
                </p>
                <button onClick={() => addToCart(product)} className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg">
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}