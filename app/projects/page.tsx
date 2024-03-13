import { Paytone_One } from "next/font/google";
import { Open_Sans } from "next/font/google";
import project1 from "./project1.png";
import Image from "next/image";
import motion from "./motion.jpeg";
import motion2 from "./motion2.jpeg";
const opensans = Open_Sans({ weight: "300", subsets: ["latin"] });
const paytone = Paytone_One({ weight: "400", subsets: ["latin"] });
import { IoMdCheckmark } from "react-icons/io";

export default function Home() {
  return (
    <div>
      <div className="w-full h-[800px] bg-gradient-to-br from-[#0d0c0c] via-[#111316] to-[#0e1013]">
        <div className="">
          <div className="py-56 text-6xl  mx-40 max-sm:mx-20 max-sm:py-40">
            <div className={paytone.className}>
              <div className="w-1/3 max-sm:text-3xl">
                Welcome to my Portfolio!
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
              <button className="px-16 p-4 bg-indigo-400 rounded-2xl mb-20 bg-opacity-15 text-indigo-400">
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
              <div></div>

              <div className="">
                <button className="w-full bg-[#95d5b2] items-center p-4 text-sm bg-opacity-20 text-[#408d63] rounded-2xl">
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
                some hello again lol idk
              </div>
              <div className="">
                <button className="w-full bg-[#95d5b2] bg-opacity-20 text-[#408d63] items-center p-4 text-sm  rounded-2xl">
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
                <button className="w-full bg-[#95d5b2] items-center p-4 text-sm bg-opacity-20 text-[#408d63] rounded-2xl">
                  Open
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="p-12 max-sm:px-4">
          <div className="text-5xl text-center items-center text-gray-300 mt-8 inline-flex gap-4 justify-center w-full">
            <div className={paytone.className}>The Best prices </div>
            <div className="text-yellow-400">
              <div className={paytone.className}>Ever!</div>
            </div>
          </div>
          <div className="px-12 inline-flex max-sm:flex-col items-center justify-center w-full my-16 ">
            <div className="border-r-2 border-yellow-300 px-8  py-8">
              <div className="line-through decoration-red-500">₹4000</div>
              <div className={paytone.className}>
                <div className="text-5xl">₹ 2999</div>
              </div>
              <div className="mt-4 text-yellow-400 text-4xl">
                <div className={opensans.className}>
                  <div className="text-yellow-400">Basic Plan</div>
                </div>
                <div className="text-xl text-white mt-8">
                  <div className="inline-flex">
                    <IoMdCheckmark
                      size={20}
                      color="yellow"
                      className="color-yellow-400 mr-4"
                    />
                    <div>More Features</div>
                  </div>
                </div>
                <div className="text-xl text-white mt-2">
                  <div className="inline-flex">
                    <IoMdCheckmark
                      size={20}
                      color="yellow"
                      className="color-yellow-400 mr-4"
                    />
                    <div>Animated Banners</div>
                  </div>
                </div>
                <div className="text-xl text-white mt-2">
                  <div className="inline-flex">
                    <IoMdCheckmark
                      size={20}
                      color="yellow"
                      className="color-yellow-400 mr-4"
                    />
                    <div>3d Banners?</div>
                  </div>
                </div>
                <div className="text-xl text-white mt-2 mb-20">
                  <div className="inline-flex">
                    <IoMdCheckmark
                      size={20}
                      color="yellow"
                      className="color-yellow-400 mr-4"
                    />
                    <div>something?</div>
                  </div>
                </div>
                <div className="">
                  <button className="text-lg text-center items-center bg-yellow-300 text-yellow-500 bg-opacity-15 px-20 max-sm:px-4 py-4 rounded-2xl">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="border-r-2 border-yellow-300 px-8 py-8 ml-24 max-sm:mt-24 max-sm:ml-0">
              <div className="line-through decoration-red-500">₹8000</div>
              <div className={paytone.className}>
                <div className="text-5xl">₹ 4000</div>
              </div>
              <div className="mt-4 text-yellow-400 text-4xl">
                <div className={opensans.className}>
                  <div className="text-yellow-400">Standard Plan</div>
                </div>
                <div className="text-xl text-white mt-8">
                  <div className="inline-flex">
                    <IoMdCheckmark
                      size={20}
                      color="yellow"
                      className="color-yellow-400 mr-4"
                    />
                    <div>More Features</div>
                  </div>
                </div>
                <div className="text-xl text-white mt-2">
                  <div className="inline-flex">
                    <IoMdCheckmark
                      size={20}
                      color="yellow"
                      className="color-yellow-400 mr-4"
                    />
                    <div>Animated Banners</div>
                  </div>
                </div>
                <div className="text-xl text-white mt-2">
                  <div className="inline-flex">
                    <IoMdCheckmark
                      size={20}
                      color="yellow"
                      className="color-yellow-400 mr-4"
                    />
                    <div>3d Banners?</div>
                  </div>
                </div>
                <div className="text-xl text-white mt-2 mb-20">
                  <div className="inline-flex">
                    <IoMdCheckmark
                      size={20}
                      color="yellow"
                      className="color-yellow-400 mr-4"
                    />
                    <div>something?</div>
                  </div>
                </div>
                <div>
                  <button className="text-lg text-center bg-yellow-300 text-yellow-500 bg-opacity-15 px-20 max-sm:px-4 py-4 rounded-2xl">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className=" px-8 py-8 ml-24 max-sm:mt-24 max-sm:ml-0">
              <div className="line-through decoration-red-500">₹10000</div>
              <div className={paytone.className}>
                <div className="text-5xl">₹ 6000</div>
              </div>
              <div className="mt-4 text-yellow-400 text-4xl">
                <div className={opensans.className}>
                  <div className="text-yellow-400">Premium Plan</div>
                </div>
                <div className="text-xl text-white mt-8">
                  <div className="inline-flex">
                    <IoMdCheckmark
                      size={20}
                      color="yellow"
                      className="color-yellow-400 mr-4"
                    />
                    <div>More Features</div>
                  </div>
                </div>
                <div className="text-xl text-white mt-2">
                  <div className="inline-flex">
                    <IoMdCheckmark
                      size={20}
                      color="yellow"
                      className="color-yellow-400 mr-4"
                    />
                    <div>Animated Banners</div>
                  </div>
                </div>
                <div className="text-xl text-white mt-2">
                  <div className="inline-flex">
                    <IoMdCheckmark
                      size={20}
                      color="yellow"
                      className="color-yellow-400 mr-4"
                    />
                    <div>3d Banners?</div>
                  </div>
                </div>
                <div className="text-xl text-white mt-2 mb-20">
                  <div className="inline-flex">
                    <IoMdCheckmark
                      size={20}
                      color="yellow"
                      className="color-yellow-400 mr-4"
                    />
                    <div>something?</div>
                  </div>
                </div>
                <div>
                  <button className="text-lg text-center bg-yellow-300 text-yellow-500 bg-opacity-15 px-20 max-sm:px-4 py-4 rounded-2xl">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
