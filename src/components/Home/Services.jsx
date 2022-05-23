import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <section
      
      id="services"
      className="py-20 flex flex-col space-y-10 font-poppins items-start md:items-center transition-all duration-150 ease-linear lg:h-screen justify-center"
    >
      <div className="md:flex md:flex-col md:items-center">
        <h1 className="text-2xl py-4 font-bold tracking-wide capitalize lg:text-4xl">
          our services
        </h1>
        <p className="text-xs font-semibold border-b-2 border-colorOne lg:text-lg">
          state-of-art all in one logistics solution
        </p>
      </div>
      <div className="flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <p className="text-xs text-center font-semibold lg:text-sm">
        visit and experience many more services with best customer experience
      </p>
    </section>
  );
};

export default Services;
