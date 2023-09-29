import dynamic from "next/dynamic";

const FaqAccordion = dynamic(() => import("./faq-accordion"), {
  ssr: false,
});

export default function FAQ() {
  return (
    <main className='bg-green text-slate-900'>
      <div className="w-full flex flex-col items-center justify-center text-center py-6">
        <div className="text-2xl">
          FAQs
        </div>
      </div>
      <div className="max-w-6xl mx-auto pb-8">
        <FaqAccordion/>  
      </div>
    </main>
  )
}

