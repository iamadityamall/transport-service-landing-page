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
      className={`capitalize mx-auto ${
        darkmode ? "bg-colorOne/95" : "bg-colorOne"
      }`}
    >
      <section className="flex flex-col py-20 font-poppins space-y-6 w-[90vw] mx-auto">
        <div className="flex flex-col">
          <h1 className="font-bold text-lg p-2">siddhivinayak logistics</h1>
          <p className="p-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            explicabo dicta dignissimos et animi, repudiandae perspiciatis!
            Quam, recusandae explicabo adipisci maxime iure ab ea fugit?
          </p>
          <ul className="flex px-2 py-4 space-x-5">
            <li className="text-2xl">
              <BsInstagram />
            </li>
            <li className="text-2xl">
              <BsFacebook />
            </li>
            <li className="text-2xl">
              <BsLinkedin />
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 p-2">
          <h1 className="text-md font-bold">quick links</h1>
          <ul className="text-sm space-y-2">
            <li className="flex items-center space-x-2">
              <BsArrowRightShort />
              <a href="#about">about</a>
            </li>
            <li className="flex items-center space-x-2">
              <BsArrowRightShort />
              <a href="#about">services</a>
            </li>
            <li className="flex items-center space-x-2">
              <BsArrowRightShort />
              <a href="#about">contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 p-2">
          <h1 className="text-md font-bold">useful links</h1>
          <ul className="text-sm space-y-2">
            <li className="flex items-center space-x-2">
              <BsArrowRightShort />
              <Link to="privacy">privacy</Link>
            </li>
            <li className="flex items-center space-x-2">
              <BsArrowRightShort />
              <Link to="terms">{`terms & condition`}</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className={`shadow-sm`}>
        <p className="text-center italic font-poppins text-xs font-bold p-2">
          copywright &copy;siddhivinayak logistics{" "}
          <span>{`${new Date().getFullYear().toString()}`}</span> all right
          reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
