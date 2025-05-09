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
      <div className="px-5 bg-base-100 min-h-screen">

        {/*TODO: MODIFY THE LOADING SHIZ */}
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <>
            {/* Picks Section */}
            <div className="mt-2">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold md:ml-1 lg:ml-10 text-white py-10">Start browsing</h2>
                <div className="flex gap-5">
                  <CarouselArrow direction="left" targetId="picks-carousel" />
                  <CarouselArrow direction="right" targetId="picks-carousel" />
                </div>
              </div>

              <div className="relative px-10">
                <div
                  id="picks-carousel"
                  className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth "
                >
                  {homeData.picks.map((item, index) => (
                    <div
                      key={index}
                      className="min-w-[12rem] p-2.5 hover:bg-base-300 hover:rounded-lg"
                    >
                      <img
                        src={item.posterLarge || item.poster}
                        onError={(e) => {
                          if (e.target.src !== item.poster) {
                            e.target.src = item.poster;
                          }
                        }}
                        alt={item.title}
                        className="w-full h-40 rounded-lg object-cover"
                      />
                      <div className="flex flex-col justify-between">
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white">{item.artist}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Music Tracks */}
            <div className="mt-10">
              <MusicTracks />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
