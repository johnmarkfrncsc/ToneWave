import React, { Children } from "react";

const TonewaveButton = ({ children }) => {
  return (
    <div className="btn shadow-none border-0  text-md font-semibold px-4 py-2 text-sm text-white bg-white/10 backdrop-blur-md rounded-lg  hover:bg-white/20 transition">
      {children}
    </div>
  );
};

export default TonewaveButton;
