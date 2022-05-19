import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

const QuickCallToAction = () => {
  return (
    <div className="w-full hidden md:flex border-b-[1px] border-colorTwo ">
      <div className="flex justify-between items-center w-[90vw] mx-auto py-3 text-[14px] font-poppins  lg:w-[85vw]">
        <div className="flex items-center space-x-5">
          <div className="flex items-center justify-center space-x-2">
            <div>
              <MdEmail className="text-lg" />
            </div>
            <p>email@email.com</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div>
              <IoCallSharp className="text-lg" />
            </div>
            <p>900-00000-00</p>
          </div>
        </div>
        <div className="flex flex-row space-x-5 text-xl p-2">
          <a href="https://instagram.com">
            <BsInstagram className="text-lg" />
          </a>
          <a href="https://facebook.com">
            <BsFacebook className="text-lg" />
          </a>
          <a href="https://linkedIn.com">
            <BsLinkedin className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickCallToAction;
