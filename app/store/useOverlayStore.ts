import { create } from "zustand";

import { Product, Overlays, ModalContent } from "@/app/types";

interface State {
    Overlays: Overlays
    modalContent: ModalContent
}

interface Actions {
    toggleMobileNav: () => void
    toggleCart: () => void
    toggleReview: () => void
    toggleCheckout: () => void
    openCheckout: () => void
    openRemoveProductModal: (product: Product) => void
    openEmailConfirmModal: (name: string) => void
    openErrorModal: (message: string) => void
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
    modalContent: {
        modalType: null,
        removingProduct: null,
        emailName: null,
        errorMessage: null,
    }
}

export const useOverlayStore = create<State & Actions>((set, get) => ({
    Overlays: INITIAL_STATE.Overlays,
    modalContent: INITIAL_STATE.modalContent,

    // Toggle overlays
    toggleMobileNav: () => set({ Overlays: { ...get().Overlays, isMobileNavOpen: !get().Overlays.isMobileNavOpen } }),
    toggleCart: () => set({ Overlays: { ...get().Overlays, isCartOpen: !get().Overlays.isCartOpen } }),
    toggleReview: () => set({ Overlays: { ...get().Overlays, isReviewOpen: !get().Overlays.isReviewOpen } }),
    toggleCheckout: () => set({ Overlays: { ...get().Overlays, isCheckoutOpen: !get().Overlays.isCheckoutOpen } }),

    openCheckout: () => set({ Overlays: { ...get().Overlays, isCheckoutOpen: true } }),
    // Open remove product modal
    openRemoveProductModal: (product: Product) => {
        set((state: State) => ({
            ...state,
            Overlays: {
                ...state.Overlays,
                ...{ isModalOpen: true },
            },
            modalContent: {
                ...state.modalContent,
                modalType: 'removeProduct',
                removingProduct: product
            }
        }));
    },
    // Open email confirm modal
    openEmailConfirmModal: (name: string) => {
        set((state: State) => ({
            ...state,
            Overlays: {
                ...state.Overlays,
                ...{ isModalOpen: true },
            },
            modalContent: {
                ...state.modalContent,
                modalType: 'emailConfirm',
                emailName: name
            }
        }));
    },
    // Open error modal
    openErrorModal: (message: string) => {
        set((state: State) => ({
            ...state,
            Overlays: {
                ...state.Overlays,
                ...{ isModalOpen: true },
            },
            modalContent: {
                ...state.modalContent,
                modalType: 'error',
                errorMessage: message
            }
        }));
    },
    // Close modal and reset modal content
    closeModal: () => {
        set((state: State) => ({
            ...state,
            Overlays: {
                ...state.Overlays,
                ...{ isModalOpen: false },
            },
            modalContent: INITIAL_STATE.modalContent
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
}));
    