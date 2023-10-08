import { useOverlayStore } from "@/app/store/useOverlayStore";
import { useCartStore } from "@/app/store/useCartStore";

export default function Modal() {
    
    const closeModal = useOverlayStore(state => state.closeModal)
    const modalProduct = useOverlayStore(state => state.modalProduct)
    const removeFromCart = useCartStore(state => state.removeFromCart)

    function handleConfirm() {
        if (modalProduct) {
            removeFromCart(modalProduct);
            closeModal();
        }
    }

    return (
        <section className="max-w-xs border bg-white rounded-lg mx-auto flex-none shadow">
            <div className="p-5">
                <p className="mb-2 text-slate-800">
                    {modalProduct?.name}
                </p>
                <p className="mb-8 text-slate-900">
                    Are you sure you want to delete this item?
                </p>
                <button onClick={closeModal} className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg">
                    Cancel
                </button>
                <button onClick={handleConfirm} className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg">
                    Delete
                </button>
            </div>
        </section>
    )
};