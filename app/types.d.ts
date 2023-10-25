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

export interface Screens {
    isDeliveryScreenOpen: boolean
    isPaymentScreenOpen: boolean
    isConfirmationScreenOpen: boolean
}

export type OrderData = {
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    block: string;
    postalcode: string;
    remarks: string;
    paymentSuccess: boolean;
    cart: Product[];
    totalPrice: number;
    insertedId: string;
}