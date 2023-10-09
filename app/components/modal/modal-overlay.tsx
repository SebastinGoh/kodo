import Modal from "@/app/components/modal/modal";
import { useOverlayStore } from "@/app/store/useOverlayStore";

export default function ModalOverlay() {

    const isModalOpen = useOverlayStore(state => state.isModalOpen)
    const closeModal = useOverlayStore(state => state.closeModal)
    
    return (
        <div className="fixed inset-0 bg-slate-900/50 flex flex-col z-40"
        style={{
            opacity: `${isModalOpen ? "1" : "0"}`,
            display: ` ${isModalOpen ? "" : "none"}`,
        }}
        >
            <button className="flex-1" onClick={closeModal}></button>
            <Modal />
            <button className="flex-1" onClick={closeModal}></button>
        </div>
        
    );
}