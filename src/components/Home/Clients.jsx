import React from "react";
import ClientImageCarousal from "./ClientImageCarousal";

import { dataImages } from "../../data/images";

const Clients = () => {
  const [images,] = React.useState(dataImages);
  const [index1, setIndex1] = React.useState(4);

  // const nextSlide = () => {
  //   setIndex1((prev) => {
  //     let index = prev + 1;
  //     if (index > images.length - 1) {
  //       index = 0;
  //     }
  //     return index;
  //   });
  // };

  // const prevSlide = () => {
  //   setIndex1((prev) => {
  //     let index = prev - 1;
  //     if (index < 0) {
  //       index = images.length - 1;
  //     }
  //     return index;
  //   });
  // };

  // React.useEffect(() => {
  //   const lastIndex = images.length - 1;
  //   if (index1 < 0) {
  //     setIndex1(lastIndex);
  //   }
  //   if (index1 > lastIndex) {
  //     setIndex1(0);
  //   }
  // }, [index1, images]);

  React.useEffect(() => {
    const slider = setInterval(() => {
      setIndex1((prev) => {
        let index = prev + 1;
        if (index > images.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index1, images]);

  return (
    <section className="grid grid-cols-1 justify-items-center w-full gap-y-5 py-10">
      <div>
        <h1 className="text-2xl font-bold">Our Clients</h1>
        <span className="text-sm border-b-2 border-colorOne">
          We have built our client base with years of trust. Here are some of
          our most valuble clients.
        </span>
      </div>
      <div className="h-32 w-full relative flex justify-center ">
        {images.map((item, index) => {
          return (
            <ClientImageCarousal
              key={index}
              {...item}
              index={index1}
            ></ClientImageCarousal>
          );
        })}
      </div>
      {/* <div>
        <button className="p-2" onClick={() => prevSlide()}>
          prev
        </button>
        <button className="p-2" onClick={() => nextSlide()}>
          next
        </button>
      </div> */}
    </section>
  );
};

export default Clients;
