import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="w-full flex flex-col h-[50rem] items-center justify-start relative">
      <h1 className="text-4xl font-black">UNRAVYL</h1>
      <div className="profileCircle lg:z-0 z-20 rounded-full flex items-center justify-center">
        <Image
          alt="bgProfile"
          src="/logo.png"
          height={1240}
          width={1240}
          className="size-[5rem]"
        ></Image>
      </div>
      <div className="flex flex-col mt-[4rem] items-center justify-center">
        <h1 className="font-black text-5xl lg:text-8xl text-center">FREELANCE <br/> WEB <br /> DEVELOPERS </h1>
      </div>
      <div className="w-full absolute top-0 right-0">
        <Image
          src="/bg.png"
          alt="bg"
          height={21240}
          width={21240}
          className="w-full opacity-35 z-10"
        ></Image>
        <div class="backgrounds z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
      </div>{" "}
      <Link
        href="https://www.linkedin.com/company/unravyl"
        target="_blank"
        className="w-[11rem] py-2 absolute flex hover:scale-105 transition items-center text-lg justify-center bottom-[12rem] rounded-xl text-white bg-[#83828A]"
      >
        Avail Services <i class="bx bx-right-arrow-alt text-white text-xl"></i>
      </Link>
    </section>
  );
}

export default Hero;
