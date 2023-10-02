'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/(pages)/contact/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
    const { 
      register, 
      handleSubmit, 
    } = useForm<FormData>();

    function onSubmit(data: FormData) {
      sendEmail(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type='text'
            placeholder='Name'
            className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
            {...register('name', { required: true })}
          />
          <input
            type='email'
            placeholder='Email'
            className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('email', { required: true })}
          />
          <textarea
            rows={8}
            placeholder='Message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-lg text-gray-700 outline-none focus:shadow-md'
            {...register('message', { required: true })}
          ></textarea>
          <button className='bg-beige self-end rounded-lg py-3 px-8 font-semibold outline-none'>
            Submit
          </button>
        </form>
      );
    };
    
export default ContactForm;