import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import navLinks from "../data/navLinks";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

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
    <header className=" p-2 rounded-b-xl lg:rounded-b-none fixed top-0 w-full bg-white/100 shadow-xl lg:shadow-none">
      <nav className="w-[85vw] mx-auto font-poppins">
        <section className="flex justify-between items-center sm:text-2xl p-1 lg:py-4 sm:p-3">
          <div className="text-xl p-1 xl:text-3xl text-colorOne">logo</div>
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
            onClick={() => setNavButton(!navButton)}
          >
            <GiHamburgerMenu />
          </button>
        </section>
        {navButton && (
          <aside className="flex flex-col text-right capitalize lg:hidden bg-white mt-5">
            {navLinks.map((navlink) => {
              const { id } = navlink;
              return (
                <Link
                  key={id}
                  to={navlink.path}
                  className="p-4 sm:text-lg"
                  onClick={() => setNavButton(false)}
                >
                  {navlink.name}
                </Link>
              );
            })}
          </aside>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
