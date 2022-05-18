import React from "react";

import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="h-screen w-full lg:h-screen flex items-center justify-center md:justify-between">
      <div className="flex flex-col capitalize font-poppins space-y-1 py-10 items-start md:w-[50vw]">
        <h3 className="text-4xl py-2 font-bold px-1 uppercase tracking-wide leading-snug">
          we keep your business moving
        </h3>
        <h4 className="text-[16px]  px-1">
          {`supply chain, transportation & logistics managment`}
        </h4>
        <p className="text-[15px] py-2 px-1 pt-6 leading-relaxed">
          we at{" "}
          <span className="border-b-2 border-colorOne">
            siddhivinayak logistics
          </span>{" "}
          provide solutions to both small and large businesses, regardless of
          your industry or commodity.
          {/* right from pickup from supplier's factory to delivery at buyer's. we
          provide all services under one roof. Regardless of your industry or
          commodity,we have solutions to both small and large businesses. */}
        </p>
        <div className="flex items-center space-x-5 p-1 pt-4">
          <button
            className="text-white p-4 rounded-lg bg-colorOne font-semibold capitalize text-xs text-left tracking-widest
          "
          >
            get quotation
          </button>
          <div className="flex flex-row space-x-3 text-xl p-2 ">
            <a href="https://instagram.com">
              <BsInstagram />
            </a>
            <a href="https://facebook.com">
              <BsFacebook />
            </a>
            <a href="https://linkedIn.com">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
      <figure className="hidden md:flex">
        <img src="./images/delivery.png" alt="logistics" className="w-[60vw]" />
      </figure>
    </section>
  );
};

export default Hero;
