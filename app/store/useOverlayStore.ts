import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    isMobileNavOpen: boolean
    isCartOpen: boolean
    isReviewOpen: boolean
}

interface Actions {
    toggleMobileNav: () => void
    toggleCart: () => void
    toggleReview: () => void
    setOverlays: (
        mobileNav?: boolean,
        cart?: boolean,
        review?: boolean
    ) => void
}

const INITIAL_STATE: State = {
    isMobileNavOpen: false,
    isCartOpen: false,
    isReviewOpen: false,
}

export const useOverlayStore = create(
    persist<State & Actions>(
        (set, get) => ({
            isMobileNavOpen: INITIAL_STATE.isMobileNavOpen,
            isCartOpen: INITIAL_STATE.isCartOpen,
            isReviewOpen: INITIAL_STATE.isReviewOpen,
            toggleMobileNav: () => set(state => ({ isMobileNavOpen: !state.isMobileNavOpen })),
            toggleCart: () => set(state => ({ isCartOpen: !state.isCartOpen })),
            toggleReview: () => set(state => ({ isReviewOpen: !state.isReviewOpen })),
            setOverlays: (mobileNav = false, cart = false, review = false) => {
                set(state => ({
                    isMobileNavOpen: mobileNav,
                    isCartOpen: cart,
                    isReviewOpen: review,
                }))
            },
        }),
        {
            name: "overlay-store",
        }
    )
);