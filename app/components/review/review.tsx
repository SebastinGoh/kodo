import useFromStore from "@/app/hooks/useFromStore"
import { useCartStore } from "@/app/store/useCartStore";
import { useOverlayStore } from "@/app/store/useOverlayStore";
import ReviewItem from "@/app/components/review/review-item";
import Link from "next/link";

export default function Review() {
    // Get the cart status using the hook useCartStore, which gives us access to the cart status of the store.
    const cart = useFromStore(useCartStore, state => state.cart)
    
    const toggleReview = useOverlayStore(state => state.toggleReview)
    const setOverlays = useOverlayStore(state => state.setOverlays)

    let total = 0;
    if (cart) {
        // Calculate the total price of the products in the cart by adding the prices of each product multiplied by its quantity.
        total = cart.reduce((acc, product) => acc + product.price * (product.quantity as number), 0);
    };

    const isTotalZero = (total === 0);

    return (
        <section className="bg-blue text-lg w-full h-full flex flex-col items-center justify-center gap-6 py-4">
            <div className="w-full flex justify-between px-6">
                <div className='text-lg w-full flex justify-between'>
                    <span className='font-semibold'>
                        {isTotalZero ? "Your Cart is Empty" : "Review Your Cart"}
                    </span>
                </div>
                <button className="" onClick={toggleReview}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <hr className="w-full border-beige" />
            <div className="flex flex-col gap-2">
                {cart?.map(product => (
                    <ReviewItem key={product.id} product={product} />
                ))}
                <Link className="w-full bg-beige rounded-full font-bold py-2 px-8 my-5 hover:bg-pink" href="/products"
                style={{
                    opacity: `${isTotalZero ? "1" : "0"}`,
                    display: ` ${isTotalZero ? "" : "none"}`,
                }}
                >
                    Go to Products
                </Link>
            </div>
            <hr className="w-full border-beige" />
            <div className='w-full flex justify-between px-4'>
                <div className='text-sm'>Sub-Total</div>
                <div className='text-xl font-bold'>${total.toFixed(2)}</div>
            </div>
            <div className="w-full px-4">
                <button onClick={() => window.alert("Checking Out")} className={`w-full bg-beige rounded-full font-bold py-2 px-8 lg:text-lg ${isTotalZero ? "opacity-50 cursor-not-allowed" : "hover:bg-pink"}`}>
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