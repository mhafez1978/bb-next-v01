import React from "react";
import { Button } from "@/components/ui/button";

const ActionBanner = () => {
  return (
    <section className=" bg-gray-300 min-h-[60vh] flex flex-col justify-center items-center text-center py-32 lg:py-20">
      <div className="w-1/2 mx-auto ">
        <h3 className="capitalize text-3xl font-black mb-8 lg:text-4xl">
          We help your business grow with data driven websites and online
          marketing
        </h3>
        <p className="text-baseline px-0 mb-10 lg:text-lg lg:px-20">
          Our Web Design, Branding Design and SEO Agency Los Angeles team
          creates experiences that tell stories & win customers.
        </p>
        <div className="flex flex-row justify-center items-center">
          <Button
            variant="outline"
            className="rounded-md bg-red-600 text-white py-6 px-10 text-xl hover:bg-emerald-500"
            size={"lg"}
          >
            Request A Quote
          </Button>
          <Button variant="link" className="text-xl" size={"lg"}>
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActionBanner;
