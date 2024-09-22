import React from "react";

function Hero() {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-dark pb-[140px] pt-20 lg:pb-[180px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="mx-auto w-full max-w-[680px] text-center">
            <h1 className="mb-5 text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-[60px]/[1.2]">
              <span className="flex flex-wrap items-center justify-center">
                Creating
                <span className="inline-flex px-3">
                  <span className="block aspect-square h-9 w-9 rounded-full bg-white md:h-[52px] md:w-[52px]"></span>
                  <span className="block h-9 w-[18px] rounded-l-lg rounded-r-[52px] bg-white md:h-[52px] md:w-[26px]"></span>
                  <span className="block h-9 w-[18px] rounded-l-lg rounded-r-[60px] bg-white md:h-[52px] md:w-[26px]"></span>
                </span>
                symphony
              </span>

              <span>with the power of AI</span>
            </h1>
            <p className="mx-auto mb-9 w-full max-w-[570px] text-base text-dark-6">
              AI collaborates with human musicians, generating original pieces,
              unique fusion of human creativity and machine intelligence.
            </p>

            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-white duration-200 hover:bg-primary/90">
              Start for free
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2201_2315)">
                    <path
                      d="M11 6.40625C10.7187 6.125 10.2812 6.125 10 6.40625C9.71875 6.6875 9.71875 7.125 10 7.40625L11.875 9.3125H6.46875C6.09375 9.3125 5.78125 9.625 5.78125 10C5.78125 10.375 6.09375 10.6875 6.46875 10.6875H11.875L10 12.5937C9.71875 12.875 9.71875 13.3125 10 13.5937C10.125 13.7187 10.3125 13.7812 10.5 13.7812C10.6875 13.7812 10.875 13.7188 11 13.5625L14.0625 10.4688C14.3437 10.1875 14.3437 9.75 14.0625 9.46875L11 6.40625Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10 0.5625C4.78125 0.5625 0.53125 4.78125 0.53125 10C0.53125 15.2188 4.78125 19.4375 10 19.4375C15.2187 19.4375 19.4687 15.2188 19.4687 10C19.4687 4.78125 15.2187 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.9375 14.4375 1.9375 10C1.9375 5.5625 5.5625 1.9375 10 1.9375C14.4375 1.9375 18.0625 5.5625 18.0625 10C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2201_2315">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 -z-10 max-lg:hidden">
          <img
            src="https://cdn.tailgrids.com/2.2/assets/ai-components/images/hero/hero-06/shape-1.svg"
            alt="shape-1"
          />
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
          <img
            src="https://cdn.tailgrids.com/2.2/assets/ai-components/images/hero/hero-06/lines.svg"
            alt="lines shape"
          />
        </div>
        <div className="absolute bottom-0 right-0 -z-10 max-lg:hidden">
          <img
            src="https://cdn.tailgrids.com/2.2/assets/ai-components/images/hero/hero-06/shape-2.svg"
            alt="shape-2"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
