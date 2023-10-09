import DeliveryForm from "@/app/components/delivery/delivery-form";
import PageTitle from "@/app/components/page-title";

export default function Delivery() {
    
    return (
    <main className='bg-purple text-slate-900'>
      <div className="w-full flex flex-col items-center justify-center text-center py-6">
        <PageTitle title="Delivery Info"/>
      </div>
      <div className="max-w-6xl mx-auto pb-8">
        <DeliveryForm/>  
      </div>
    </main>
  )
}
