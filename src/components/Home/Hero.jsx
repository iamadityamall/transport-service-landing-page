import React from "react";

import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="h-screen lg:h-screen flex items-center justify-center">
      <div className="flex flex-col capitalize font-poppins space-y-2 py-10">
        <h3 className="text-4xl py-2 font-bold px-1">siddhi logistics</h3>
        <h2 className="text-[16px] text-colorTwo/75 px-1">
          your preferred logistics partner
        </h2>
        <p className="text-[15px] py-2 p-1 leading-relaxed">
          right from pickup from supplier's factory to delivery at buyer's. we
          provide all services under one roof. Regardless of your industry or
          commodity,we have solutions to both small and large businesses.
        </p>
        <div className="flex items-center space-x-5 p-1">
          <button
            className="text-white p-4 rounded-lg bg-colorOne font-semibold capitalize text-xs text-left tracking-widest
          "
          >
            get quotation
          </button>
          <div className="flex flex-row space-x-3 text-xl p-2">
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
        <figure className="hidden lg:flex"></figure>
      </div>
    </section>
  );
};

export default Hero;
