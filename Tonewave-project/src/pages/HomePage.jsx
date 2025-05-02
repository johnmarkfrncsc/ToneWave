import React from "react";
import CarouselCard from "../components/CarouselCard";
import CarouselArrow from "../components/CarouselArrow";
import MusicTracks from "../components/MusicTracks";

const HomePage = () => {
  return (
    <div className="px-5 bg-neutral-900">
      {/* FIXME: TODO:  P-20 in line 6 -> abang lang for next content in homepage */}
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold pt-5 pb-2 text-white">
        Start browsing
      </h1>

      <div className="">
        <CarouselArrow>
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 md:w-72 lg:w-96 text-white lg:p-10 p-6"
            >
              <div className="font-semibold mb-2">
                <strong>PURO POP</strong>
                <br /> Music Pop Latino
              </div>
              <CarouselCard />
            </div>
          ))}
        </CarouselArrow>
      </div>

      <MusicTracks/>

    </div>
  );
};

export default HomePage;
