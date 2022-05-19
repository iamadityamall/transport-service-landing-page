import React from "react";
import { data } from "../../data/about";

const About = () => {
  return (
    <section
      id="about"
      className="font-poppins flex flex-col space-y-3 py-10 md:items-center md:py-10 md:space-y-10"
    >
      <div>
        <h1 className="text-2xl py-4 font-bold capitalize md:text-2xl">about us</h1>
      </div>
      <div className="flex flex-col space-y-5 md:flex-row md:items-start md:justify-between md:space-y-0 md:space-x-5
      ">
        <figure className=" bg-blue-300 rounded-xl overflow-hidden">
          <img src="./images/delivery.png" alt="company-logo" className="h-[30vh] w-[100vw] object-cover"/>
        </figure>
        <div className="flex flex-col md:text-right md:items-end md:space-y-3
        ">
          {data.map((item) => {
            return (
              <p key={item.id} className="py-2 leading-relaxed text-sm text-left md:py-0 md:text-right">
                {item.info}
              </p>
            );
          })}
          <button className="bg-colorOne text-white p-2 rounded-lg mt-4 md:mt-0">
            read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
