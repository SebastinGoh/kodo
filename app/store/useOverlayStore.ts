import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product, Overlays } from "@/app/types";

interface State {
    modalProduct: Product | null
    Overlays: Overlays
}

interface Actions {
    toggleMobileNav: () => void
    toggleCart: () => void
    toggleReview: () => void
    toggleCheckout: () => void
    openModal: (Item: Product) => void
    closeModal: () => void
    setOverlays: (
        mobileNav?: boolean,
        cart?: boolean,
        review?: boolean,
        modal?: boolean,
        checkout?: boolean
    ) => void
    getOverlayState: () => State
}

const INITIAL_STATE: State = {
    Overlays: {
        isMobileNavOpen: false,
        isCartOpen: false,
        isReviewOpen: false,
        isModalOpen: false,
        isCheckoutOpen: false,
    },
    modalProduct: null,
}

export const useOverlayStore = create(
    persist<State & Actions>(
        (set, get) => ({
            Overlays: INITIAL_STATE.Overlays,
            modalProduct: INITIAL_STATE.modalProduct,

            // Toggle overlays
            toggleMobileNav: () => set({ Overlays: { ...get().Overlays, isMobileNavOpen: !get().Overlays.isMobileNavOpen } }),
            toggleCart: () => set({ Overlays: { ...get().Overlays, isCartOpen: !get().Overlays.isCartOpen } }),
            toggleReview: () => set({ Overlays: { ...get().Overlays, isReviewOpen: !get().Overlays.isReviewOpen } }),
            toggleCheckout: () => set({ Overlays: { ...get().Overlays, isCheckoutOpen: !get().Overlays.isCheckoutOpen } }),

            // Open and close modal
            openModal: (product: Product) => {
                set((state: State) => ({
                    ...state,
                    Overlays: {
                      ...state.Overlays,
                      ...{ isModalOpen: true },
                    },
                    modalProduct: product
                }));
            },
            closeModal: () => {
                set((state: State) => ({
                    ...state,
                    Overlays: {
                        ...state.Overlays,
                        ...{ isModalOpen: false },
                    },
                    modalProduct: null
                }));
            },

            // Close multiple overlays
            setOverlays: (mobileNav = false, cart = false, review = false, modal = false, checkout = false) => {
                set((state: State) => ({
                    ...state,
                    Overlays: {
                      isMobileNavOpen: mobileNav,
                      isCartOpen: cart,
                      isReviewOpen: review,
                      isModalOpen: modal,
                      isCheckoutOpen: checkout,
                    },
                }));
            },

            // Get overlays state
            getOverlayState: () => get(),
        }),
        {
            name: "overlay-store",
        }
    )
);