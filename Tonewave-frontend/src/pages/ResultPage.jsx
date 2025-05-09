import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      try {
        const response = await fetch(
          `http://localhost:3000/search?q=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="p-4 mt-16 text-white">
      <h2 className="text-2xl font-bold mb-4">Search Results for: "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul className="space-y-3">
          {results.map((item, index) => (
            <li key={index} className="border-b border-gray-600 pb-2">
              <img
                src={item.posterLarge || item.poster}
                onError={(e) => {
                  if (e.target.src !== item.poster) {
                    e.target.src = item.poster;
                  }
                }}
                alt={item.title}
                className="min-w-[12rem] h-40 rounded-lg object-cover"
              />
              <p className="text-lg font-semibold">{item.title}</p>
              <div className="flex">
                <p className="text-sm text-gray-400">{item.artist }</p>
                <p className="text-sm text-gray-400">{item.album}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultPage;
