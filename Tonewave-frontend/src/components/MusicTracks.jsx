import React from 'react'
//Dummy data TODO:
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
  ];

const MusicTracks = () => {
  return (
    
    <>
     <div className="text-white md:ml-2 lg:ml-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Latest Songs</h1>
        <span className="text-xl">›</span>
      </div>

      <ul className="space-y-4">
        {songs.map((song, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={song.image}
                alt={song.title}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-medium truncate w-36">{song.title}</p>
                <p className="text-xs text-gray-400">{song.artist}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white text-xl">⋯</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default MusicTracks