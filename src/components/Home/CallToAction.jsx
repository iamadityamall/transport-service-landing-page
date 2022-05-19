import React from "react";
import { FaRegMap } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImClock } from "react-icons/im";

const CallToAction = () => {
  return (
    <section className="flex flex-col py-20 space-y-4 font-poppins">
      <div className="flex justify-between items-center">
        <div className="text-colorOne text-5xl p-2">
          <FaRegMap />
        </div>
        <div className="p-2">
          <h1>Address</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-colorOne text-5xl p-2">
          <BsFillTelephoneFill />
        </div>
        <div className="p-2">
          <h1>Call</h1>
          <p>+919000000000</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-colorOne text-5xl p-2">
          <GrMail />
        </div>
        <div className="p-2">
          <h1>Send us message</h1>
          <p>email@email.com</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-colorOne text-5xl p-2">
          <ImClock />
        </div>
        <div className="p-2">
          <h1>Opening hours</h1>
          <p>9:00 am - 10:00 pm</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
