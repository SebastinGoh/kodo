"use client";
import { useEffect } from "react";
import MobileNavOverlay from "@/app/components/navbar/mobilenav-overlay";
import CartOverlay from "@/app/components/cart/cart-overlay";
import ReviewOverlay from "@/app/components/review/review-overlay";
import ModalOverlay from "@/app/components/modal/modal-overlay";

import { useOverlayStore } from '@/app/store/useOverlayStore';

export default function Overlays() {
    const isReviewOpen = useOverlayStore(state => state.isReviewOpen)
    const isCartOpen = useOverlayStore(state => state.isCartOpen)
    const isMobileNavOpen = useOverlayStore(state => state.isMobileNavOpen)
    const isModalOpen = useOverlayStore(state => state.isModalOpen)
    
    useEffect(() => {
        if (isReviewOpen || isCartOpen || isMobileNavOpen || isModalOpen ) {
            document.body.className = "overflow-hidden"
        } else {
            document.body.className = ""
        }
    }, [isReviewOpen, isCartOpen, isMobileNavOpen, isModalOpen])

    return (
        <>
        <ModalOverlay />
        <ReviewOverlay />
        <CartOverlay />
        <MobileNavOverlay />
        </>
    )
} 