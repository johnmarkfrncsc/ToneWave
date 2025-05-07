import React from "react";
import Navbar from "../components/Navbar";
import CarouselCard from "../components/CarouselCard";
import CarouselArrow from "../components/CarouselArrow";
import MoodCard from "../components/ExpPageComponent/MoodCard";
import NewMVSection from "../components/ExpPageComponent/NewMVSection";

const ExplorePage = () => {
  return (
    <>
      <div className="mt-17 p-4 bg-base-100 ">
        <div>
          <div className=" flex flex-col  lg:flex-row  lg:justify-center lg:gap-10 lg:ml-30 xl:ml-2 *:mb-2 *:shadow-none *:bg-base-300">
            <button className=" btn ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-music-note-beamed"
                viewBox="0 0 16 16"
              >
                <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2" />
                <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z" />
                <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
              </svg>
              New releases
            </button>
            <button className=" btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-graph-up-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                />
              </svg>
              Charts
            </button>
            <button className=" btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
              Moods & genres
            </button>
          </div>

          {/* TODO: FIXME: need new file for expplore components */}

          <div className=" pt-10">
            <h1 className="text-lg font-bold pb-3"> New single & albums</h1>

            <div>
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
          </div>

          {/* TODO: FIXME:  need new file component for explore page */}

          <div className="pt-10">
            <h1 className="text-lg font-bold pb-2 ">Moods & genres</h1>
            <MoodCard />
          </div>

          <div className="pt-10">
            <h1 className="text-lg font-bold pb-3">New Music videos</h1>
            <div>
              <CarouselArrow>
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-60 md:w-72 lg:w-96 text-white p-1 lg:p-10 "
                  >
                    <NewMVSection />
                  </div>
                ))}
              </CarouselArrow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
