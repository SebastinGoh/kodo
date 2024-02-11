export interface Product {
    id: string
    name: string
    URLname: string
    description: string
    price: number
    images: string[]
    included: string[]
    quantity: number
}

export interface Overlays {
    isMobileNavOpen: boolean
    isCartOpen: boolean
    isReviewOpen: boolean
    isModalOpen: boolean
    isCheckoutOpen: boolean
}

export interface ModalContent {
    modalType: string | null
    removingProduct: Product | null
    emailName: string | null
    errorMessage: string | null
}

export interface Screens {
    isDeliveryScreenOpen: boolean
    isPaymentScreenOpen: boolean
    isConfirmationScreenOpen: boolean
    isPaymentLoading: boolean
}

export type OrderData = {
    name: string;
    email: string;
    address: string;
    block: string;
    postalcode: string;
    remarks: string;
    cart: Product[];
    deliveryFee: number;
    totalPrice: number;
    insertedId: string;
}