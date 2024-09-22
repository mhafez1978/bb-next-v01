import React from "react";

import Link from "next/link";

const Services = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Together Your Business Blooms
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Services
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                With cutting edge data driven websites and online marketing we
                help promote your brand to your targeted audience.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {ServiceData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              details={service.details}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ icon, title, details, link }) => {
  return (
    <div className="w-full px-4 sm:w-4/5 md:w-1/2 lg:w-1/3">
      <div className="group relative mb-8 rounded-xl border border-stroke bg-white p-10 text-center dark:border-dark-3 dark:bg-dark-2 md:px-8 lg:px-6 lg:py-9 xl:px-[43px] xl:py-[45px]">
        <div className="relative z-10 mx-auto mb-10 inline-flex h-11 items-center">
          <span className="absolute -right-3 top-0 z-[-1] h-[34px] w-[34px] rounded-full bg-primary opacity-10"></span>
          {icon}
        </div>
        <h4 className="mb-[14px] text-xl font-bold text-dark dark:text-white">
          {title}
        </h4>
        <p className="mb-4 text-body-color dark:text-dark-6 ">{details}</p>
        <Link href={`${link}`}>View Details</Link>
        <span className="absolute -bottom-2 left-0 right-0 z-[-1] mx-auto h-12 w-3/4 bg-primary opacity-0 blur-[12px] transition group-hover:opacity-[14%]"></span>
      </div>
    </div>
  );
};

const ServiceData = [
  {
    icon: "",
    title: "Web Design",
    details:
      "User-friendly websites with a customer-first approach to drive your business success.",
    link: "/web-design",
  },
  {
    icon: "",
    title: "Web Development",
    details:
      "Tailored web development focused on User experience and data analytics.",
    link: "/web-development",
  },
  {
    icon: "",
    title: "Search Engine Optimization",
    details:
      "We optimize your website for better rankings and search engines visibility, attract targeted traffic, and increase revenue.",
    link: "/seo",
  },
  {
    icon: "",
    title: "Online Marketing",
    details:
      "Customized online marketing strategies that drive traffic, build brand loyalty, and increase sales.",
    link: "/online-marketing",
  },
  {
    icon: "",
    title: "Pay Per Click Advertisment (PPC)",
    details:
      "Targeted PPC campaigns that drive traffic, increase conversions, and maximize your advertising ROI.",
    link: "/ppc",
  },
  {
    icon: "",
    title: "Social Media Marketing",
    details:
      "We grow your social media presence, building customer engagement, driving web traffic, and increasing brand visibility",
    link: "/smm",
  },
];
