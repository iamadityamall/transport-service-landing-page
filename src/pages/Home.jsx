import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Contact from "../components/Home/Contact";
import CallToAction from "../components/Home/CallToAction";
import Clients from "../components/Home/Clients";
import Banner from "../components/Home/Banner";
import Gallery from "../components/Home/Gallery";

const Home = () => {
  return (
    <main className="w-[90vw] mx-auto lg:w-[85vw] xl:w-[80vw] scroll-smooth transition-all duration-150 ease-linear">
      <Hero />
      <hr />
      <Clients id="clients"/>
      <hr />
      <Gallery />
      <hr />
      <About id="about"/>
      <hr />
      <Services id="services"/>
      <hr />
      <Contact id="contact"/>
      <hr />
      <Banner />
      <hr />
      <CallToAction />
    </main>
  );
};

export default Home;
