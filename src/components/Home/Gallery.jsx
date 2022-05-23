import React from "react";
import GalleryCard from "./GalleryCard";
// import { useGlobalContext } from "../../context";

const url =
  "https://api.unsplash.com/photos/?client_id=K7FLZk5iM4af36dEPrYmjLJAKzdRG09_NYE5uvn3KnI";

const Gallery = () => {
  const [images, setImages] = React.useState([]);

  const fetchImages = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setImages(data);
  };

  React.useEffect(() => {
    fetchImages();
  }, []);

  return (
    <section
      id="gallery"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      data-aos-once="true"
      className="flex flex-col py-20 md:items-center transition-all duration-200 ease-linear "
    >
      <div className="font-poppins text-left space-y-2 transition-all duration-200 ease-linear md:text-center">
        <h1 className="text-2xl font-bold lg:text-4xl">Gallery</h1>
        <p className="text-xs lg:text-lg ">
          <span className="border-b-2 border-colorOne leading-relaxed transition-all duration-200 ease-linear">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis!
          </span>
        </p>
      </div>
      <div className="py-14 transition-all duration-150 ease-linear grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-3 lg:grid-cols-4 lg:gap-2">
        {images.map((item, index) => {
          const { id, urls } = item;
          return <GalleryCard key={id} urls={urls} />;
        })}
      </div>
    </section>
  );
};

export default Gallery;
