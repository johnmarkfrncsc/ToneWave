import React, { useEffect, useState } from "react";
import CarouselCard from "../components/CarouselCard";
import CarouselArrow from "../components/CarouselArrow";
import MusicTracks from "../components/MusicTracks";
import ChipHeader from "../components/ChipHeader";

const HomePage = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const res = await fetch("http://localhost:3000/");
        const data = await res.json();
        setHomeData(data);
      } catch (error) {
        console.error("Failed to fetch home data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  return (
    <>
      <ChipHeader />
      <div className="px-5 bg-base-100">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold pt-5 md:ml-1 lg:ml-10 text-white">
          Start browsing
        </h1>

        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <>
            <pre className="text-white overflow-auto bg-gray-800 p-4 rounded-lg">
              {JSON.stringify(homeData, null, 2)}
            </pre>

            <div className="">
              <CarouselArrow>
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-60 md:w-72 lg:w-96 text-white p-1 lg:p-10"
                  >
                    <CarouselCard />
                  </div>
                ))}
              </CarouselArrow>
            </div>

            <div>
              <MusicTracks />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;

