'use client';

import { FC } from 'react';
import { useState, useEffect } from 'react';
import { set, useForm } from 'react-hook-form';
import AddressFields from '@/app/components/checkout/delivery/address-fields';
import { useScreenStore } from "@/app/store/useScreenStore";
import { OrderData } from '@/app/types';
import { generatePaymentUrl } from '@/app/components/checkout/delivery/handle-order';
import { useCartStore } from "@/app/store/useCartStore";
import useFromStore from "@/app/hooks/useFromStore";
import { useOverlayStore } from "@/app/store/useOverlayStore";

import { useRouter } from 'next/navigation';

const DeliveryForm: FC = () => {
  const router = useRouter();
  const activateScreen = useScreenStore(state => state.activateScreen);
  const isPaymentLoading = useScreenStore(state => state.Screens.isPaymentLoading);
  const setIsPaymentLoading = useScreenStore(state => state.setIsPaymentLoading);
  const openErrorModal = useOverlayStore(state => state.openErrorModal);

  const cart = useFromStore(useCartStore, state => state.cart) ?? [];
  const totalPrice = useFromStore(useCartStore, state => state.totalPrice) ?? 0;
  const paymentUrl = useFromStore(useCartStore, state => state.paymentUrl) ?? "";
  const setPaymentUrl = useCartStore(state => state.setPaymentUrl);
  
  const { 
    register, 
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<OrderData>();

  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    if (paymentUrl) {
      activateScreen("payment");
    }
  }, [paymentUrl]);

  function onSubmit(data: OrderData) {
    setIsPaymentLoading(true);
    data["cart"] = cart;
    data["totalPrice"] = totalPrice;
    data["address"] = address;

    const fetchPaymentUrl = () => {
      
      generatePaymentUrl(data)
      .then((res) => {
        if (res.status != 200 && res.message) {
          openErrorModal(res.message);
        } else if (setPaymentUrl) {
          setPaymentUrl(res.paymentUrl);
          router.push(res.paymentUrl);
        }
        setIsPaymentLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
    }
    fetchPaymentUrl();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 p-2 pb-8">
        <div className="relative inline-flex justify-center mt-4">
          <input
          type='text'
          placeholder=' '
          className='w-full h-11 text-lg px-3 border-transparent focus:border-transparent peer'
          {...register('name', { required: " is required" })}
          />
          <div className="border-beige absolute top-full transition-all duration-300 bg-beige w-0 h-1 peer-focus:w-full"></div>
          <label className="text-lg text-slate-900 absolute -top-7 left-0 transition-all px-1 duration
            peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2
            peer-focus:-top-7"
          >
            Name{errors.name?.message ? errors.name?.message : "*" }
          </label>
        </div>

        <div className="relative inline-flex justify-center mt-4">
          <input
          type='email'
          placeholder=' '
          className='w-full h-11 text-lg px-3 border-transparent focus:border-transparent focus:ring-0 peer'
          {...register('email', { 
            required: " is required" , 
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: " is invalid",
            }
          })}
          />
          <div className="border-beige absolute top-full transition-all duration-300 bg-beige w-0 h-1 peer-focus:w-full"></div>
          <label className="text-lg text-slate-900 absolute -top-7 left-0 transition-all px-1 duration
            peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2
            peer-focus:-top-7"
          >
            Email{errors.email?.message ? errors.email?.message : "*" }
          </label>
        </div>
        <div className="relative inline-flex justify-center mt-4">
          <AddressFields setAddress={setAddress}/>
          <label className="text-lg text-slate-900 absolute -top-7 left-0 transition-all px-1 duration
            peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2
            peer-focus:-top-7"
          >
            Address{errors.address?.message ? errors.address?.message : "*" }
          </label>
        </div>
        <div className='flex gap-4'>
          <div className="relative inline-flex justify-center mt-4">
            <input
            type='text'
            placeholder=''
            className='w-full h-11 text-lg px-3 border-transparent focus:border-transparent peer'
            {...register('block', { required: " required" })}
            />
            <div className="border-beige absolute top-full transition-all duration-300 bg-beige w-0 h-1 peer-focus:w-full"></div>
            <label className="text-lg text-slate-900 absolute -top-7 left-0 transition-all px-1 duration
              peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2
              peer-focus:-top-7"
            >
              Blk/Unit {errors.block?.message ? errors.block?.message : "No*" }
            </label>
          </div>
          
          <div className="relative inline-flex justify-center mt-4">
            <input
            type='text'
            placeholder=' '
            className='w-full h-11 text-lg px-3 border-transparent focus:border-transparent peer'
            {...register('postalcode', { required: " required" })}
            />
            <div className="border-beige absolute top-full transition-all duration-300 bg-beige w-0 h-1 peer-focus:w-full"></div>
            <label className="text-lg text-slate-900 absolute -top-7 left-0 transition-all px-1 duration
              peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2
              peer-focus:-top-7"
            >
              Postal No{errors.postalcode?.message ? errors.postalcode?.message : "*" }
            </label>
          </div>
        </div>
        <div className="relative inline-flex justify-center mt-4">
          <input
          type='text'
          placeholder=' '
          className='w-full h-11 text-lg px-3 border-transparent focus:border-transparent peer'
          {...register('remarks')}
          />
          <div className="border-beige absolute top-full transition-all duration-300 bg-beige w-0 h-1 peer-focus:w-full"></div>
          <label className="text-lg text-slate-900 absolute -top-7 left-0 transition-all px-1 duration
            peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2
            peer-focus:-top-7"
          >
            Remarks (Optional)
          </label>
        </div>
        {isPaymentLoading
          ? <button disabled={true} className='bg-beige w-full flex items-center justify-center rounded-md py-3 px-8 font-semibold outline-none opacity-50 cursor-not-allowed'>
              <svg aria-hidden="true" className="fill-slate-900 text-green inline w-5 h-5 mr-2 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              Processing...
            </button>
          : <button type="submit" className='bg-beige w-full rounded-md py-3 px-8 font-semibold outline-none'>Proceed to Payment</button>
        }
    </form>
  )
};
    
export default DeliveryForm;