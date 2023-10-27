'use client'
 
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useOverlayStore } from "@/app/store/useOverlayStore";
import { useCartStore } from "@/app/store/useCartStore";

import HeroVideo from "@/app/components/home/herovideo";
import USP from "@/app/components/home/usp";
import Catalogue from "@/app/components/products/catalogue";
import Socials from "@/app/components/home/socials";

export default function Home() {
  const urlParams = useSearchParams()

  const status = urlParams.get('status')?.toString();
  const openCheckout = useOverlayStore(state => state.openCheckout);
  const setPaymentSuccess = useCartStore(state => state.setPaymentSuccess);
  const totalPrice = useCartStore(state => state.totalPrice);

  useEffect(() => {
    if (status === 'completed' && totalPrice !== 0.00) {
      setPaymentSuccess(true);
      openCheckout();
    }
  }, [status]);

  return (
    <main className='bg-blue max-h-fit'>
      <HeroVideo />
      <USP />
      <Catalogue 
        showGrid={false}
        exclude={[]}
      />
      <Socials />
    </main>
  )
}
