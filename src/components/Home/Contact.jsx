import React from "react";

const Contact = () => {
  return (
    <section
      id="#contact"
      className="flex flex-col items-start font-poppins py-14 md:items-center lg:py-20"
    >
      <div className="flex flex-col items-start space-y-2 md:items-center">
        <h1 className="text-2xl font-bold capitalize py-4 lg:py-0 lg:text-4xl">
          contact us
        </h1>
        <p className="border-b-2 font-bold border-colorOne text-sm lg:text-lg">
          send your query
        </p>
        <p className="py-2 text-xs lg:text-lg lg:py-0">
          Have any question? Feel free to get in touch with us at any time or
          directly visit our office
        </p>
      </div>
      <div className="flex flex-col space-y-10 md:flex-row md:justify-between md:space-y-0 md:items-start md:mt-10 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap- lg:py-16">
        <div className="flex flex-col py-10 items-start md:py-0 w-full lg:grid lg:w-[30vw] ">
          <form className="text-black flex flex-col space-y-2 p-3 rounded-xl bg-colorOne/25">
            <input
              type="text"
              placeholder="full name"
              className="p-2 rounded-t-xl"
            />
            <input type="text" placeholder="email@email.com" className="p-2" />
            <input type="tel" placeholder="contact number" className="p-2" />
            <input type="text" placeholder="company" className="p-2 " />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="rounded-b-xl"
            />
            <button className="p-2 bg-colorOne rounded-xl">get quote</button>
          </form>
        </div>
        <div className="p-2 rounded-xl bg-colorOne/40 lg:w-[40vw] lg:h-full">
          <iframe
            title="office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.175440722638!2d73.03357161529401!3d19.011989358920967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3abc6acf4d1%3A0xe4146edc9efa0501!2sSiddhi%20Vinayak%20Logistics%20LTD.!5e0!3m2!1sen!2sin!4v1652952561594!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-60 rounded-xl lg:h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
