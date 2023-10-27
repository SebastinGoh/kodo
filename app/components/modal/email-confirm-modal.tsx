import { useOverlayStore } from "@/app/store/useOverlayStore";

export default function EmailConfirmModal() {
    
    const closeModal = useOverlayStore(state => state.closeModal)

    const emailName = useOverlayStore(state => state.modalContent.emailName)

    return (
        <section className="max-w-xs border bg-white rounded-lg mx-auto flex-none shadow">
            <div className="p-5 flex flex-col gap-4">
                <div className="flex justify-between px-2">
                    <span className="text-xl">
                        Message Sent
                    </span>
                    <button className="" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <hr className="w-full border-beige" />
                <p className="">
                    Hi <span className="font-semibold">{emailName}</span>, we got your message! We will get back to you as soon as possible.
                </p>
                <div className="flex justify-end">
                    <button onClick={closeModal} className="bg-pink rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg">
                        Close
                    </button>
                </div>
            </div>
        </section>
    )
};