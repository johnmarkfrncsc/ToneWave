import React from "react";

const CarouselCard = () => {
  return (
    <>
    {/*Dummy data TODO:  */}
      <div className=" lg:flex">
        
        <div className="card bg-base-100 shadow-sm w-50 md:w-70 lg:w-96">
          <figure>
            <img
              src="https://www.billboard.com/wp-content/uploads/2024/06/Eminem-press-credit-Travis-Shinn-2024-billboard-1548.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Content Title Here</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
