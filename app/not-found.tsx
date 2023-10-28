import Link from 'next/link';
import Image from 'next/image';
import PageTitle from '@/app/components/page-title';
 
export default function NotFound() {
  return (
    <main className='bg-beige'>
      <div className='h-1/2 max-w-3xl mx-auto flex flex-col items-center justify-center gap-10 p-6'>
        <PageTitle title='404 | Page Not Found' />
        <Image src="/404.png" width={400} height={400} alt="404 Image"></Image>
        <p className='text-center font-semibold lg:text-2xl'>
          Oops looks like you can't fit a circular block in a triangular hole. Let's get you back to the home page.
        </p>
        <Link href="/" className="border-2 border-slate-900 rounded-full font-bold w-full h-12 max-w-sm flex items-center justify-center py-2 px-8 hover:bg-pink lg:text-lg">
            GO TO HOME
        </Link>
      </div>
    </main>
  )
}