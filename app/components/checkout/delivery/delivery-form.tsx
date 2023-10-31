'use client';

import { FC } from 'react';
import { useState, useEffect } from 'react';
import { set, useForm } from 'react-hook-form';
import AddressFields from '@/app/components/checkout/delivery/address-fields';
import { useScreenStore } from "@/app/store/useScreenStore";
import { OrderData } from '@/app/types';
import { handleOrder } from '@/app/components/checkout/delivery/handle-order';
import { useCartStore } from "@/app/store/useCartStore";
import useFromStore from "@/app/hooks/useFromStore";

import { useRouter } from 'next/navigation';

const DeliveryForm: FC = () => {
  const router = useRouter();
  const activateScreen = useScreenStore(state => state.activateScreen);

  const cart = useFromStore(useCartStore, state => state.cart) ?? [];
  const totalPrice = useFromStore(useCartStore, state => state.totalPrice) ?? 0;
  const paymentUrl = useFromStore(useCartStore, state => state.paymentUrl) ?? "";
  const setPaymentUrl = useCartStore(state => state.setPaymentUrl);
  
  const { 
    register, 
    handleSubmit,
    setValue,
    reset,
  } = useForm<OrderData>();

  const [address, setAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (paymentUrl) {
      activateScreen("payment");
    }
  }, [paymentUrl]);

  function onSubmit(data: OrderData) {
    setIsLoading(true);
    data["cart"] = cart;
    data["totalPrice"] = totalPrice;
    data["address"] = address;

    const fetchPaymentUrl = () => {
      
      handleOrder(data)
      .then((res) => {
        if (setPaymentUrl) {
          setPaymentUrl(res);
          router.push(res);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
    fetchPaymentUrl();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 p-2 pb-8">
        <input
        type='text'
        placeholder='Name*'
        className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
        {...register('name', { required: true })}
        />
        <input
        type='email'
        placeholder='Email*'
        className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
        {...register('email', { required: true })}
        />
        <AddressFields setAddress={setAddress}/>
        <div className='flex gap-4'>
          <input
          type='text'
          placeholder='Blk/Unit No*'
          className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
          {...register('block', { required: true })}
          />
          <input
          type='text'
          placeholder='Postal Code*'
          className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
          {...register('postalcode', { required: true })}
          />
        </div>
        <input
          type='text'
          placeholder='Remarks'
          className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
          {...register('remarks', { required: false })}
          />
        {isLoading
          ? <button disabled={true} className='bg-beige w-full flex items-center justify-center rounded-lg py-3 px-8 font-semibold outline-none opacity-50 cursor-not-allowed'>
              <svg aria-hidden="true" className="fill-slate-900 text-green inline w-5 h-5 mr-2 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              Processing...
            </button>
          : <button type="submit" className='bg-beige w-full rounded-lg py-3 px-8 font-semibold outline-none'>Proceed to Payment</button>
        }
    </form>
  )
};
    
export default DeliveryForm;