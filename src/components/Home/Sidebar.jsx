import React from "react";
import navLinks from "../../data/navLinks";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../../context";
// import {MdDarkMode} from 'react-icons/md'

const Sidebar = ({ setNavButton, navButton }) => {
  const { darkmode } = useGlobalContext();
  return (
    <aside
      className={`fixed z-30 text-black top-0 right-0 h-screen space-y-20 w-screen p-8 transition all delay-300 ease-in-out flex flex-col items-end text-right capitalize lg:hidden   ${
        !navButton && "translate-x-full"
      } ${!darkmode ? "bg-colorTwo text-white" : "bg-white"}`}
    >
      <button
        onClick={() => setNavButton(false)}
        className="mt-3 transition-all duration-150 ease-linear"
      >
        <IoClose className="text-5xl p-2 text-colorOne" />
      </button>
      <div className="flex flex-col w-full text-left transition-all duration-150 ease-linear">
        {navLinks.map((navlink) => {
          const { id } = navlink;
          return (
            <Link
              key={id}
              to={navlink.path}
              className="p-4 px-6 sm:text-lg font-poppins border-b-2 border-gray-50"
              onClick={() => setNavButton(false)}
            >
              {navlink.name}
            </Link>
          );
        })}
        <Link to="/signin" className="p-4 px-6 sm:text-lg font-poppins">
          sign in
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
