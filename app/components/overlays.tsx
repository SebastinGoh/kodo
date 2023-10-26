"use client";
import { useEffect } from "react";
import MobileNavOverlay from "@/app/components/navbar/mobilenav-overlay";
import CartOverlay from "@/app/components/cart/cart-overlay";
import ReviewOverlay from "@/app/components/review/review-overlay";
import CheckoutOverlay from "@/app/components/checkout/checkout-overlay";
import ModalOverlay from "@/app/components/modal/modal-overlay";

import { useOverlayStore } from '@/app/store/useOverlayStore';

export default function Overlays() {
    const Overlays = useOverlayStore(state => state.Overlays);
    
    useEffect(() => {
        if (Overlays.isCartOpen || Overlays.isCheckoutOpen || Overlays.isReviewOpen || Overlays.isModalOpen || Overlays.isMobileNavOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [Overlays]);

    return (
        <>
        {Overlays.isModalOpen && <ModalOverlay />}
        {Overlays.isCheckoutOpen && <CheckoutOverlay />}
        {Overlays.isReviewOpen && <ReviewOverlay />}
        {Overlays.isCartOpen && <CartOverlay />}
        {Overlays.isMobileNavOpen && <MobileNavOverlay />}
        </>
    )
} 