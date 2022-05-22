import React from "react";
import { useRef } from "react";
// import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

const GalleryCard = ({ urls }) => {
  // const [show, setShow] = useState(false);
  const { small } = urls;
  const idContainer = useRef();

  console.log(idContainer);

  // const translateIdContainer = () => {
  //   if (show) {
  //     idContainer.current.style.transform = "translateY(0rem)";
  //     setShow(false);
  //   } else {
  //     idContainer.current.style.transform = "translateY(-7rem)";
  //     setShow(true);
  //   }
  // };

  // useEffect(() => {
  //   if (show) {
  //     setShow(true);
  //   }
  // }, [show]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     idContainer.current.style.transform = "translateY(2)";
  //   }, 3000);
  // }, [idContainer]);

  return (
    <figure
      className={`h-60 w-full relative  transition-all duration-300 ease-linear rounded-lg overflow-hidden cursor-pointer`}
    >
      <img
        src={small}
        alt="gallery"
        className="w-full h-full bg-black object-cover object-center lg:hover:scale-150 transition-all duration-200 ease-linear"
      />
      <div
        className={`transition-all duration-300 ease-linear rounded-lg overflow-hidden cursor-pointer absolute left-0 bottom-0 w-full py-4 px-2 bg-black/80 lg:bg-black/50   lg:hover:bg-black/90 translate-y-3/4 hover:translate-y-0`}
        ref={idContainer}
      >
        {" "}
        <div className="flex justify-between items-center">
          <p
            className="text-white font-bold font-poppins w-full"
            // onClick={() => translateIdContainer()}
          >
            car
          </p>
          {/* {show ? (
            <button
              className="text-white p-2"
              // onClick={() => translateIdContainer()}
            >
              <BiDownArrowAlt className="text-white text-2xl" />
            </button>
          ) : (
            <button
              className="text-white p-2"
              // onClick={() => translateIdContainer()}
            >
              <BiUpArrowAlt className="text-white text-2xl" />
            </button>
          )} */}
        </div>
        <p className="text-white py-5 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          illum quidem tempora exercitationem molestiae et ad totam harum
          asperiores animi?
        </p>
      </div>
    </figure>
  );
};

export default GalleryCard;
