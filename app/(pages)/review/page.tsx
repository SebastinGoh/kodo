'use client';
import Review from "@/app/components/review/review";

export default function ReviewPage() {
    
    return (
    <main className='bg-blue text-slate-900'>
      <div className="w-full flex flex-col items-center justify-center text-center py-6">
        <div className="text-2xl">
          Review Order
        </div>
      </div>
      <div className="max-w-6xl mx-auto pb-8">
        <Review />  
      </div>
    </main>
  )
}
