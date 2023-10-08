import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product } from "@/app/types";

interface State {
    isMobileNavOpen: boolean
    isCartOpen: boolean
    isReviewOpen: boolean
    isModalOpen: boolean
    modalProduct: Product | null
}

interface Actions {
    toggleMobileNav: () => void
    toggleCart: () => void
    toggleReview: () => void
    openModal: (Item: Product) => void
    closeModal: () => void
    setOverlays: (
        mobileNav?: boolean,
        cart?: boolean,
        review?: boolean,
        modal?: boolean
    ) => void
}

const INITIAL_STATE: State = {
    isMobileNavOpen: false,
    isCartOpen: false,
    isReviewOpen: false,
    isModalOpen: false,
    modalProduct: null,
}

export const useOverlayStore = create(
    persist<State & Actions>(
        (set, get) => ({
            isMobileNavOpen: INITIAL_STATE.isMobileNavOpen,
            isCartOpen: INITIAL_STATE.isCartOpen,
            isReviewOpen: INITIAL_STATE.isReviewOpen,
            isModalOpen: INITIAL_STATE.isModalOpen,
            modalProduct: INITIAL_STATE.modalProduct,

            // Toggle overlays
            toggleMobileNav: () => set(state => ({ isMobileNavOpen: !state.isMobileNavOpen })),
            toggleCart: () => set(state => ({ isCartOpen: !state.isCartOpen })),
            toggleReview: () => set(state => ({ isReviewOpen: !state.isReviewOpen })),

            // Open and close modal
            openModal: (product: Product) => {
                set(state => ({
                    isModalOpen: true,
                }))
                set(state => ({modalProduct: product}))
            },
            closeModal: () => {
                set(state => ({ 
                    modalProduct: null,
                    isModalOpen: false 
                }))
            },

            // Close multiple overlays
            setOverlays: (mobileNav = false, cart = false, review = false, modal = false) => {
                set(state => ({
                    isMobileNavOpen: mobileNav,
                    isCartOpen: cart,
                    isReviewOpen: review,
                    isModalOpen: modal,
                }))
            },
        }),
        {
            name: "overlay-store",
        }
    )
);