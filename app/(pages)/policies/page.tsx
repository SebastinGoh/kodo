import dynamic from "next/dynamic";
import PageTitle from "@/app/components/page-title";

const PoliciesAccordion = dynamic(() => import("./policies-accordion"), {
  ssr: false,
});

export default function FAQ() {
  return (
    <main className='bg-beige text-slate-900'>
      <div className="w-full flex flex-col items-center justify-center text-center py-6">
        <PageTitle title="Policies"/>
      </div>
      <div className="max-w-6xl mx-auto pb-8">
        <PoliciesAccordion/>  
      </div>
    </main>
  )
}

