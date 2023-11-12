import { useCartStore } from "@/app/store/useCartStore";
import { useOverlayStore } from "@/app/store/useOverlayStore";
import useFromStore from "@/app/hooks/useFromStore";
import CartItem from "@/app/components/cart/cart-item";
import Link from "next/link";

export default function Cart() {
    
    // Get the cart status using the hook useCartStore, which gives us access to the cart status of the store.
    const cart = useFromStore(useCartStore, state => state.cart)
    
    const toggleCart = useOverlayStore(state => state.toggleCart)
    const toggleReview = useOverlayStore(state => state.toggleReview)
    const setOverlays = useOverlayStore(state => state.setOverlays)

    const subtotal = useFromStore(useCartStore, state => state.subtotal);
    const isCartEmpty = useFromStore(useCartStore, state => state.isCartEmpty);

    return (
        <section className="bg-orange rounded-t-ml text-lg w-full flex flex-col items-center justify-center gap-2 py-4">
            <div className='text-lg w-full flex justify-between px-6'>
                <span className='font-semibold'>
                    {isCartEmpty ? "Your Cart is Empty" : "My Cart"}
                </span>
                <button className="" onClick={toggleCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col gap-2">
                {cart?.map(product => (
                    <CartItem key={product.id} product={product} />
                ))}
                <Link className="w-full my-5" href="/products"
                style={{
                    opacity: `${isCartEmpty ? "1" : "0"}`,
                    display: ` ${isCartEmpty ? "" : "none"}`,
                }}
                >
                    <button onClick={() => setOverlays()} className="w-full bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink">
                        Go to Products
                    </button>
                </Link>
            </div>
            <hr className="w-full border-beige" />
            <div className='w-full flex justify-between px-4'>
                <div className='text-sm'>Sub-Total</div>
                <div className='text-xl font-bold'>${isCartEmpty ? "0.00" : subtotal}</div>
            </div>
            <div className="w-full px-4">
                <button onClick={toggleReview} disabled={isCartEmpty} className={`w-full bg-beige rounded-full font-bold py-2 lg:text-lg ${isCartEmpty ? "opacity-50 cursor-not-allowed" : "hover:bg-pink"}`}>
                    Review Order
                </button>
            </div>
        </section>
    )
};