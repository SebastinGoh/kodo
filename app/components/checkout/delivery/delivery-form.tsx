'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import AddressFields from '@/app/components/checkout/delivery/address-fields';
import { useScreenStore } from "@/app/store/useScreenStore";
import { OrderData } from '@/app/types';

const DeliveryForm: FC = () => {

  const activateScreen = useScreenStore(state => state.activateScreen)
  const isDeliveryScreenOpen = useScreenStore(state => state.Screens.isDeliveryScreenOpen)

  const { 
    register, 
    handleSubmit,
    setValue,
  } = useForm<OrderData>();

  function onSubmit(data: OrderData) {
    //fix getting address info
    //fix order summary drop down
    //fix places suggestion drop down

    console.log(data);
    // submit data to backend and create new order ID with payment 'pending'
    // make new payment request to HitPay
    // Redirect to HitPay payment page

    // Show pending payment screen
    activateScreen("payment");
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
        <AddressFields/>
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