import Image from "next/image";
import Catalogue from "@/app/components/products/catalogue";
import PageTitle from "@/app/components/page-title";

export default function About() {
  const video = "/hero_video_S.mp4";
  return (
    <main className='bg-pink'>
      <div className="w-full flex flex-col items-center justify-center text-center py-6">
        <PageTitle title="About Us"/>
      </div>
      <div className="bg-blue w-full flex justify-center py-14">
          <div className="max-w-4xl flex flex-wrap justify-center items-center gap-10 md:flex-nowrap">
              <div className="text-md text-center px-4 md:text-left">
                  <p className="text-center font-bold pb-4 md:text-lg">
                      History & Background
                  </p>
                  <p className="pb-10">
                    We are a family-owned and operated business that has been serving the community for over 30 years.
                    We pride ourselves on providing quality products at competitive prices.
                    Our goal is to provide our customers with the best service possible.
                  </p>
              </div>
              <Image src="/about/learning.jpg" className="border-4 border-white" width={300} height={100} alt="learning"/>
          </div>
      </div>
      <div className="bg-green w-full flex justify-center py-14">
          <div className="max-w-4xl flex flex-wrap-reverse justify-center items-center gap-10 md:flex-nowrap">
              <Image src="/about/mission.jpg" className="border-4 border-white" width={300} height={100} alt="mission"/>
              <div className="text-md text-center px-4 md:text-left">
                    <p className="text-center font-bold md:text-lg pb-4">
                        Mission Statement & Values
                    </p>
                    <ul className="pb-10">
                        <li>
                            <span className="font-bold">Quality:</span> We strive to provide the best quality products for our customers.
                        </li>
                        <li>
                            <span className="font-bold">Customer Service:</span> We provide the best customer service to our customers.
                        </li>
                        <li>
                            <span className="font-bold">Integrity:</span> We are honest and transparent in all our business dealings.
                        </li>
                        <li>
                            <span className="font-bold">Innovation:</span> We are always looking for new ways to improve our products and services.
                        </li>
                        <li>
                            <span className="font-bold">Teamwork:</span> We work together as one team towards a common goal.
                        </li>
                    </ul>
              </div>
          </div>
      </div>
      <div className="bg-beige w-full flex justify-center py-14">
          <div className="max-w-4xl flex flex-wrap justify-center items-center gap-10 md:flex-nowrap">
              <div className="text-md text-center px-4 md:text-left">
                  <p className="font-bold text-center pb-4 md:text-lg">
                      The Team
                  </p>
                  <p className="pb-10">
                    We are a team of passionate individuals who are committed to providing the best customer service possible.
                    We strive to make your experience with us as easy and enjoyable as possible.
                    If you have any questions or concerns, please feel free to contact us at any time.
                  </p>
              </div>
              <Image src="/about/team.jpg" className="border-4 border-white" width={300} height={100} alt="team"/>
          </div>
      </div>
      <Catalogue 
        showGrid={false}
        exclude={[]}
      />
    </main>
  )
}
