import React from "react";
import { BiConversation } from "react-icons/bi";

const Card = () => {
  return (
    <article className="w-full bg-colorOne/20 text-black p-4 rounded-xl space-y-3 font-poppinss">
      <figure>
        <img
          src="./images/delivery.png"
          alt="service-logo"
          className="rounded-xl bg-gray-300 h-40 w-full object-contain"
        />
      </figure>
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="p-2 text-colorOne text-2xl">
            <BiConversation />
          </div>
          <div className="p-2 font-bold font-poppins">service name</div>
        </div>
        <p className="p-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          nesciunt mollitia quae quod adipisci blanditiis earum officia corporis
          architecto quam.
        </p>
      </div>
      <div className="p-2">
        <button className="bg-colorOne p-2 rounded-xl">read more</button>
      </div>
    </article>
  );
};

export default Card;
