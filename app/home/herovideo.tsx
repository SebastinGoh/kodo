import Link from "next/link";

export default function HeroVideo() { 
    const video = "/hero_video_L.mp4"
    return (
        <div className="h-screen relative">
            <video src={video} className="w-full h-full object-cover" autoPlay muted loop={true} playsInline>
            </video>
            <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-4 text-slate-900">
                <img alt="logo" src="/logo.png" className='lg:w-1/5 md:w-1/4 w-1/3'/>
                <p className="lg:text-2xl text-lg drop-shadow-md font-slate-900 font-bold">
                    Little Hands, Unlimited Potential!
                </p>
                <Link className="bg-beige hover:bg-pink lg:text-lg font-bold py-2 px-8 rounded-full" href="/#usp">
                    LEARN MORE
                </Link>
            </div>
        </div>
    )
};