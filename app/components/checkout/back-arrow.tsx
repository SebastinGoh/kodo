import { useOverlayStore } from "@/app/store/useOverlayStore";
import { useScreenStore } from "@/app/store/useScreenStore";

export default function BackArrow() {

    const toggleCheckout = useOverlayStore(state => state.toggleCheckout);
    const isDeliveryScreenOpen = useScreenStore(state => state.Screens.isDeliveryScreenOpen);

    return (
        <div className={`left-6 top-6
            ${isDeliveryScreenOpen ? "absolute" : "hidden"}
        `}>
            <button className="" onClick={toggleCheckout}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
        </div>
    )
}