// File to initialize the Cart store and define actions
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product } from "@/app/types";
import { useOverlayStore } from "@/app/store/useOverlayStore";

// Define the interface of the Cart state
interface State {
 cart: Product[]
 totalItems: number
 totalPrice: number
}

// Define the interface of the actions that can be performed in the Cart
interface Actions {
 addToCart: (Item: Product, quantity?: number, openCart?: boolean, openReview?: boolean) => void
 reduceFromCart: (Item: Product) => void
 removeFromCart: (Item: Product) => void
 resetCart: () => void
}

// Initialize a default state
const INITIAL_STATE: State = {
 cart: [],
 totalItems: 0,
 totalPrice: 0,
}

// Create the store with Zustand, combining the status interface and actions
export const useCartStore = create(
    persist<State & Actions>(
        (set, get) => ({
            cart: INITIAL_STATE.cart,
            totalItems: INITIAL_STATE.totalItems,
            totalPrice: INITIAL_STATE.totalPrice,
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
                        totalPrice: state.totalPrice + (cartItem.price * quantity),
                    }))
                } else {
                    const updatedCart = [...cart, { ...product, quantity: quantity }]

                    set(state => ({
                        cart: updatedCart,
                        totalItems: state.totalItems + quantity,
                        totalPrice: state.totalPrice + (product.price * quantity),
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
            },
            reduceFromCart: (product: Product) => {
                const cart = get().cart
                const cartItem = cart.find(item => item.id === product.id)

                // If the item quantity is 1, remove it from the Cart
                if (cartItem) {
                    if (cartItem.quantity === 1) {
                        const openModal = useOverlayStore.getState().openModal;
                        openModal(cartItem);
                    }
                    // If the item quantity is more than 1, reduce its quantity
                    else {
                        const updatedCart = cart.map(item =>
                            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
                        )
                        set(state => ({
                            cart: updatedCart,
                            totalItems: state.totalItems - 1,
                            totalPrice: state.totalPrice - product.price,
                        }))
                    }
                }
            },
            removeFromCart: (product: Product) => {
                
                const cart = get().cart
                const cartItem = cart.find(item => item.id === product.id)
                if (cartItem) {
                    set(state => ({
                        cart: state.cart.filter(item => item.id !== product.id),
                        totalItems: state.totalItems - 1,
                        totalPrice: state.totalPrice - product.price,
                    }));
                }
            },
            resetCart: () => {
                set(() => ({
                    cart: [],
                    totalItems: 0,
                    totalPrice: 0,
                    isDrawerOpen: false,
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