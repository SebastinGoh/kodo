import { useCartStore } from "@/app/store/useCartStore";
import CartItem from "@/app/components/cart/cart-item";
import useFromStore from "@/app/hooks/useFromStore"
import Link from "next/link";

export default function Cart({
    closeAll,
}:{
    closeAll: () => void;
})  {
    // Get the cart status using the hook useCartStore, which gives us access to the cart status of the store.
    const cart = useFromStore(useCartStore, state => state.cart)
    
    // Checkout Testing
    const Checkout = () =>{
        window.alert(cart);
    }

    let total = 0
    if (cart) {
        // Calculate the total price of the products in the cart by adding the prices of each product multiplied by its quantity.
        total = cart.reduce((acc, product) => acc + product.price * (product.quantity as number), 0);
    }
    if (total === 0) {
        return (
            <section className="bg-orange rounded-t-lg w-full flex flex-col gap-4">
                <div className='text-lg p-4'>
                    Your Cart is empty
                </div>
                <div className="flex items-center justify-center p-4">
                    <Link href="/products">
                        <button onClick={closeAll} className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg">
                            Go to Products
                        </button>
                    </Link>
                </div>
            </section>
        )
    } else {
        return (
            <section className="bg-orange rounded-t-lg w-full flex flex-col gap-4">
                <div className='text-lg p-4'>
                    My Cart
                </div>
                <div className="bg-white rounded-lg m-2 p-2">
                    {cart?.map(product => (
                        <CartItem key={product.id} product={product} />
                    ))}
                </div>
                <div className='flex justify-end items-center mt-4'>
                    <span className='text-lg font-bold'>Total:</span>
                    <span className='text-xl font-bold'>${total.toFixed(2)}</span>
                </div>
                <div>
                    <button onClick={Checkout} className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg">
                        Check Out
                    </button>
                </div>
            </section>
        )
    }
}