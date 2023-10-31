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
                  Welcome to our world of early education and playful learning! 
                  As a small home-based business, we've been driven by a profound passion for nurturing young minds. 
                  Our story begins with a belief: that a child's journey of exploration and learning commences at a tender age. 
                  We're committed to weaving the fabric of play into their educational odyssey. 
                  Our mission revolves around providing the finest child-safe, enriching products to our cherished customers. 
                  We aspire to be a reliable companion during a child's formative years, striving to offer not just products 
                  but a shared journey in their early developmental milestones. Join us on this enchanting path of imaginative learning and discovery. 
                  Together, let's make those early years magical!
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
                        Developmental Principles
                    </p>
                    <ul className="pb-10">
                        <li>
                            <span className="font-bold">Cognitive Development:</span> Enhancing thinking, language, memory, and logical reasoning skills for learning.
                        </li>
                        <li>
                            <span className="font-bold">Social and Emotional Development:</span> Fostering relationships, empathy, and managing emotions for healthy interactions.
                        </li>
                        <li>
                            <span className="font-bold">Physical Development:</span> Growing motor skills for movement and interaction with surroundings.
                        </li>
                        <li>
                            <span className="font-bold">Language Development:</span> Communication, listening, speaking, reading, and writing skills for learning.
                        </li>
                        <li>
                            <span className="font-bold">Sensory Development:</span> Coordinating and enhancing the senses for perceiving the environment.
                        </li>
                        <li>
                            <span className="font-bold">Creative Development:</span> Expressing ideas, feelings, and imagination through art, music, and play.
                        </li>
                    </ul>
              </div>
          </div>
      </div>
      <div className="bg-beige w-full flex justify-center py-14">
          <div className="max-w-4xl flex flex-wrap justify-center items-center gap-10 md:flex-nowrap">
              <div className="text-md text-center px-4 md:text-left">
                  <p className="font-bold text-center pb-4 md:text-lg">
                      Meet Our Team
                  </p>
                  <p className="pb-10">
                  Meet our dynamic duo! Our team might be small, consisting of just two individuals, but our passion and dedication are boundless. 
                  With over five years of experience in the childcare industry, one half of our team is an accomplished early childhood educator, 
                  crafting products with a profound understanding of what stimulates young minds. 
                  The other half is a seasoned entrepreneur, diving into the intricate backend operations, ensuring that every aspect runs seamlessly. 
                  Together, we form a robust team, driven by our shared passion to deliver the highest quality products, merging education with fun. 
                  We might be two, but our commitment to excellence is as strong as any large team out there.
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
