"use client";
import Image from "next/image";
import React from "react";
import imageURL from "../../../../public/hero-image-02.jpg";
import Modal from "../modal/Modal";

const Hero03 = () => {
  return (
    <>
      <div
        className="relative z-10 bg-cover bg-center bg-no-repeat pb-20 pt-[120px] md:pt-[150px]"
        style={{
          backgroundImage: `url('https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-bg-13.jpg')`,
        }}
      >
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[#090E34]/[85%]"></div>
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-16 max-w-[650px] lg:mb-0">
                <span className="mb-5 block text-base font-semibold text-white sm:text-lg md:text-xl">
                  Web &amp; Online Marketing Agency
                </span>
                <h1 className="mb-4 text-3xl font-bold !leading-[1.208] text-white italic sm:text-4xl lg:text-[42px] xl:text-5xl">
                  Get Found, Get Customers, Grow Your Business
                </h1>
                <p className="mb-9 text-base text-white">
                  We help your business grow with engaging custom made websites,
                  data driven apps, tailored online marketing campaigns, and
                  targeted ads, all services geared to attract your business new
                  customers and boost your business presence in your targeted
                  industry.
                </p>
                <ul className="flex flex-wrap items-center gap-3">
                  <li>
                    {/* <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-blue-dark"
                    >
                      Get Started Today
                    </a> */}
                    <Modal />
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center rounded-md bg-white/5 px-6 py-3 text-base font-medium text-white hover:bg-gray-2 hover:text-body-color"
                    >
                      Discover Our Services
                      <span className="ml-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path
                            d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3437 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2813 11.0312 17.2813C11.2187 17.2813 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                            fill=""
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 flex justify-center">
              <div className="hidden lg:flex lg:w-full lg:h-full lg:rounded-md">
                <Image
                  src={imageURL}
                  alt="Blooming Brands"
                  width="800"
                  height="800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero03;

// const InputBox = ({ labelTitle, type, name, placeholder }) => {
//   return (
//     <>
//       <label
//         htmlFor={name}
//         className="mb-2 block text-base font-medium text-dark dark:text-white"
//       >
//         {labelTitle}
//       </label>
//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         className="w-full rounded-md border border-stroke bg-transparent px-5 py-2.5 text-base font-medium text-body-color outline-none focus:border-primary dark:border-dark-3 dark:text-dark-6"
//       />
//     </>
//   );
// };
