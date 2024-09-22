"use client";
import React from "react";
import CountUp from "react-countup";

const Accomplishments = () => {
  return (
    <section className="w-full min-h-[60vh] flex justify-center items-center py-32 lg:py-20 bg-red-200">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h2 className="font-black text-4xl lg:text-6xl text-center drop-shadow-2xl">
          Tailored Approach
        </h2>
        <p className="mb-10 text-center text-lg px-4 lg:px-0">
          Every web design project is a tailored combination of marketing
          services designed to drive your brand&apos;s growth.
        </p>
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          <div className="flex flex-col-reverse items-center justify-center h-auto gap-4 px-4 pt-6 lg:pt-0">
            <h4 className="text-center mt-4 font-semibold">
              Years of Experience
            </h4>
            <CountUp
              className="font-black text-center text-4xl text-red-500 lg:text-[5rem]"
              start={0}
              end={10}
              duration={6}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix="+"
            />
          </div>
          <div className="flex flex-col-reverse items-center justify-center h-auto gap-4 px-4 pt-6 lg:pt-0">
            <h4 className="text-center mt-4 font-semibold">Active Projects</h4>
            <CountUp
              className="font-black text-center text-4xl text-red-500 lg:text-[5rem]"
              start={0}
              end={3}
              duration={6}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix="+"
            />
          </div>
          <div className="flex flex-col-reverse items-center justify-center h-auto gap-4 px-4 pt-6 lg:pt-0">
            <h4 className="text-center mt-4 font-semibold">Success Stories</h4>
            <CountUp
              className="font-black text-center text-4xl text-red-500 lg:text-[5rem]"
              start={0}
              end={4}
              duration={6}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix="+"
            />
          </div>
          <div className="flex flex-col-reverse items-center justify-center h-auto gap-4 px-4 pt-6 lg:pt-0">
            <h4 className="text-center mt-4 font-semibold">
              Average Turnaround
            </h4>
            <CountUp
              className="font-black text-center text-4xl text-red-500 lg:text-[5rem]"
              start={0}
              end={3}
              duration={8}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix="+"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
