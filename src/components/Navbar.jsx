import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import navLinks from "../data/navLinks";
import { useGlobalContext } from "../context";
import { useEffect } from "react";
import Sidebar from "./Home/Sidebar";
import QuickCallToAction from "./Home/QuickCallToAction";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";

const Navbar = () => {
  const { navButton, setNavButton, darkmode, changemode } = useGlobalContext();

  useEffect(() => {
    if (navButton) {
      var timeout = setTimeout(() => {
        setNavButton(false);
      }, 7000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [navButton, setNavButton]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-10 shadow-sm lg:shadow-none ${
          !darkmode ? "bg-colorTwo " : "bg-colorThree"
        }`}
      >
        <QuickCallToAction />
        <nav className="font-poppins w-[90vw] mx-auto lg:w-[85vw] ">
          <section className="flex justify-between items-center sm:text-2xl py-3 md:py-4 lg:py-6">
            <div className="">
              <img
                src={`${
                  darkmode
                    ? "./images/siddhi-light-2.png"
                    : "./images/siddhi-dark-2.png"
                }`}
                alt="logo"
                className="h-10 md:h-12 object-cover"
              />
            </div>
            <div className="hidden lg:flex lg:space-x-2 capitalize lg:items-center">
              {navLinks.map((navlink) => {
                const { id } = navlink;
                return (
                  <a
                    key={id}
                    href={navlink.path}
                    className="p-2 text-sm hover:border-b-2 hover:border-colorOne "
                  >
                    {navlink.name}
                  </a>
                );
              })}
            </div>
            <div className="hidden lg:flex space-x-6">
              <button
                className={`text-xl text-colorOne   ${
                  darkmode && "text-black"
                }`}
                onClick={() => changemode()}
              >
                <MdDarkMode />
              </button>
              <button className="text-sm p-4 bg-colorOne rounded-lg">
                sign in
              </button>
            </div>
            <div className="flex items-center lg:hidden">
              <button
                className={`text-3xl p-1 text-colorOne lg:hidden  ${
                  darkmode && "text-black"
                }`}
                onClick={() => changemode()}
              >
                {!darkmode ? <BsSunFill /> : <MdDarkMode />}
              </button>
              <button
                type="button"
                className="text-2xl p-3"
                onClick={() => setNavButton(true)}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </section>
        </nav>
      </header>
      <Sidebar setNavButton={setNavButton} navButton={navButton} />
    </>
  );
};

export default Navbar;
