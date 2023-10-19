"use client";
import { useEffect } from "react";

import useFromStore from "@/app/hooks/useFromStore"
import { useCartStore } from "@/app/store/useCartStore";
import CheckoutItem from "@/app/components/checkout/delivery/checkout-item";

const OrderSummaryAccordion = () => {
    useEffect(() => {
      const init = async () => {
        const { Collapse, initTE } = await import("tw-elements");
        initTE({ Collapse });
      };
      init();
    }, []);

    // Get the cart status using the hook useCartStore, which gives us access to the cart status of the store.
    const cart = useFromStore(useCartStore, state => state.cart)
    const totalPrice = useFromStore(useCartStore, state => state.totalPrice)
    const totalItems = useFromStore(useCartStore, state => state.totalItems)
    
    return (
        <div className="w-full bg-beige">
            <h2 className="" id="orderSummaryTitle" >
                <button
                className="group relative flex w-full items-center text-left px-5 py-4 transition [overflow-anchor:none] hover:z-[2] focus:z-[3]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#orderSummaryBody"
                aria-expanded="false"
                aria-controls="orderSummaryBody"
                >
                    <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                    <div className='w-full flex justify-between items-center px-4'>
                        <div className="text-sm">
                            Order Summary
                        </div>
                        <div className=''>
                            {totalItems} {totalItems == 1 ? "item" : "items"} @
                            ${totalPrice ? totalPrice.toFixed(2) : "0.00"}
                        </div>
                    </div>
                </button>
            </h2>
            <div id="orderSummaryBody" className="!visible border-0 hidden" data-te-collapse-item aria-labelledby="orderSummaryBody">
                <hr className="w-full border-slate-900" />
                <div className="grow flex flex-col gap-2 py-2">
                    {cart?.map(product => (
                        <CheckoutItem key={product.id} product={product} />
                    ))}
                </div> 
            </div>
        </div>
    )    
};

export default OrderSummaryAccordion;