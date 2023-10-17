import Checkout from "@/app/components/checkout/checkout";
import { useOverlayStore } from "@/app/store/useOverlayStore";

export default function CheckoutOverlay() {

    const isCheckoutOpen = useOverlayStore(state => state.isCheckoutOpen)
    
    return (
        <div className={`inset-0 z-40 ${isCheckoutOpen ? "fixed opacity-100 bottom-0" : "hidden opacity-0 -bottom-100"}`}>
            <Checkout />
        </div>
        
    );
}