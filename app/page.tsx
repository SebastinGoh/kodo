import Image from "next/image";
import HeroVideo from "./herovideo";
import USP from "./usp";

export default function Home() {
  return (
    <main className='bg-blue h-full'>
        <HeroVideo />
        <USP />
    </main>
  )
}
