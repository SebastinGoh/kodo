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

const DeliveryForm: FC = () => {

  const activateScreen = useScreenStore(state => state.activateScreen);
  const screenState = useScreenStore();

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

  useEffect(() => {
    if (paymentUrl) {
      // reset({
      //   firstname: "",
      //   lastname: "",
      //   email: "",
      //   block: "",
      //   address: "",
      //   postalcode: "",
      //   remarks: "",
      // }); 
      window.open(paymentUrl, "_blank");
      activateScreen("payment");
    }
  }, [paymentUrl]);

  function onSubmit(data: OrderData) {
    
    data["cart"] = cart;
    data["totalPrice"] = totalPrice;
    data["address"] = address;

    const fetchPaymentUrl = () => {
      handleOrder(data)
      .then((res) => {
        if (setPaymentUrl) {
          setPaymentUrl(res);
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
        <div className='flex gap-4'>
          <input
          type='text'
          placeholder='First Name*'
          className='w-1/2 rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
          {...register('firstname', { required: true })}
          />
          <input
          type='text'
          placeholder='Last Name*'
          className='w-1/2 rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
          {...register('lastname', { required: true })}
          />  
        </div>
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
        <button type="submit" className='bg-beige w-full rounded-lg py-3 px-8 font-semibold outline-none'>
          Proceed to Payment
        </button>
    </form>
  )
};
    
export default DeliveryForm;