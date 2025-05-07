import React, { useState } from "react";

const songs = [
  {
    title: "Lose My Mind (feat. Doja Cat)",
    artist: "Don Toliver",
    image: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
  },
  {
    title: "Spend It",
    artist: "Summer Walker",
    image: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
  },
  {
    title: "Old Phone",
    artist: "Ed Sheeran",
    image: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
  },
  {
    title: "Better Than You",
    artist: "Briston Maroney",
    image: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
  },
  {
    title: "Priceless",
    artist: "Maroon 5 & LISA",
    image: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
  },
  {
    title: "Die With A Smile",
    artist: "Lady Gaga & Bruno Mars",
    image: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
  },
  {
    title: "Magic",
    artist: "WIM",
    image: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
  },
  {
    title: "aHUH",
    artist: "KrismelTV",
    image: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
  },
  {
    title: "The Shade",
    artist: "Rex Orange County",
    image: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
  },
  {
    title: "2 Soon",
    artist: "Keshi",
    image: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
  },
];

const MusicTracks = () => {
  const [batchIndex, setBatchIndex] = useState(0);
  const batchSize = 5;

  const handleNext = () => {
    if ((batchIndex + 1) * batchSize < songs.length) {
      setBatchIndex(batchIndex + 1);
    }
  };

  const handlePrev = () => {
    if (batchIndex > 0) {
      setBatchIndex(batchIndex - 1);
    }
  };

  const displayedSongs = songs.slice(
    batchIndex * batchSize,
    (batchIndex + 1) * batchSize
  );

  return (
    <div className="text-white md:ml-2 lg:ml-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Latest Songs</h1>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span>More</span>
          <button
            onClick={handlePrev}
            className={`text-xl ${
              batchIndex === 0
                ? "opacity-30 cursor-default"
                : "hover:text-white"
            }`}
            disabled={batchIndex === 0}
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className={`text-xl ${
              (batchIndex + 1) * batchSize >= songs.length
                ? "opacity-30 cursor-default"
                : "hover:text-white"
            }`}
            disabled={(batchIndex + 1) * batchSize >= songs.length}
          >
            ›
          </button>
        </div>
      </div>

      <ul className="space-y-4">
        {displayedSongs.map((song, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={song.image}
                alt={song.title}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-medium truncate w-36">
                  {song.title}
                </p>
                <p className="text-xs text-gray-400">{song.artist}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicTracks;
