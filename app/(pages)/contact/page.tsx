import Catalogue from "@/app/components/products/catalogue";
import ContactForm from '@/app/(pages)/contact/contact-form';

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
