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
 addToCart: (Item: Product, quantity?: number, openDrawer?: boolean) => void
 reduceFromCart: (Item: Product) => void
 removeFromCart: (Item: Product) => void
 toggleDrawer: () => void
 resetCart: () => void
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
            addToCart: (product: Product, quantity = 1, openDrawer = false) => {
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
                if (openDrawer) set(state => ({ isDrawerOpen: true }));
            },
            reduceFromCart: (product: Product) => {
                const cart = get().cart
                const cartItem = cart.find(item => item.id === product.id)

                // If the item quantity is 1, remove it from the Cart
                if (cartItem) {
                    if (cartItem.quantity === 1) {
                        set(state => ({
                            cart: state.cart.filter(item => item.id !== product.id),
                            totalItems: state.totalItems - 1,
                            totalPrice: state.totalPrice - product.price,
                        }))
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
                        totalItems: state.totalItems - cartItem.quantity,
                        totalPrice: state.totalPrice - (cartItem.quantity * cartItem.price),
                    }))
                }
            },
            toggleDrawer: () => {
                set(state => ({
                    isDrawerOpen: !state.isDrawerOpen,
                }))
            },
            resetCart: () => {
                set(() => ({
                    cart: [],
                    totalItems: 0,
                    totalPrice: 0,
                    isDrawerOpen: false,
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