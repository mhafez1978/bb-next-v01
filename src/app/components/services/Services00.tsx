import Link from "next/link";
import React from "react";
import { MdDoubleArrow } from "react-icons/md";

const Card = () => {
  const ServicesData = [
    {
      image:
        "https://madmindstudios.com/wp-content/uploads/2023/11/Marketing-losangeles.png",
      CardTitle: "Online Marketing",
      titleHref: "/online-marketing",
      CardDescription:
        "Your business requires well-defined marketing objectives, attainable through a dynamic and strategic approach. We are fully committed to assisting your business in achieving its goals.",
      LinkText: "Get More Leads",
      LinkHref: "/online-marketing",
    },
    {
      image:
        "https://madmindstudios.com/wp-content/uploads/2023/11/SEO-Losangeles.png",
      CardTitle: "Search Engine Optimization",
      titleHref: "/search-engine-optimization",
      CardDescription:
        "Boost your online visibility with expert SEO (Search Engine Optimization) services. Our team specializes in optimizing your digital presence, ensuring you rank higher and attract more valuable traffic",
      LinkText: "Rank Higher in Search Engines",
      LinkHref: "/search-engine-optimization",
    },
    {
      image:
        "https://madmindstudios.com/wp-content/uploads/2023/11/web-design-agency-losangeles.png",
      CardTitle: "Web Design",
      titleHref: "/website-design-and-development",
      CardDescription:
        "Captivate customers with a mobile-friendly informative web design that sets your business apart. We specialize in crafting professional web designs for small and medium-sized businesses.",
      LinkText: "Get Found online",
      LinkHref: "/website-design-and-development",
    },
    {
      image:
        "https://madmindstudios.com/wp-content/uploads/2023/11/Content-marketing-losangeles.png",
      CardTitle: "Content Marketing",
      titleHref: "/content-marketing",
      CardDescription:
        "Ignite your brand with effective content marketing strategies. Our team excels at creating compelling, value-driven content that engages your audience and drives business growth.",
      LinkText: "Boost Your Engagement",
      LinkHref: "/content-marketing",
    },
    {
      image:
        "https://madmindstudios.com/wp-content/uploads/2023/11/Branding-losangeles.png",
      CardTitle: "Branding & Logo Design",
      titleHref: "/business-branding",
      CardDescription:
        "Elevate your brand with expert logo design and branding solutions. Our team is dedicated to crafting impactful visual identities that resonate with your audience and leave a lasting impression.",
      LinkText: "Your Brand Re-Invisioned",
      LinkHref: "/business-branding",
    },
    {
      image:
        "https://madmindstudios.com/wp-content/uploads/2023/11/losangeles-website-maintenance.png",
      CardTitle: "Website Maintenance",
      titleHref: "/website-support",
      CardDescription:
        "Safeguard your business/company website’s performance with our top-notch maintenance services. We keep your online presence secure and up-to-date, so you can focus on your business.",
      LinkText: "Stay Lean & Agile",
      LinkHref: "/website-support",
    },
  ];

  return (
    <section className="bg-gray-2 py-32 dark:bg-dark lg:pb-20 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-black text-red-600 mb-10">
            Our Expertise
          </h2>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center gap-y-6">
          {ServicesData.map((service, index) => (
            <SingleCard
              key={index}
              image={service.image}
              CardTitle={service.CardTitle}
              titleHref={service.titleHref}
              CardDescription={service.CardDescription}
              LinkText={service.LinkText}
              LinkHref={service.LinkHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
type cardProps = {
  image: string;
  CardDescription: string;
  CardTitle: string;
  titleHref: string;
  LinkText: string;
  LinkHref: string;
};

const SingleCard = ({
  image,
  CardDescription,
  CardTitle,
  titleHref,
  LinkText,
  LinkHref,
}: cardProps) => {
  return (
    <div className="w-[450px] min-h-[280px] px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-8 h-full rounded-lg bg-white p-4 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card flex flex-col">
        <div className="mb-6 w-full overflow-hidden rounded-md">
          <img src={image} alt="card image" />
        </div>
        <div className="flex-grow px-[10px]">
          <h3>
            <a
              href={titleHref}
              className="mb-3 inline-block text-lg font-semibold text-dark hover:text-red-600 dark:text-white sm:text-xl lg:text-lg xl:text-xl"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base text-black">{CardDescription}</p>
        </div>
        <div className="pt-4">
          <Link
            href={LinkHref}
            className="flex flex-row gap-2 items-center hover:text-red-600"
          >
            {LinkText} <MdDoubleArrow />
          </Link>
        </div>
      </div>
    </div>
  );
};
