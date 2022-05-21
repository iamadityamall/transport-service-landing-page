import React from "react";
import { data } from "../../data/about";

const About = () => {
  return (
    <section
      id="about"
      className="font-poppins flex flex-col space-y-3 py-10 md:items-center md:space-y-10 transition-all duration-150 ease-linear"
    >
      <div>
        <h1 className="text-2xl py-4 font-bold capitalize md:text-2xl lg:text-4xl">
          about us
        </h1>
      </div>
      <div
        className="grid grid-cols-1 gap-y-4 md:gap-y-0 md:grid-cols-2"
      >
        <figure className="  rounded-xl overflow-hidden lg:h-full ">
          <img
            src="./images/delivery.png"
            alt="company-logo"
            className="h-full w-full bg-blue-300 object-cover object-center lg:h-full lg:w-full lg:rounded-xl"
          />
        </figure>
        <div
          className="flex flex-col justify-start items-start md:text-right md:items-end md:space-y-3 md:pl-8 lg:pl-10
        "
        >
          {data.map((item) => {
            return (
              <p
                key={item.id}
                className="py-2 leading-relaxed text-sm text-left md:py-0 md:text-left lg:text-lg font-poppins lg:text-justify"
              >
                {item.info}
              </p>
            );
          })}
          {/* <button className="bg-colorOne text-white p-2 rounded-lg mt-4 md:mt-0 lg:text-lg lg:p-3">
            read more
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default About;
