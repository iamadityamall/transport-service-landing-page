import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Contact from "../components/Home/Contact";
import Reviews from "../components/Home/Reviews";
import Questions from "../components/Home/Questions";
import CallToAction from "../components/Home/CallToAction";

const Home = () => {
  return (
    <main className="w-[90vw] mx-auto xl:w-[65vw]">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Reviews />
      <Questions />
      <CallToAction />
    </main>
  );
};

export default Home;
