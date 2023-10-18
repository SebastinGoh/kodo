import Cart from "@/app/components/cart/cart";
import { useOverlayStore } from "@/app/store/useOverlayStore";

export default function CartOverlay() {
    
    const isCartOpen = useOverlayStore(state => state.Overlays.isCartOpen)
    const toggleCart = useOverlayStore(state => state.toggleCart)

    return (
        <div className={`inset-0 bg-slate-900/50 flex flex-col z-20 ${isCartOpen ? "fixed opacity-100 bottom-0" : "hidden opacity-0 -bottom-100"}`}>
            <button className="flex-1" onClick={toggleCart}></button>
            <Cart />
        </div>
        
    );
}