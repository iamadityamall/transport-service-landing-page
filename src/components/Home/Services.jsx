import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <section
      id="services"
      className="md:h-screen py-20 flex flex-col space-y-10 font-poppins items-start"
    >
      <div>
        <h1 className="text-2xl py-4 font-bold tracking-wide capitalize">
          our services
        </h1>
        <p className="text-xs font-semibold border-b-2 border-colorOne">
          state-of-art all in one logistics solution
        </p>
      </div>
      <div className="flex flex-col space-y-6">
        <Card />
        <Card />
        <Card />
      </div>
      <p className="text-xs text-center font-semibold">
        vist and experience many more services with best customer experience
      </p>
    </section>
  );
};

export default Services;
