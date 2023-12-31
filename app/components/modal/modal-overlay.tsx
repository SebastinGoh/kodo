import EmailConfirmModal from "@/app/components/modal/email-confirm-modal";
import RemoveProductModal from "@/app/components/modal/remove-product-modal";
import ErrorModal from "@/app/components/modal/error-modal";
import { useOverlayStore } from "@/app/store/useOverlayStore";

export default function ModalOverlay() {

    const closeModal = useOverlayStore(state => state.closeModal)
    const modalType = useOverlayStore(state => state.modalContent.modalType)
    
    return (
        <div className="inset-0 bg-slate-900/50 flex flex-col z-50 fixed opacity-100 bottom-0">
            <button className="flex-1" onClick={closeModal}></button>
            {modalType=="emailConfirm" && <EmailConfirmModal />}
            {modalType=="removeProduct" && <RemoveProductModal />}
            {modalType=="error" && <ErrorModal />}
            <button className="flex-1" onClick={closeModal}></button>
        </div>
        
    );
}