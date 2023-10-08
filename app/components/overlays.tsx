"use client";
import MobileNavOverlay from "@/app/components/navbar/mobilenav-overlay";
import CartOverlay from "@/app/components/cart/cart-overlay";
import ReviewOverlay from "@/app/components/review/review-overlay";
import ModalOverlay from "./modal/modal-overlay";

export default function Overlays() {
    return (
        <>
        <ModalOverlay />
        <ReviewOverlay />
        <CartOverlay />
        <MobileNavOverlay />
        </>
    )
} 