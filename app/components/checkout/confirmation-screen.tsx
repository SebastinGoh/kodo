import { useOverlayStore } from "@/app/store/useOverlayStore";
import { useScreenStore } from "@/app/store/useScreenStore";

export default function ConfirmationScreen() {
  
    const isConfirmationScreenOpen = useScreenStore(state => state.Screens.isConfirmationScreenOpen)
    const setOverlays = useOverlayStore(state => state.setOverlays)
    const activateScreen = useScreenStore(state => state.activateScreen)

    function handleClick() {

        // reset screen variables in state
        activateScreen("reset");

        // close all overlays
        setOverlays();

    }

    return (
        <div className={`${isConfirmationScreenOpen ? "flex flex-1 opacity-100 left-0" : "hidden opacity-0 -left-100"}`}>
            <div className='flex flex-col px-8 pb-8'>
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <div className="text-center">
                        Thank You
                    </div>
                    <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                    </svg>
                    <div className="text-center">
                        Your order has been placed. You will receive an email confirmation shortly.
                    </div>
                </div>
                <button onClick={handleClick} className='bg-beige w-full rounded-lg py-3 px-8 font-semibold outline-none'>
                    Continue Shopping
                </button>
            </div>
        </div>
        
    );
}