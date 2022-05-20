import React from "react";
import { dataImages } from "../../data/images";

const ClientImageCarousal = ({ id, image, index }) => {
  

  let position = "translate-x-full"

  if (id === index) {
    position = "translate-x-0";
  }
  if (id === index - 1 || (index === 0 && id === dataImages.length - 1)){
      position = "-translate-x-full"
  }

  return (
    <img
      src={image}
      alt="logo"
      className={`w-24 h-full absolute ${position} transition-all delay-100  ease-in-out rounded-lg object-cover`}
    />
  );
};

export default ClientImageCarousal;
