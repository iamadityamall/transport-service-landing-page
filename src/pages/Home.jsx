import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Contact from "../components/Home/Contact";
import CallToAction from "../components/Home/CallToAction";
import Clients from "../components/Home/Clients";
import Banner from "../components/Home/Banner";
import Gallery from "../components/Home/Gallery";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[]);

  return (
    <main className="w-[90vw] mx-auto lg:w-[85vw] xl:w-[75vw]  transition-all duration-150 ease-linear">
      <Hero />
      <hr />
      <About />
      <hr />
      <Services />
      <hr />
      <Clients />
      <hr />
      <Gallery />
      <hr />
      <Banner />
      <hr />
      <Contact />
      <hr />
      <CallToAction />
    </main>
  );
};

export default Home;
