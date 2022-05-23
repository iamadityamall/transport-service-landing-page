import React from "react";
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsArrowRightShort,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Footer = () => {
  const { darkmode } = useGlobalContext();
  return (
    <footer
      className={`capitalize mx-auto transition-all duration-150 ease-linear ${
        darkmode ? "bg-colorOne/95" : "bg-colorOne"
      }`}
    >
      <section className="flex flex-col py-10 font-poppins space-y-6 w-[90vw] mx-auto md:flex-row md:justify-between md:items-start md:space-y-0 lg:w-[85vw] lg:py-10">
        <div className="flex flex-col  lg:w-[40vw]">
          <h1 className="font-bold text-lg p-2 lg:text-2xl">
            siddhivinayak logistics
          </h1>
          <p className="p-2 text-sm lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            explicabo dicta dignissimos et animi, repudiandae perspiciatis!
            Quam, recusandae explicabo adipisci maxime iure ab ea fugit?
          </p>
          <ul className="flex px-2 py-4 space-x-5">
            <li className="text-3xl cursor-pointer md:hover:text-white">
              <BsInstagram />
            </li>
            <li className="text-3xl cursor-pointer md:hover:text-white">
              <BsFacebook />
            </li>
            <li className="text-3xl cursor-pointer md:hover:text-white">
              <BsLinkedin />
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 p-2">
          <h1 className="text-md font-bold lg:text-xl px-4">quick links</h1>
          <ul className="text-sm space-y-2 lg:text-lg">
            <li className="flex items-center space-x-2 md:hover:border-b-2 md:hover:border-white">
              <BsArrowRightShort />
              <a href="#about">about</a>
            </li>
            <li className="flex items-center space-x-2 md:hover:border-b-2 md:hover:border-white">
              <BsArrowRightShort />
              <a href="#about">services</a>
            </li>
            <li className="flex items-center space-x-2 md:hover:border-b-2 md:hover:border-white">
              <BsArrowRightShort />
              <a href="#about">contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 p-2 transition-all duration-150 ease-linear">
          <h1 className="text-md font-bold lg:text-xl">useful links</h1>
          <ul className="text-sm space-y-2 lg:text-lg">
            <li className="flex items-center space-x-2 md:hover:border-b-2 md:hover:border-white transition-all duration-150 ease-linear">
              <BsArrowRightShort />
              <Link to="/privacy">privacy</Link>
            </li>
            <li className="flex items-center space-x-2 md:hover:border-b-2 md:hover:border-white transition-all duration-150 ease-linear">
              <BsArrowRightShort />
              <Link to="/terms">{`terms & condition`}</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className={`shadow-sm transition-all duration-150 ease-linear`}>
        <p className="text-center italic font-poppins text-xs font-bold p-4">
          copyright &copy; siddhivinayak logistics{" "}
          <span>{`${new Date().getFullYear().toString()}`}</span> all right
          reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
