import Modal from "@/app/components/modal/modal";
import { useOverlayStore } from "@/app/store/useOverlayStore";

export default function ModalOverlay() {

    const isModalOpen = useOverlayStore(state => state.Overlays.isModalOpen)
    const closeModal = useOverlayStore(state => state.closeModal)
    
    return (
        <div className={`inset-0 bg-slate-900/50 flex flex-col z-40 ${isModalOpen ? "fixed opacity-100 bottom-0" : "hidden opacity-0 -bottom-100"}`}>
            <button className="flex-1" onClick={closeModal}></button>
            <Modal />
            <button className="flex-1" onClick={closeModal}></button>
        </div>
        
    );
}