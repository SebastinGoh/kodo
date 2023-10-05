import { useCartStore } from "@/app/store/useCartStore";
import { Product } from "@/app/types.d";
import Image from 'next/image';

interface Props {
	product: Product
}

export default function CartItem({ product }: Props) {

    // Recover the store action to remove items from the cart
     const reduceFromCart = useCartStore(state => state.reduceFromCart);
     const addToCart = useCartStore(state => state.addToCart);
    
     return (
      <div className='bg-white text-sm rounded-ml shadow-sm flex items-center justify-between pr-2'>
        <Image className="rounded-l-ml" src={`/product/${product.images[0]}`} width={80} height={60} alt={product.name} />
        <div className="p-4">
          <div className="font-bold text-md">{product.name}</div>
          <div className="">${product.price}</div>
        </div>
        <div className='flex items-center gap-4'>
          <div className="rounded-full flex h-12 bg-gray-300">
              <button onClick={() => reduceFromCart(product)} className="w-8 rounded-l-full border cursor-pointer">
                  −
              </button>
              <span className="font-semibold text-lg border w-8 flex items-center justify-center">
                  {product.quantity}
              </span>
              <button onClick={() => addToCart(product)} className="w-8 rounded-r-full border cursor-pointer">
                  +
              </button>
          </div>
        </div>
      </div>
     )
    }