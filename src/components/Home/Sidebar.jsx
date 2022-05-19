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
      className={`fixed text-black top-0 right-0 h-screen space-y-20 w-screen p-4 transition all delay-300 ease-in-out flex flex-col items-end text-right capitalize lg:hidden bg-white ${
        !navButton && "translate-x-full"
      } ${!darkmode && "bg-colorTwo text-white"}
      }`}
    >
      <button onClick={() => setNavButton(false)} className="mt-2">
        <IoClose className="text-5xl p-2 text-colorOne" />
      </button>
      <div className="flex flex-col w-full items-end">
        <button className="text-sm p-4 bg-colorOne rounded-lg">sign in</button>
        {navLinks.map((navlink) => {
          const { id } = navlink;
          return (
            <Link
              key={id}
              to={navlink.path}
              className="p-4 px-6 sm:text-lg font-poppins"
              onClick={() => setNavButton(false)}
            >
              {navlink.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
