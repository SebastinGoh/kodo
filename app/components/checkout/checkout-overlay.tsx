import Checkout from "@/app/components/checkout/checkout";

export default function CheckoutOverlay() {

    return (
        <div className="inset-0 z-40 fixed opacity-100 bottom-0">
            <Checkout />
        </div>
        
    );
}