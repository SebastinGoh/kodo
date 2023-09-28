import HeroVideo from "./home/herovideo";
import USP from "./home/usp";
import Catalogue from "./catalogue";
import Socials from "./socials";


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
