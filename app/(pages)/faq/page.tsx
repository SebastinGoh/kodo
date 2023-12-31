import dynamic from "next/dynamic";
import Link from "next/link";
import Catalogue from "@/app/components/products/catalogue";
import PageTitle from "@/app/components/page-title";

const FaqAccordion = dynamic(() => import("./faq-accordion"), {
  ssr: false,
});

export default function FAQ() {
  return (
    <main className='bg-green text-slate-900'>
      <div className="w-full flex flex-col items-center justify-center text-center py-6">
        <PageTitle title="FAQ"/>
      </div>
      <div className="max-w-6xl mx-auto pb-4">
        <FaqAccordion/>
      </div>
      <div className="w-full flex flex-col items-center justify-center text-center p-6">
        <div className="text-md">
          If your question is not here, feel free to&nbsp;
          <Link href="/contact" className="underline">
            contact us
          </Link>
        </div>
      </div>
      <Catalogue 
        showGrid={false}
        exclude={[]}
      />
    </main>
  )
}

