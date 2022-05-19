import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Contact from "../components/Home/Contact";
// import Reviews from "../components/Home/Reviews";
// import Questions from "../components/Home/Questions";
import CallToAction from "../components/Home/CallToAction";
import Clients from "../components/Home/Clients";

const Home = () => {
  return (
    <main className="w-[90vw] mx-auto lg:w-[85vw] scroll-smooth">
      <Hero />
      <hr/>
      <About />
      <hr/>
      <Services />
      <hr />
      <Contact />

      {/* <hr/> */}
      {/* <Reviews />
      <hr/>
      <Questions /> */}
      <hr/>
      <Clients/>
      <hr/>
      <CallToAction />
      <hr/>
    </main>
  );
};

export default Home;
