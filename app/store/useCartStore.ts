// File to initialize the Cart store and define actions
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product } from "@/app/types";

// Define the interface of the Cart state
interface State {
 cart: Product[]
 totalItems: number
 totalPrice: number
 isDrawerOpen: boolean
}

// Define the interface of the actions that can be performed in the Cart
interface Actions {
 addToCart: (Item: Product) => void
 removeFromCart: (Item: Product) => void
 toggleDrawer: () => void
}

// Initialize a default state
const INITIAL_STATE: State = {
 cart: [],
 totalItems: 0,
 totalPrice: 0,
 isDrawerOpen: false,
}

// Create the store with Zustand, combining the status interface and actions
export const useCartStore = create(
    persist<State & Actions>(
        (set, get) => ({
            cart: INITIAL_STATE.cart,
            totalItems: INITIAL_STATE.totalItems,
            totalPrice: INITIAL_STATE.totalPrice,
            isDrawerOpen: INITIAL_STATE.isDrawerOpen,
            addToCart: (product: Product) => {
                const cart = get().cart
                const cartItem = cart.find(item => item.id === product.id)

                // If the item already exists in the Cart, increase its quantity
                if (cartItem) {
                    const updatedCart = cart.map(item =>
                        item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item
                    )
                    set(state => ({
                        cart: updatedCart,
                        totalItems: state.totalItems + 1,
                        totalPrice: state.totalPrice + product.price,
                        isDrawerOpen: true,
                    }))
                } else {
                    const updatedCart = [...cart, { ...product, quantity: 1 }]

                    set(state => ({
                        cart: updatedCart,
                        totalItems: state.totalItems + 1,
                        totalPrice: state.totalPrice + product.price,
                        isDrawerOpen: true,
                    }))
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
                    }))
                }
                if (cart.length === 0) {
                    set(() => ({
                        cart: [],
                        totalItems: 0,
                        totalPrice: 0,
                        isDrawerOpen: true,
                    }))
                }
                
            },
            toggleDrawer: () => {
                set(state => ({
                    isDrawerOpen: !state.isDrawerOpen,
                }))
            }
        }),
        {
            // Persist the store in localStorage
            name: "cart-storage", // Unique name
            // getStorage: () => localStorage, // (Optional) by default the 'localStorage' is used
        }
    )
);