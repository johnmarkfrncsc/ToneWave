import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-black px-4 py-2 text-white relative">
      <div className="flex w-full items-center justify-between flex-wrap gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/home"
            className="btn bg-black border-0 font-bold text-xl text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-soundwave"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"
              />
            </svg>
            <span className="ml-2">Tonewave</span>
          </Link>
        </div>

        {/* Search Bar */}
        <label className="input flex-grow max-w-md mx-auto border-0 justify-center bg-neutral-800 rounded-full px-4 text-white">
          <svg
            className="h-[2em] opacity-50 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow ml-2 text-md font-semibold"
            placeholder="What do you want to play?"
          />
        </label>

        {/* Right-side */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <button className="btn border-0 font-bold rounded-full text-black bg-white hover:scale-105">
            Explore Premium
          </button>
          <button className="btn border-0 text-sm text-gray-400 bg-black hover:text-white hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"
              />
            </svg>
            Install App
          </button>

          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>
        </div>

        {/* Tablet size:  right side -> burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block lg:hidden btn border-0 text-white bg-black hover:scale-125 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-music-note-list"
            viewBox="0 0 16 16"
          >
            <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
            <path fill-rule="evenodd" d="M12 3v10h-1V3z" />
            <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
            <path
              fill-rule="evenodd"
              d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </div>

      {/* right side modal */}
      {menuOpen && (
        <div className="absolute top-full right-0 bg-black w-full flex flex-col items-center p-4 gap-3 md:flex lg:hidden z-10 border-t border-gray-700">
          <button className="btn border-0 font-bold rounded-full text-black bg-white w-auto">
            Explore Premium
          </button>
          <button className="btn border-0 text-sm text-gray-400 bg-black hover:text-white w-full">
            Install App
          </button>
          <div className="avatar self-center">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
