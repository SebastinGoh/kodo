import Link from "next/link"

export default function USP() {
    const video = "/hero_video_L.mp4";
    return (
        <div className="">
            <div className="bg-pink w-full py-2 transition duration-[3000ms] ease-in-out" id="usp"></div>
            <div className="bg-clay-bg w-full flex justify-center py-14 text-center">
                <div className="text-white drop-shadow-xl font-semibold text-lg max-w-2xl px-4 md:px-0 md:text-2xl">
                    It's mesmerizing, it's satisfying, and once it's in your kids' hands they can't put it down. 
                    It's hands on play for their curious minds! Mold their imagination and let their creativity flow! 
                    Watch them explore, shape, slice, scoop, squish, smush and flow again and again!
                </div>
            </div>
            <div className="bg-blue w-full flex justify-center py-14">
                <div className="max-w-4xl flex flex-wrap justify-center items-center gap-10 md:flex-nowrap">
                    <div className="text-md text-center px-4 md:text-left">
                        <p className="font-bold md:text-lg">
                            Deluxe Beach Castle Playset
                        </p>
                        <p className="pb-10">
                            Build, squish, and build again!
                            With 2.5lbs of Kinetic Beach Sand and everything you need to create epic sandcastles, this resealable sandbox provides endless hours of creative play!
                        </p>
                        <Link className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg" href="#">
                            BUY NOW
                        </Link>
                    </div>
                    <video src={video} className="max-w-xs md:max-w-lg border-4 border-white" autoPlay muted loop={true} playsInline>
                    </video>
                </div>
            </div>
            <div className="bg-green w-full flex justify-center py-14">
                <div className="max-w-4xl flex flex-wrap-reverse justify-center items-center gap-10 md:flex-nowrap">
                    <video src={video} className="max-w-xs md:max-w-lg border-4 border-white" autoPlay muted loop={true} playsInline>
                    </video>
                    <div className="text-md text-center px-4 md:text-left">
                        <p className="font-bold md:text-lg">
                            Kinetic Sand Sandbox Set
                        </p>
                        <p className="pb-10">
                            Let your sand adventure begin!
                            The original magical moving sand, now in a two-tiered sandbox with 4 tools! 
                            Mold castles, sharks, and turtles with 1lb of Kinetic Sand, 
                            and use the included shovel tool to dig, scoop, flow, and mold. Available in Blue, Purple & Green!
                        </p>
                        <Link className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg" href="#">
                            BUY NOW
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}