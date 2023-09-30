import Image from "next/image";
import Link from "next/link";
import Catalogue from "@/app/catalogue";
import ContactForm from '@/app/contact/contact-form';

export default function ContactPage() {
    
    return (
    <main className='bg-green'>
        <ContactForm />
        <Catalogue 
        showGrid={false}
        exclude={[]}
        />
    </main>
  )
}
