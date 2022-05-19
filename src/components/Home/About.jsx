import React from "react";
import { data } from "../../data/about";

const About = () => {
  return (
    <section
      id="about"
      className="font-poppins flex flex-col space-y-3 py-10 md:items-center md:py-10 md:space-y-10 lg:h-screen lg:justify-center"
    >
      <div>
        <h1 className="text-2xl py-4 font-bold capitalize md:text-2xl lg:text-4xl">about us</h1>
      </div>
      <div className="flex flex-col space-y-5 md:flex-row md:items-start md:justify-between md:space-y-0 md:space-x-5 lg:grid lg:grid-cols-2 lg:md:space-x-0 lg:gap-x-2 lg:items-center
      ">
        <figure className=" bg-blue-300 rounded-xl overflow-hidden lg:h-full">
          <img src="./images/delivery.png" alt="company-logo" className="h-[30vh] w-[100vw] object-cover lg:h-full"/>
        </figure>
        <div className="flex flex-col md:text-right md:items-end md:space-y-3 lg:p-10
        ">
          {data.map((item) => {
            return (
              <p key={item.id} className="py-2 leading-relaxed text-sm text-left md:py-0 md:text-right lg:text-lg font-poppins lg:text-left" >
                {item.info}
              </p>
            );
          })}
          <button className="bg-colorOne text-white p-2 rounded-lg mt-4 md:mt-0 lg:text-lg lg:p-3">
            read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
