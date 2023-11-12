import useFromStore from "@/app/hooks/useFromStore"
import { useCartStore } from "@/app/store/useCartStore";
import { useOverlayStore } from "@/app/store/useOverlayStore";
import ReviewItem from "@/app/components/review/review-item";
import Link from "next/link";

export default function Review() {
    // Get the cart status using the hook useCartStore, which gives us access to the cart status of the store.
    const cart = useFromStore(useCartStore, state => state.cart)
    const subtotal = useFromStore(useCartStore, state => state.subtotal)
    const totalPrice = useFromStore(useCartStore, state => state.totalPrice)
    const deliveryFee = useFromStore(useCartStore, state => state.deliveryFee)
    const totalItems = useFromStore(useCartStore, state => state.totalItems)
    
    const toggleReview = useOverlayStore(state => state.toggleReview)
    const toggleCheckout = useOverlayStore(state => state.toggleCheckout)
    const setOverlays = useOverlayStore(state => state.setOverlays)

    const isCartEmpty = useFromStore(useCartStore, state => state.isCartEmpty);

    return (
        <section className="bg-blue text-lg w-full h-full flex flex-col items-center justify-center gap-3 py-6">
            <div className="w-full flex justify-between px-6">
                <span className='font-semibold'>
                    {isCartEmpty ? "Your Cart is Empty" : "Review Your Order"}
                </span>
                <button className="" onClick={toggleReview}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="w-full px-6">
                <span className="text-sm">{totalItems} {totalItems == 1 ? "item" : "items"}</span>
            </div>
            <hr className="w-full border-beige" />
            <div className="grow flex flex-col gap-2">
                {cart?.map(product => (
                    <ReviewItem key={product.id} product={product} />
                ))}
                <Link className="w-full bg-beige rounded-full font-bold py-2 px-8 my-5 hover:bg-pink" href="/products" onClick={() => setOverlays()}
                style={{
                    opacity: `${isCartEmpty ? "1" : "0"}`,
                    display: ` ${isCartEmpty ? "" : "none"}`,
                }}
                >
                    Go to Products
                </Link>
            </div>
            <hr className="w-full border-beige" />
            <div className='w-full flex justify-between px-4'>
                <div className='text-sm'>Sub-Total</div>
                <div className='text-sm'>${isCartEmpty ? "0.00" : subtotal}</div>
            </div>
            <div className='w-full flex justify-between px-4'>
                <div className='text-sm'>Delivery Fee</div>
                <div className='text-sm'>${isCartEmpty ? "0.00" : `${deliveryFee}.00`}</div>
            </div>
            <hr className="w-full border-black" />
            <div className='w-full flex justify-between px-4'>
                <div className='text-md'>Grand Total</div>
                <div className='text-lg font-bold'>${isCartEmpty ? "0.00" : totalPrice}</div>
            </div>
            <div className="w-full px-4 flex">
                <button onClick={toggleCheckout} 
                className= {`grow text-center w-full bg-beige rounded-full font-bold py-2 px-8 lg:text-lg 
                    ${isCartEmpty ? "opacity-50 cursor-not-allowed" : "hover:bg-pink"}
                `}
                disabled={isCartEmpty}
                >
                    Checkout
                </button>
            </div>
            <div>
                <a href="#" onClick={() => setOverlays()} className="underline">
                    Continue shopping
                </a>
            </div>
        </section>
    )
};