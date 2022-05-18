import React from "react";
import navLinks from "../../data/navLinks";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const Sidebar = ({ setNavButton, navButton }) => {
  return (
    <aside
      className={`fixed top-0 right-0 h-screen space-y-28 w-screen p-4 transition all delay-300 ease-in-out flex flex-col items-end text-right capitalize lg:hidden bg-white ${
        !navButton && "translate-x-full"
      }
      }`}
    >
      <button onClick={() => setNavButton(false)} className="mt-2">
        <IoClose className="text-5xl p-2 text-colorOne" />
      </button>
      <div className="flex flex-col w-full">
        {navLinks.map((navlink) => {
          const { id } = navlink;
          return (
            <Link
              key={id}
              to={navlink.path}
              className="p-4 sm:text-lg font-poppins"
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
