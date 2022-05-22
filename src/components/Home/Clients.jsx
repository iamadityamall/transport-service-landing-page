import React from "react";
import ClientLogo from "./ClientLogo";

import { dataImages } from "../../data/images";
import ClientTestomonialCard from "./ClientTestomonialCard";

const Clients = () => {
  const [images] = React.useState(dataImages);
  const [index1, setIndex1] = React.useState(4);

  React.useEffect(() => {
    const slider = setInterval(() => {
      setIndex1((prev) => {
        let index = prev + 1;
        if (index > images.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index1, images]);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-easing="ease-in"
      id="clients"
      className="grid grid-cols-1 justify-items-start gap-y-10 py-16 md:justify-items-center lg:grid-cols-2 lg:items-center lg:justify-items-center transition-all duration-150 ease-linear"
    >
      <div className="lg:flex flex-col space-y-2">
        <h1 className="text-2xl font-bold md:text-center lg:text-4xl lg:text-left">
          Our Clients
        </h1>
        <p className="lg:w-3/4">
          <span className="text-sm border-b-2 border-colorOne lg:text-lg">
            We have built our client base with years of trust. Here are some of
            our most valuble clients.
          </span>
        </p>
      </div>
      <div className="w-full lg:mr-10">
        <ClientLogo />
      </div>
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 lg:col-span-2 lg:py-10">
        <ClientTestomonialCard />
        <ClientTestomonialCard />
        <ClientTestomonialCard />
      </div>
    </section>
  );
};

export default Clients;
