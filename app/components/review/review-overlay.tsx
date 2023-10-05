
import Review from "@/app/components/review/review";
import { useCartStore } from "@/app/store/useCartStore";
import useFromStore from "@/app/hooks/useFromStore";

export default function ReviewOverlay() {

    const isDrawerOpen = useFromStore(useCartStore, state => state.isDrawerOpen)

    return (
        <div className="fixed w-screen h-screen overflow-hidden bg-slate-900/50 flex flex-col z-40"
        style={{
            opacity: `${isDrawerOpen ? "1" : "0"}`,
            top: ` ${isDrawerOpen ? "0" : "-100%"}`,
            display: ` ${isDrawerOpen ? "" : "none"}`,
        }}
        >
            <Review />
        </div>
        
    );
}