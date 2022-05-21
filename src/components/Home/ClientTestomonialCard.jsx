import React from "react";
import { useGlobalContext } from "../../context";

const ClientTestomonialCard = () => {
  const { darkmode } = useGlobalContext();
  return (
    <figure className={`flex rounded-lg overflow-hidden ${darkmode ? 'bg-colorOne/30': 'bg-colorOne/50'} transition-all ease-linear duration-100 shadow-lg `}>
      <img
        src="./images/person-icon.png"
        alt="client"
        className="h-20 w-20 object-cover bg-red-400 md:h-full md:w-28"
      />
      <div className="col-span-2 p-4 space-y-4">
        <blockquote>
          <p className="text-xs">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            minus quis, saepe porro at optio eaque cum aut, molestiae quos ad
            autem distinctiovitae?"
          </p>
        </blockquote>
        <figcaption className="text-xs">
          <div className="font-bold">name</div>
          <div>occupation, company name</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default ClientTestomonialCard;
