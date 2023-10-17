import { Product } from "@/app/types.d";
import Image from 'next/image';

interface Props {
	product: Product
}

export default function CheckoutItem({ product }: Props) {
     return (
      <div className='text-sm rounded-ml flex items-center justify-between px-4'>
        <Image className="rounded-ml" src={`/product/${product.images[0]}`} width={80} height={60} alt={product.name} />
        <div className="flex-1 p-4">
          <div className="font-bold text-md">{product.name}</div>
          <div className="">${product.price} × {product.quantity} {product.quantity == 1 ? "set" : "sets"}</div>
        </div>
        <span className="">
            ${product.price * product.quantity}
        </span>
      </div>
    )
}