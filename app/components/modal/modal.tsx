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
            <div className="p-5 flex flex-col gap-4">
                <div className="flex justify-between px-2">
                    <span className="text-xl">
                        Delete Item
                    </span>
                    <button className="" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <hr className="w-full border-beige" />
                <p className="">
                    Do you want to remove <span className="font-semibold">{modalProduct?.name}</span> from your cart?
                </p>
                <div className="flex justify-around">
                    <button onClick={closeModal} className="border-2 border-slate-900 rounded-full font-bold py-2 px-8 lg:text-lg">
                        Cancel
                    </button>
                    <button onClick={handleConfirm} className="bg-pink rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg">
                        Delete
                    </button>
                </div>
            </div>
        </section>
    )
};