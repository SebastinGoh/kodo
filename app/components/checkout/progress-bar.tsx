import { useScreenStore } from "@/app/store/useScreenStore";

export default function ProgressBar() {
    const isPaymentScreenOpen = useScreenStore(state => state.Screens.isPaymentScreenOpen)
    const isConfirmationScreenOpen = useScreenStore(state => state.Screens.isConfirmationScreenOpen)
    
    return (
        <div className="flex w-3/4">
            <div className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-green after:border-4 after:inline-block">
                <div className="flex items-center justify-center w-10 h-10 bg-green rounded-full lg:h-12 lg:w-12 shrink-0">
                    <svg className="w-4 h-4 lg:w-6 lg:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                    </svg>
                </div>
            </div>
            <div className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block
                ${isPaymentScreenOpen || isConfirmationScreenOpen ? "after:border-green" : "after:border-gray-300"}
            `}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0
                    ${isPaymentScreenOpen || isConfirmationScreenOpen ? "bg-green" : "bg-gray-300"}
                `}>
                    <svg className="w-4 h-4 lg:w-6 lg:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                        <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z"/>
                        <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z"/>
                    </svg>
                </div>
            </div>
            <div className="flex">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0
                    ${isConfirmationScreenOpen ? "bg-green" : "bg-gray-300"}
                `}>
                    <svg className="w-4 h-4 lg:w-6 lg:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                    </svg>
                </div>
            </div>
        </div> 
    )
}