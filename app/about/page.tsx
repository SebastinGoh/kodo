import Image from "next/image";
import Link from "next/link";
import Catalogue from "../catalogue";

export default function About() {
  const video = "/hero_video_S.mp4";
  return (
    <main className='bg-pink'>
      <div className="w-full flex flex-col items-center justify-center text-center py-6">
        <div className="text-2xl">
          About Us
        </div>
      </div>
      <div className="bg-blue w-full flex justify-center py-14">
          <div className="max-w-4xl flex flex-wrap justify-center items-center gap-10 md:flex-nowrap">
              <div className="text-md text-center px-4 md:text-left">
                  <p className="font-bold md:text-lg">
                      History & Background
                  </p>
                  <p className="pb-10">
                      Build, squish, and build again!
                      With 2.5lbs of Kinetic Beach Sand and everything you need to create epic sandcastles, this resealable sandbox provides endless hours of creative play!
                  </p>
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
                      Mission Statement & Values
                  </p>
                  <p className="pb-10">
                      Let your sand adventure begin!
                      The original magical moving sand, now in a two-tiered sandbox with 4 tools! 
                      Mold castles, sharks, and turtles with 1lb of Kinetic Sand, 
                      and use the included shovel tool to dig, scoop, flow, and mold. Available in Blue, Purple & Green!
                  </p>
              </div>
          </div>
      </div>
      <div className="bg-beige w-full flex justify-center py-14">
          <div className="max-w-4xl flex flex-wrap justify-center items-center gap-10 md:flex-nowrap">
              <div className="text-md text-center px-4 md:text-left">
                  <p className="font-bold md:text-lg">
                      The Team
                  </p>
                  <p className="pb-10">
                      Build, squish, and build again!
                      With 2.5lbs of Kinetic Beach Sand and everything you need to create epic sandcastles, this resealable sandbox provides endless hours of creative play!
                  </p>
              </div>
              <video src={video} className="max-w-xs md:max-w-lg border-4 border-white" autoPlay muted loop={true} playsInline>
              </video>
          </div>
      </div>
      <Catalogue 
        showGrid={false}
        exclude={[]}
      />
    </main>
  )
}
