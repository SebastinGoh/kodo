
import Review from "@/app/components/review/review";
import { useOverlayStore } from "@/app/store/useOverlayStore";


export default function ReviewOverlay() {

    const isReviewOpen = useOverlayStore(state => state.Overlays.isReviewOpen)
    
    return (
        <div className={`inset-0 z-30 ${isReviewOpen ? "fixed opacity-100 bottom-0" : "hidden opacity-0 -bottom-100"}`}>
            <Review />
        </div>
        
    );
}