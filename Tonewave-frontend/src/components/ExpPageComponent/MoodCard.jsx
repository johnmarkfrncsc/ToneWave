import React, { Children } from "react";

const MoodCard = () => {
  return (
    <>
      <div className="*:mt-2">
        <div className="btn w-full bg-base-300  shadow-none p-4 border-l-4 border-0 border-blue-300 ">
          Chill
        </div>

        <div className="btn w-full bg-base-300  shadow-none p-4 border-l-4 border-0 border-primary ">
          Commute
        </div>

        <div className="btn w-full bg-base-300  shadow-none p-4 border-l-4 border-0 border-amber-600">
          Engergy Booster
        </div>

        <div className="btn w-full bg-base-300  shadow-none p-4 border-l-4 border-0 border-white ">
          Feel good
        </div>

        <div className="btn w-full bg-base-300  shadow-none p-4 border-l-4 border-0 border-secondary ">
          Focus
        </div>

        <div className="btn w-full bg-base-300  shadow-none p-4 border-l-4 border-0 border-teal-500 ">
          Party
        </div>

        <div className="btn w-full bg-base-300  shadow-none p-4 border-l-4 border-0 border-error ">
          Romance
        </div>

        <div className="btn w-full bg-base-300  shadow-none p-4 border-l-4 border-0 border-gray-500 ">
          Sad
        </div>
      </div>
    </>
  );
};

export default MoodCard;
