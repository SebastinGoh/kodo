import Image from "next/image";
import HeroVideo from "./home/herovideo";
import USP from "./home/usp";
import Catalogue from "./catalogue";
import Socials from "./socials";
import Footer from "./footer";

export default function Home() {
  return (
    <main className='bg-blue max-h-fit'>
      <HeroVideo />
      <USP />
      <Catalogue />
      <Socials />
      <Footer />
    </main>
  )
}
