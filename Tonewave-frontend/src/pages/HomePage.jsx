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
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold pt-5 md:ml-1 lg:ml-10 text-white">
          Start browsing
        </h1>

        {/*TODO: MODIFY THE LOADING SHIZ */}
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <>
            {/* Picks Section */}
            {homeData?.picks && (
              <div className="mt-10 p-10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Your Picks
                </h2>
                <div className="flex flex-wrap gap-6 justify-start">
                  {homeData.picks.map((item, index) => (
                    <div
                      key={index}
                      className=" hover:scale-105 transition-all duration-300 w-64"
                    >
                      <img
                        src={item.posterLarge || item.poster}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-t-xl"
                      />

                      <div className="p-4 flex flex-col justify-between h-48">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-700">{item.artist}</p>
                          <p className="text-xs text-gray-500 italic">
                            {item.album}
                          </p>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-700 transition">
                            ▶ Play
                          </button>
                          <a
                            href="#"
                            className="text-blue-500 text-sm hover:underline"
                          >
                            More details
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
