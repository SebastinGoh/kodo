// File to initialize the Cart store and define actions
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product } from "@/app/types";
import { useOverlayStore } from "@/app/store/useOverlayStore";

// Define the interface of the Cart state
interface State {
 cart: Product[]
 totalItems: number
 subtotal: number
 deliveryFee: number
 totalPrice: number
 isCartEmpty: boolean
 paymentUrl: string
 paymentSuccess: boolean
}

// Define the interface of the actions that can be performed in the Cart
interface Actions {
 addToCart: (Item: Product, quantity?: number, openCart?: boolean, openReview?: boolean) => void
 reduceFromCart: (Item: Product) => void
 removeFromCart: (Item: Product) => void
 updateIsCartEmpty: () => void
 updateDeliveryFee: () => void
 updateTotalPrice: () => void
 setPaymentUrl: (url: string) => void
 setPaymentSuccess: (success: boolean) => void
 resetCart: () => void
}

// Initialize a default state
const INITIAL_STATE: State = {
    cart: [],
    totalItems: 0,
    subtotal: 0.00,
    deliveryFee: 0.00,
    totalPrice: 0.00,
    isCartEmpty: true,
    paymentUrl: "",
    paymentSuccess: false,
}

// Create function to round numbers to 2 decimal places
const roundToTwoDecimals = (num: number): number => {
    const result = Number(Math.round(parseFloat(num + 'e' + 2)) + 'e-' + 2);
    return result;
}

// Create the store with Zustand, combining the status interface and actions
export const useCartStore = create(
    persist<State & Actions>(
        (set, get) => ({
            cart: INITIAL_STATE.cart,
            totalItems: INITIAL_STATE.totalItems,
            subtotal: INITIAL_STATE.subtotal,
            deliveryFee: INITIAL_STATE.deliveryFee,
            totalPrice: INITIAL_STATE.totalPrice,
            isCartEmpty: INITIAL_STATE.isCartEmpty,
            paymentUrl: INITIAL_STATE.paymentUrl,
            paymentSuccess: INITIAL_STATE.paymentSuccess,
            addToCart: (product: Product, quantity = 1, openCart = false, openReview = false) => {
                const cart = get().cart
                const cartItem = cart.find(item => item.id === product.id)
                
                // If the item already exists in the Cart, increase its quantity
                if (cartItem) {
                    const updatedCart = cart.map(item =>
                        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                    )
                    set(state => ({
                        cart: updatedCart,
                        totalItems: state.totalItems + quantity,
                        subtotal: roundToTwoDecimals(state.subtotal + (cartItem.price * quantity)),
                    }))
                } else {
                    const updatedCart = [...cart, { ...product, quantity: quantity }]

                    set(state => ({
                        cart: updatedCart,
                        totalItems: state.totalItems + quantity,
                        subtotal: roundToTwoDecimals(state.subtotal + (product.price * quantity)),
                    }))
                }

                // If adding item from product catalouge or product details, open the Cart
                if (openCart) {
                    const toggleCart = useOverlayStore.getState().toggleCart;
                    toggleCart();
                }
                
                // If adding item using 'buy now', open the Review order overlay
                if (openReview) {
                    const toggleReview = useOverlayStore.getState().toggleReview;
                    toggleReview();
                }

                // Update isCartEmpty
                set(state => ({
                    ...state,
                    isCartEmpty: false,
                }));

                // Update the total price
                get().updateTotalPrice();

                // Update whether cart is empty, delivery fee and total price
                get().updateIsCartEmpty();
                get().updateDeliveryFee();
            },
            reduceFromCart: (product: Product) => {
                const cart = get().cart
                const cartItem = cart.find(item => item.id === product.id)

                // If the item quantity is 1, remove it from the Cart
                if (cartItem) {
                    if (cartItem.quantity === 1) {
                        const openRemoveProductModal = useOverlayStore.getState().openRemoveProductModal;
                        openRemoveProductModal(cartItem);
                    }
                    // If the item quantity is more than 1, reduce its quantity
                    else {
                        const updatedCart = cart.map(item =>
                            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
                        )
                        set(state => ({
                            cart: updatedCart,
                            totalItems: state.totalItems - 1,
                            subtotal: roundToTwoDecimals((state.subtotal - product.price)),
                        }))
                    }
                    // Update the total price
                    get().updateTotalPrice();
                }
            },
            removeFromCart: (product: Product) => {
                
                const cart = get().cart
                const cartItem = cart.find(item => item.id === product.id)
                if (cartItem) {
                    set(state => ({
                        cart: state.cart.filter(item => item.id !== product.id),
                        totalItems: state.totalItems - cartItem.quantity,
                        subtotal: roundToTwoDecimals(state.subtotal - (cartItem.price * cartItem.quantity)),
                    }));
                };

                // Update the total price
                get().updateTotalPrice();

                // Update whether cart is empty, delivery fee and total price
                get().updateIsCartEmpty();
                get().updateDeliveryFee();
            },
            updateIsCartEmpty() {
                const cart = get().cart;
                const isCartEmpty = cart.length === 0;
                set(state => ({
                    ...state,
                    isCartEmpty: isCartEmpty,
                }))
            },
            updateDeliveryFee: () => {
                const totalPrice = get().totalPrice;
                let deliveryFee = 0.00;

                // If the total price is more than 0, add delivery fee
                if (totalPrice > 0) {
                    deliveryFee = 5.00;
                }

                set(state => ({
                    ...state,
                    deliveryFee: roundToTwoDecimals(deliveryFee),
                }))
            },
            updateTotalPrice: () => {
                const subtotal = get().subtotal;
                const deliveryFee = get().deliveryFee;
                const totalPrice = roundToTwoDecimals(subtotal + deliveryFee);

                set(state => ({
                    ...state,
                    totalPrice: totalPrice,
                }))
            },
            setPaymentUrl: (url: string) => {
                set(state => ({
                    ...state,
                    paymentUrl: url,
                }))
            },
            setPaymentSuccess: (success: boolean) => {
                set(state => ({
                    ...state,
                    paymentSuccess: success,
                }))
            },
            resetCart: () => {
                set(() => ({
                    cart: INITIAL_STATE.cart,
                    totalItems: INITIAL_STATE.totalItems,
                    deliveryFee: INITIAL_STATE.deliveryFee,
                    totalPrice: INITIAL_STATE.totalPrice,
                    isCartEmpty: INITIAL_STATE.isCartEmpty,
                    paymentURL: INITIAL_STATE.paymentUrl,
                }))
            },
        }),
        {
            // Persist the store in localStorage
            name: "cart-storage", // Unique name
            // getStorage: () => localStorage, // (Optional) by default the 'localStorage' is used
        }
    )
);