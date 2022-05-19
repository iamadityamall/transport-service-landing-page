import React from "react";
import { data } from "../../data/about";

const About = () => {
  return (
    <section
      id="about"
      className="font-poppins flex flex-col space-y-3 py-10 md:items-center md:py-10 md:space-y-20"
    >
      <div>
        <h1 className="text-2xl py-4 font-bold capitalize md:text-4xl">about us</h1>
      </div>
      <div className="flex flex-col space-y-5 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-5
      ">
        <figure className=" bg-blue-300 rounded-xl overflow-hidden">
          <img src="./images/delivery.png" alt="company-logo" className="h-[30vh] w-[100vw] object-cover"/>
        </figure>
        <div className="flex flex-col md:space-y-1 md:text-right md:items-end
        ">
          {data.map((item) => {
            return (
              <p key={item.id} className="py-2 leading-relaxed text-sm md:py-2 text-left">
                {item.info}
              </p>
            );
          })}
          <button className="bg-colorOne text-white p-2 rounded-lg mt-4 md:mt-0 md:w-32">
            read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
