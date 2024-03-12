import { Paytone_One } from "next/font/google";
import { Open_Sans } from "next/font/google";
import project1 from "./project1.png";
import Image from "next/image";
import motion from "./motion.jpeg";
import motion2 from "./motion2.jpeg";
const opensans = Open_Sans({ weight: "300", subsets: ["latin"] });
const paytone = Paytone_One({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="w-full h-[800px] bg-gradient-to-br from-[#0d0c0c] via-[#111316] to-[#0e1013]">
        <div className="">
          <div className="py-56 text-6xl  mx-40 max-sm:mx-20 max-sm:py-40">
            <div className={paytone.className}>
              <div className="w-1/3 max-sm:text-3xl">
                Welcome to my Portfolio
              </div>
            </div>
            <div className="text-sm text-gray-400 my-8 w-1/3 max-sm:w-full">
              <div className={opensans.className}>
                This is the portfolio of someone hehehe, its a human ofc but
                yeah yes hdahsiduhaisd im writing randomt hings This is the
                portfolio of someone hehehe, its a human ofc but yeah yes
                hdahsiduhaisd im writing randomt hingsThis is the portfolio of
                someone hehehe, its a human ofc but yeah yes hdahsiduhaisd im
                writing randomt hingsThis is the portfolio of someone hehehe,
                its a
              </div>
            </div>
            <div className="my-12 text-xl">
              <button className="p-4 bg-indigo-400 rounded-2xl mb-20">
                Explore
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-[#d8f3dc] p-20 max-sm:p-6">
        <div className="text-center items-center text-5xl text-[#081c15] mt-6">
          <div className={opensans.className}>Trending Projects</div>
          <div className="py-8 inline-flex gap-10 max-sm:flex-col mt-8">
            <div className="border-2 border-[#95d5b2] rounded-xl w-[300px] h-[350px] p-6 mx-2">
              <Image
                src={project1}
                width={300}
                alt="no image"
                className="rounded-2xl"
              />
              <div className="text-sm w-[250px] mt-6 mb-4">
                some level of thingssome level of things some level of things
                some
              </div>
              <div className="">
                <button className="w-full bg-[#95d5b2] items-center p-4 text-sm text-white rounded-2xl">
                  Open
                </button>
              </div>
            </div>
            <div className="border-2 border-[#95d5b2] rounded-xl w-[300px] h-[350px] p-6 mx-2">
              <Image
                src={motion}
                width={300}
                alt="no image"
                className="rounded-2xl"
              />
              <div className="text-sm w-[250px] mt-6 mb-4">
                some level of thingssome level of things some level of things
                some
              </div>
              <div className="">
                <button className="w-full bg-[#95d5b2] items-center p-4 text-sm text-white rounded-2xl">
                  Open
                </button>
              </div>
            </div>
            <div className="border-2 border-[#95d5b2] rounded-xl w-[300px] h-[350px] p-6 mx-2">
              <Image
                src={motion2}
                width={300}
                alt="no image"
                className="rounded-2xl"
              />
              <div className="text-sm w-[250px] mt-6 mb-4">
                some level of thingssome level of things some level of things
                some
              </div>
              <div className="">
                <button className="w-full bg-[#95d5b2] items-center p-4 text-sm text-white rounded-2xl">
                  Open
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
