import React, { useEffect } from "react";
import CarouselCard from "../components/CarouselCard";
import CarouselArrow from "../components/CarouselArrow";
import MusicTracks from "../components/MusicTracks";
import ChipHeader from "../components/ChipHeader";
import { getHome } from "@hydralerne/youtube-api";

const HomePage = () => {
  useEffect(() => {
    const fetchHome = async () => {
      await getHome();
    };

    const homeData = fetchHome();
    console.log(homeData);
  }, []);

  return (
    <>
      <ChipHeader />
      <div className="px-5 bg-neutral-950">
        {/* FIXME: TODO:  P-20 in line 6 -> abang lang for next content in homepage */}
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold pt-5 md:ml-1 lg:ml-10 text-white">
          New releases
        </h1>

        <div className="">
          <CarouselArrow>
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-60 md:w-72 lg:w-96 text-white p-1 lg:p-10 "
              >
                <CarouselCard />
              </div>
            ))}
          </CarouselArrow>
        </div>

        <div>
          <MusicTracks />
        </div>
      </div>
    </>
  );
};

export default HomePage;
