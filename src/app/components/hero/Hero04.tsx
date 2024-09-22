"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { Anton } from "next/font/google";
import Modal from "@/app/components/modal/Modal";
import "./Hero04.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <>
      <div className="w-screen min-h-[60vh] flex justify-center items-center py-32 lg:h-[80vh] lg:mt-[64px] lg:flex-row lg:py-10">
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center">
          <div className="container mx-auto text-center md:w-full lg:w-[40%] lg:text-left">
            <h1 className="text-4xl mb-4 font-black lg:text-5xl">
              We Help Small Business Get More Customers
            </h1>
            <p className="text-md mb-8 lg:text-lg">
              We help your business grow with engaging websites, business apps,
              tailored online marketing campaigns, and targeted ads.
            </p>
            <div className="w-full flex flex-row justify-center items-center gap-4 lg:justify-start">
              <button className="border-2 border-red-300 py-4 px-10 rounded-xl text-lg font-black bg-red-500 text-white hover:bg-lime-600 hover:border-green-400">
                Get Started Today
              </button>
              <button className="py-4 rounded-xl text-lg font-black hover:text-lime-600">
                Discover Our Services
              </button>
            </div>
          </div>
          <div className="overflow-visible container h-[60vh] mx-auto flex flex-col justify-center items-center text-center md:w-full lg:w-[60%] lg:text-left">
            <ProjectSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

const ProjectSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    autoplaySpeed: 3000,
    centerMode: true,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="w-full h-[100%] m-0 overflow-hidden">
      <div className="px-4">
        <img
          src="/pwwl-pwwl.png"
          className="object-fit object-left-top w-full h-[500px]"
          alt="Slide 1"
        />
      </div>
      <div className="px-4">
        <img
          src="carolina-recycles.png"
          className="object-fit object-left-top w-full h-[500px]"
          alt="Slide 2"
        />
      </div>
      <div className="px-4">
        <img
          src="/ceds.png"
          className="object-fit object-left-top w-full h-[500px]"
          alt="Slide 3"
        />
      </div>
      <div className="px-4">
        <img
          src="jl-auto.png"
          className="object-fit object-left-top w-full h-[500px]"
          alt="Slide 4"
        />
      </div>
      <div className="px-4">
        <img
          src="clt-dumpster.png"
          className="object-fit object-left-top w-full h-[500px]"
          alt="Slide 4"
        />
      </div>
    </Slider>
  );
};
