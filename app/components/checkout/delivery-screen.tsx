'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import AddressFields from '@/app/components/checkout/address-fields';

export type OrderData = {
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    block: string;
    postalcode: string;
};

const DeliveryScreen: FC = () => {

  const { 
    register, 
    handleSubmit,
    setValue,
  } = useForm<OrderData>();

  function onSubmit(data: OrderData) {
    return;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-h-content overflow-y-scroll w-full flex flex-col gap-4 px-2 pt-2">
        <input
        type='text'
        placeholder='First Name'
        className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
        {...register('firstname', { required: true })}
        />
        <input
        type='text'
        placeholder='Last Name'
        className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
        {...register('lastname', { required: true })}
        />
        <input
        type='email'
        placeholder='Email'
        className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
        {...register('email', { required: true })}
        />
        <AddressFields/>
        <input
        type='text'
        placeholder='Block / Unit Number'
        className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
        {...register('block', { required: true })}
        />
        <input
        type='text'
        placeholder='Postal Code'
        className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
        {...register('postalcode', { required: true })}
        />
        <button className='bg-beige w-full rounded-lg py-3 px-8 font-semibold outline-none'>
          Proceed to Payment
        </button>
    </form>
  )
};
    
export default DeliveryScreen;