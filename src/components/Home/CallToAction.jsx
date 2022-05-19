import React from "react";
import { FaRegMap } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImClock } from "react-icons/im";

const CallToAction = () => {
  return (
    <section className="flex flex-col py-12 space-y-4 font-poppins md:flex-row md:space-y-0 md:items-start md:justify-between md:space-x-4">
      <div className="flex justify-between items-center md:items-start">
        <div className="text-colorOne text-5xl p-2 md:text-2xl">
          <FaRegMap />
        </div>
        <div className="p-2 md:text-xs">
          <h1>ADDRESS</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="flex item-center md:items-start">
        <div className="text-colorOne text-5xl p-2 md:text-2xl">
          <BsFillTelephoneFill />
        </div>
        <div className="p-2 md:text-xs">
          <h1>Call</h1>
          <p>+919000000000</p>
        </div>
      </div>
      <div className="flex items-center md:items-start">
        <div className="text-colorOne text-5xl p-2 md:text-2xl">
          <GrMail />
        </div>
        <div className="p-2 md:text-xs">
          <h1>Send us message</h1>
          <p>email@email.com</p>
        </div>
      </div>
      <div className="flex items-center md:items-start">
        <div className="text-colorOne text-5xl p-2 md:text-2xl">
          <ImClock />
        </div>
        <div className="p-2 md:text-xs">
          <h1>Opening hours</h1>
          <p>9:00 am - 10:00 pm</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
