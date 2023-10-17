"use client";
import { useEffect } from "react";
import MobileNavOverlay from "@/app/components/navbar/mobilenav-overlay";
import CartOverlay from "@/app/components/cart/cart-overlay";
import ReviewOverlay from "@/app/components/review/review-overlay";
import CheckoutOverlay from "@/app/components/checkout/checkout-overlay";
import ModalOverlay from "@/app/components/modal/modal-overlay";

import { useOverlayStore } from '@/app/store/useOverlayStore';

export default function Overlays() {
    const isReviewOpen = useOverlayStore(state => state.isReviewOpen)
    const isCartOpen = useOverlayStore(state => state.isCartOpen)
    const isMobileNavOpen = useOverlayStore(state => state.isMobileNavOpen)
    const isModalOpen = useOverlayStore(state => state.isModalOpen)
    const isCheckoutOpen = useOverlayStore(state => state.isCheckoutOpen)

    useEffect(() => {
        if (isReviewOpen || isCartOpen || isMobileNavOpen || isCheckoutOpen || isModalOpen ) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isReviewOpen, isCartOpen, isMobileNavOpen, isCheckoutOpen, isModalOpen])

    return (
        <>
        <ModalOverlay />
        <CheckoutOverlay />
        <ReviewOverlay />
        <CartOverlay />
        <MobileNavOverlay />
        </>
    )
} 