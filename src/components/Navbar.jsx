import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import navLinks from "../data/navLinks";
import { useGlobalContext } from "../context";
import { useEffect } from "react";
import Sidebar from "./Home/Sidebar";
import QuickCallToAction from "./Home/QuickCallToAction";
import { MdDarkMode } from "react-icons/md";

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
      <header className="fixed top-0 w-full ">
        <QuickCallToAction />
        <nav className="font-poppins w-[90vw] mx-auto xl:w-[65vw]">
          <section className="flex justify-between items-center sm:text-2xl py-1 md:py-2 lg:py-6">
            <div className="">
              <img
                src={`${
                  darkmode
                    ? "./images/sddhi-ligh.png"
                    : "./images/siddhi-dark-1.png"
                }`}
                alt="logo"
                className="w-40"
              />
            </div>
            <div className="hidden lg:flex lg:space-x-2 capitalize lg:items-center">
              {navLinks.map((navlink) => {
                const { id } = navlink;
                return (
                  <a key={id} href={navlink.path} className="p-2 text-sm">
                    {navlink.name}
                  </a>
                );
              })}
            </div>
            <div className="hidden lg:flex space-x-6">
              <button
                className={`text-3xl text-colorOne   ${
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
            <button
              type="button"
              className="text-2xl p-3 lg:hidden"
              onClick={() => setNavButton(true)}
            >
              <GiHamburgerMenu />
            </button>
          </section>
        </nav>
      </header>
      <Sidebar setNavButton={setNavButton} navButton={navButton} />
    </>
  );
};

export default Navbar;
