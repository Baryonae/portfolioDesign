"use client";
import React from "react";
import Particles from "react-tsparticles";
import Image from "next/image";
import { Paytone_One } from "next/font/google";
import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({ weight: "300", subsets: ["latin"] });
const paytone = Paytone_One({ weight: "400", subsets: ["latin"] });
import profile from "./profile.jpg";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full bg-gradient-to-br from-[#0d0c0c] via-[#202429] to-[#0e1013]">
        <div className="text-center text-6xl flex justify-center h-screen items-center mx-8 max-sm:text-4xl">
          <div className="rounded-3xl p-1 bg-gradient-to-r from-[#3f1e63] via-[#581541] to-[#706a6f] bg-opacity-5">
            <div className="h-full w-full bg-[#121418] p-12 rounded-3xl max-sm:p-6">
              <div className={paytone.className}>
                <div className="text-[#d3d3d3] ">
                  <div className="text-sm text-[#8f8f8f]">
                    <div className={opensans.className}>
                      <div className="items-center justify-center flex">
                        <div className="border-[#3b344e] border-2 rounded-full px-6 py-1 w-fit my-4">
                          Video editor, graphics designer and digital artist
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex my-8">
                    <Image
                      src={profile}
                      width={125}
                      height={100}
                      alt="no image"
                      className="rounded-full border-2 border-white"
                    />
                    <div className=" p-2 mx-4">
                      Cliffsy
                      <div className="text-sm mt-4">
                        <div className={opensans.className}>
                          Welcome to my portfolio
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xl py-4 text-[#b8b8b8] inline-flex">
                  <div className="text-sm pr-4 inline-flex gap-4">
                    <Link href="https://www.instagram.com/cliffsy.no/">
                      <FaInstagram size={28} className="opacity-45" />
                    </Link>
                    <Link href="https://www.youtube.com/cliffsyy">
                      <FaYoutube size={28} className="opacity-45" />
                    </Link>
                  </div>
                  <div className={opensans.className}>
                    <Link href="/projects">Projects</Link>
                  </div>
                  <div className={opensans.className}>
                    <div className="pl-4">
                      <Link href="/contact">Contact</Link>
                    </div>
                  </div>
                  <div className={opensans.className}>
                    <div className="pl-4">
                      <Link href="/about">About</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
