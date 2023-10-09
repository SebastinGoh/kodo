
import Review from "@/app/components/review/review";
import { useOverlayStore } from "@/app/store/useOverlayStore";


export default function ReviewOverlay() {

    const isReviewOpen = useOverlayStore(state => state.isReviewOpen)
    
    return (
        <div className="fixed inset-0 z-30"
        style={{
            opacity: `${isReviewOpen ? "1" : "0"}`,
            bottom: ` ${isReviewOpen ? "0" : "-100%"}`,
            display: ` ${isReviewOpen ? "" : "none"}`,
        }}
        >
            <Review />
        </div>
        
    );
}