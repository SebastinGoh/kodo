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