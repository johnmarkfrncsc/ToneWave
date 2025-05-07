import React from "react";
import ChipHeader from "./ChipHeader";

const CarouselCard = () => {
  return (
    <>
    {/*Dummy data TODO:  */}
      <div className=" lg:flex snap-x">
        
        <div className="card bg-base-100 shadow-sm w-50 md:w-70 lg:w-96 snap-center">
          <figure>
            <img
              src="https://www.billboard.com/wp-content/uploads/2024/06/Eminem-press-credit-Travis-Shinn-2024-billboard-1548.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-transparent">
            <h2 className="card">Content Title Here</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
