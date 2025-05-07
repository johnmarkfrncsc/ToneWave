import React from "react";

const NewMVSection = () => {
  return (
    <>
      <div className=" lg:flex snap-x">
        <div className="w-50 md:w-70 lg:w-96 snap-center">
          <figure>
            <img
              src="https://i.ytimg.com/vi/nourl_BjJeA/sddefault.jpg"
              alt="Shoes"
            />
          </figure>
          <div>
            <h2 className="font-bold">KrismelTV- Masakit ang pwet ko shan</h2>
            <p className="textarea-md text-neutral-500 font-semibold">
              KrismelTV - 30K views
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMVSection;
