import HeroVideo from "@/app/components/home/herovideo";
import USP from "@/app/components/home/usp";
import Catalogue from "@/app/components/products/catalogue";
import Socials from "@/app/components/home/socials";


export default function Home() {
  return (
    <main className='bg-blue max-h-fit'>
      <HeroVideo />
      <USP />
      <Catalogue 
        showGrid={false}
        exclude={[]}
      />
      <Socials />
    </main>
  )
}
