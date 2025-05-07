import React from "react";
import ChipHeader from "./ChipHeader";

const CarouselCard = () => {
  return (
    <>
    {/*Dummy data TODO:  */}
      <div className=" lg:flex snap-x">
        
        <div className="w-50 md:w-70 lg:w-96 snap-center">
          <figure>
            <img
              src="https://www.billboard.com/wp-content/uploads/2024/06/Eminem-press-credit-Travis-Shinn-2024-billboard-1548.jpg"
              alt="Shoes"
            />
          </figure>
          <div>
            <h2 className="font-bold">
              Eminem - Matigas na T
            </h2>
            <p className="textarea-md text-neutral-500 font-semibold">
              Eminems - 1M views
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
