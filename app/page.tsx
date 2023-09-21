import Image from "next/image";
import HeroVideo from "./home/herovideo";
import USP from "./home/usp";

export default function Home() {
  return (
    <main className='bg-blue max-h-fit'>
        <HeroVideo />
        <USP />
    </main>
  )
}
