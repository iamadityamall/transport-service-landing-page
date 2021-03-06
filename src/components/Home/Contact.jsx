import React from "react";

const Contact = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      data-aos-once="true"
      id="contact"
      className="flex flex-col items-start font-poppins py-14 space-y-4 md:items-center md:space-y-20 lg:py-20 transition-all duration-150 ease-linear"
    >
      <div className="flex flex-col items-start md:items-center ">
        <h1 className="text-2xl font-bold capitalize py-4 lg:py-0 lg:text-4xl">
          contact us
        </h1>
        <p className="border-b-2 font-bold border-colorOne text-sm lg:text-lg lg:mt-10">
          send your query
        </p>
        <p className="py-2 text-xs lg:text-lg lg:py-0">
          Have any question? Feel free to get in touch with us at any time or
          directly visit our office
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4">
        <form
          className="text-black w-full space-y-2 p-3 rounded-xl bg-colorOne/25 lg:w-full transition-all duration-150 ease-linear"
          action="https://formsubmit.co/addasjii@gmail.com"
          method="POST"
        >
          <input
            type="text"
            placeholder="full name"
            name="name"
            className="p-2 rounded-t-xl w-full"
          />
          <input
            type="text"
            placeholder="email@email.com"
            name="email"
            className="p-2 w-full"
          />
          <input
            type="tel"
            placeholder="contact number"
            className="p-2 w-full"
            name="telephone"
          />
          <input type="text" placeholder="company" className="p-2 w-full" />
          <textarea
            name="query"
            id=""
            cols="30"
            rows="10"
            className="rounded-b-xl w-full"
          />
          <button className="p-2 bg-colorOne rounded-xl" type="submit">
            get quote
          </button>
        </form>
        <div className="p-2 w-full rounded-xl bg-colorOne/40 md:col-span-2 lg:h-full lg:col-span-3 transition-all duration-150 ease-linear">
          <iframe
            title="office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.175440722638!2d73.03357161529401!3d19.011989358920967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3abc6acf4d1%3A0xe4146edc9efa0501!2sSiddhi%20Vinayak%20Logistics%20LTD.!5e0!3m2!1sen!2sin!4v1652952561594!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64 md:h-full rounded-xl lg:h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
