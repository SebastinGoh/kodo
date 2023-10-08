import Cart from "@/app/components/cart/cart";
import { useOverlayStore } from "@/app/store/useOverlayStore";

export default function CartOverlay() {
    
    const isCartOpen = useOverlayStore(state => state.isCartOpen)
    const toggleCart = useOverlayStore(state => state.toggleCart)

    return (
        <div className="fixed w-screen h-screen overflow-hidden bg-slate-900/50 flex flex-col z-40"
        style={{
            opacity: `${isCartOpen ? "1" : "0"}`,
            bottom: ` ${isCartOpen ? "0" : "-100%"}`,
            display: ` ${isCartOpen ? "" : "none"}`,
        }}
        >
            <button className="flex-1" onClick={toggleCart}></button>
            <Cart />
        </div>
        
    );
}