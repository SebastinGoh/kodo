import Catalogue from "@/app/components/products/catalogue";
import ContactForm from '@/app/(pages)/contact/contact-form';
import Link from "next/link";
import PageTitle from "@/app/components/page-title";

export default function ContactPage() {
    
    return (
    <main className='bg-green text-slate-900'>
      <div className="w-full flex flex-col items-center justify-center text-center gap-8 p-4">
        <PageTitle title="Contact Us"/>
        <div className="text-md text-left">
          <p>
            If you have any questions or simply want to chat, we'd love to hear from you! 
            Simply fill in the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="text-md text-left">
          <p>
            Alternatively, get in touch with us on&nbsp;
            <Link href="https://www.instagram.com/" className="underline">
              Instagram
            </Link>
            &nbsp;or&nbsp;
            <Link href="https://www.facebook.com/" className="underline">
              Facebook
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4">
        <ContactForm />
      </div>
      <Catalogue 
      showGrid={false}
      exclude={[]}
      />
    </main>
  )
}
