import Image from "next/image";

export default function Product() {
  return (
    <main className='bg-orange grow flex flex-col items-center justify-center text-center gap-10'>
      <Image src="/logo.png" width={200} height={200} alt="Kodo Logo" />
      <div className="text-3xl font-semibold">PRODUCT</div>
    </main>
  )
}
