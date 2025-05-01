import React from "react";
import CarouselCard from "../components/CarouselCard";

const HomePage = () => {
  return (
    <div className="p-20 pt-10 bg-neutral-900">
      {/* FIXME: TODO:  P-20 in line 6 -> abang lang for next content in homepage */}
      <h1 className="text-3xl font-bold pt-10 pb-5">Start browsing</h1>
      <div className="flex carousel">
        <div className="p-5 carousel-item flex-col items-start">
          <div className="font-semibold">
            <small>UPDATE PLAYLIST</small> <br></br>
            <strong>PURO POP</strong>
            <br></br> Music Pop Latino
          </div>
          <CarouselCard />
        </div>

        <div className="p-5 carousel-item flex-col items-start">
          <div className="font-sans">
            <small>UPDATE PLAYLIST</small> <br></br>
            <strong>PURO POP</strong>
            <br></br> Music Pop Latino
          </div>
          <CarouselCard />
        </div>

        <div className="p-5 carousel-item flex-col items-start">
          <div className="font-sans">
            <small>UPDATE PLAYLIST</small> <br></br>
            <strong>PURO POP</strong>
            <br></br> Music Pop Latino
          </div>
          <CarouselCard />
        </div>

        <div className="p-5 carousel-item flex-col items-start">
          <div className="font-sans">
            <small>UPDATE PLAYLIST</small> <br></br>
            <strong>PURO POP</strong>
            <br></br> Music Pop Latino
          </div>
          <CarouselCard />
        </div>

        <div className="p-5 carousel-item flex-col items-start">
          <div className="font-sans">
            <small>UPDATE PLAYLIST</small> <br></br>
            <strong>PURO POP</strong>
            <br></br> Music Pop Latino
          </div>
          <CarouselCard />
        </div>

        <div className="p-5 carousel-item flex-col items-start">
          <div className="font-sans">
            <small>UPDATE PLAYLIST</small> <br></br>
            <strong>PURO POP</strong>
            <br></br> Music Pop Latino
          </div>
          <CarouselCard />
        </div>

        <div className="p-5 carousel-item flex-col items-start">
          <div className="font-sans">
            <small>UPDATE PLAYLIST</small> <br></br>
            <strong>PURO POP</strong>
            <br></br> Music Pop Latino
          </div>
          <CarouselCard />
        </div>

        <div className="p-5 carousel-item flex-col items-start">
          <div className="font-sans">
            <small>UPDATE PLAYLIST</small> <br></br>
            <strong>PURO POP</strong>
            <br></br> Music Pop Latino
          </div>
          <CarouselCard />
        </div>

        <div className="p-5 carousel-item flex-col items-start">
          <div className="font-sans">
            <small>UPDATE PLAYLIST</small> <br></br>
            <strong>PURO POP</strong>
            <br></br> Music Pop Latino
          </div>
          <CarouselCard />
        </div>
      </div>
      {/* <div class="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
