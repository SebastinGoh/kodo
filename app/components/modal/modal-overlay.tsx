import Modal from "@/app/components/modal/modal";
import { useOverlayStore } from "@/app/store/useOverlayStore";

export default function ModalOverlay() {

    const closeModal = useOverlayStore(state => state.closeModal)
    
    return (
        <div className="inset-0 bg-slate-900/50 flex flex-col z-40 fixed opacity-100 bottom-0">
            <button className="flex-1" onClick={closeModal}></button>
            <Modal />
            <button className="flex-1" onClick={closeModal}></button>
        </div>
        
    );
}