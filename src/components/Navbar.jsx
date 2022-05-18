import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import navLinks from "../data/navLinks";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useEffect } from "react";
import Sidebar from "./Home/Sidebar";

const Navbar = () => {
  const { navButton, setNavButton } = useGlobalContext();
  useEffect(() => {
    if (navButton) {
      var timeout = setTimeout(() => {
        setNavButton(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [navButton, setNavButton]);

  return (
    <>
      <header className=" p-2 lg:rounded-b-none fixed top-0 w-full bg-white/100 ">
        <nav className="font-poppins">
          <section className="flex justify-between items-center sm:text-2xl p-1 lg:py-4 sm:p-3">
            <div className="text-2xl p-1 xl:text-3xl text-colorOne">logo</div>
            <div className="hidden lg:flex lg:space-x-4 capitalize lg:items-center">
              {navLinks.map((navlink) => {
                const { id } = navlink;
                return (
                  <Link key={id} to={navlink.path} className="p-2 text-sm">
                    {navlink.name}
                  </Link>
                );
              })}
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
