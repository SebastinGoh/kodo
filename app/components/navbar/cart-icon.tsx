import useFromStore from "@/app/hooks/useFromStore";
import { useCartStore } from "@/app/store/useCartStore";
import { useOverlayStore } from "@/app/store/useOverlayStore";

export default function CartIcon() {
    
    const toggleCart = useOverlayStore(state => state.toggleCart)
    
    // Get the cart status using the hook useCartStore, which gives us access to the cart status of the store.
    const totalItems = useFromStore(useCartStore, state => state.totalItems)
    const showTotalItems = (typeof(totalItems) == "undefined" || totalItems === 0) ? false : true;
    
    return (
        <a onClick={toggleCart} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <div className="relative">
                <span className='absolute bottom-0 -top-8 left-4 right-0 rounded-full text-center bg-orange w-5 h-5 text-sm'
                style={{
                    opacity: `${showTotalItems ? "1" : "0"}`,
                    display: ` ${showTotalItems ? "" : "none"}`,
                }}
                >
                    {totalItems}
                </span>
            </div>
        </a>
    )
}