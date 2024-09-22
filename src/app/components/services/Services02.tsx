import Link from "next/link";

const Services = () => {
  type ServiceDataProps = {
    link: string;
    image: string;
    title: string;
    details: string;
    button: string;
  };

  const ServicesData: ServiceDataProps[] = [
    {
      link: "/boston/web-design-and-development",
      image:
        "https://img.freepik.com/free-photo/it-specialist-checking-code-computer-dark-office-night_1098-18699.jpg",
      title: "Web Design & Development",
      details:
        "At Blooming Brands, we craft SEO-optimized, user-friendly websites with a customer-first approach to drive your business success.",
      button: "View Details",
    },
    {
      link: "/boston/search-engine-optimization",
      image:
        "https://img.freepik.com/free-photo/map-lying-wooden-table_53876-65112.jpg",
      title: "Search Engine Optimization (SEO)",
      details:
        "We optimize your website for search engines to boost visibility and to more attract targeted traffic.",
      button: "View Details",
    },
    {
      link: "/boston/online-marketing",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Digital-Marketing.jpg",
      title: "Online Marketing",
      details:
        "Get data-driven, customized online marketing strategies that drive traffic, build brand loyalty, and increase sales.",
      button: "View Details",
    },
    {
      link: "/boston/content-creation-and-marketing",
      image:
        "https://www.benchmarkemail.com/wp-content/uploads/2023/01/ContentCreation-scaled-e.jpg",
      title: "Content Creation and Marketing",
      details:
        "Our team will create engaging, high-quality content that builds brand authority, drives traffic, and boosts conversions.",
      button: "View Details",
    },
    {
      link: "/boston/pay-per-click-advertisement",
      image:
        "https://www.spinxdigital.com/app/uploads/2016/09/Identity-Based-PPC-Marketing-What-It-Is-and-Why-It-is-Important-1.jpg",
      title: "Pay-Per-Click (PPC) Advertising",
      details:
        "Experience our targeted PPC campaigns that drive traffic, increase conversions, and maximize your advertising ROI.",
      button: "View Details",
    },
    {
      link: "/boston/social-media-management-service",
      image:
        "https://tlc-texas.com/wp-content/uploads/2023/08/social-media-tips-blog-header-no-logo.png",
      title: "Social Media Management",
      details:
        "Let's manage and grow your social media presence, building engagement, driving traffic, and increasing brand visibility.",
      button: "View Details",
    },
  ];

  return (
    <section className="bg-[#090E34] pb-12 pt-20 dark:bg-dark lg:pb-[200px] lg:pt-[160px]">
      <div className="container mx-auto">
        <div className="-mx-4 mb-10 flex flex-wrap items-end lg:mb-[70px]">
          <div className="w-full px-4 lg:w-8/12">
            <div className="mb-5 max-w-[625px]">
              <span className="mb-2 block text-2xl font-semibold text-white">
                Our Services
              </span>
              <h2 className="text-4xl font-bold leading-[1.2] text-white sm:text-4xl md:text-[40px]">
                Are Geared To Help <br />
                Promote Your Business Growth.
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-8">
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4">
            {ServicesData.map((service, index) => (
              <Link key={index} href={service.link}>
                <ServiceCard
                  key={index}
                  link={service.link}
                  image={service.image}
                  title={service.title}
                  details={service.details}
                  button={service.button}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

type ServiceCardProps = {
  link: string;
  title: string;
  image: string;
  button: string;
  details: string;
};

const ServiceCard = ({
  link,
  image,
  button,
  title,
  details,
}: ServiceCardProps) => {
  return (
    <div className="w-[355px] md:min-w-[300px] md:gap-1 lg:min-w-[450px]">
      <div className="bg-white dark:bg-dark-2 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        <img src={image} alt="service" className="w-full h-64 object-cover" />

        <div className="p-8 flex-1 flex flex-col">
          <h3 className="mb-4">{title}</h3>
          <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6 flex-1">
            {details}
          </p>
          <Link href={link} className="w-full flex flex-row items-center gap-2">
            {button}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path
                d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                fill=""
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
