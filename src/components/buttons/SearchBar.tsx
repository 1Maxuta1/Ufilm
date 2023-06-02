import React, { useState } from "react";
// import "./SearchBar.css"; // import the CSS file with the animation styles

function SearchBar() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div
      className={`flex items-center ${
        showSearch ? "show-search" : "hidden-search"
      }`}
    >
      <div className="flex">
        <input
          className="block w-full py-2 pl-10 pr-3 leading-5 rounded-md border-gray-300 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="search"
          placeholder="Пошук фільмів"
        />
        <button
          type="submit"
          className="inset-y-0 right-0 flex items-center justify-center px-2 rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none text-white"
          onClick={toggleSearch}
        >
          <svg
            className="h-5 w-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 1a8 8 0 100 16A8 8 0 009 1zm0 14a6 6 0 110-12 6 6 0 010 12z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M19.707 18.293a1 1 0 01-1.414 1.414l-3.8-3.8a7 7 0 111.414-1.414l3.8 3.8zM9 16a7 7 0 110-14 7 7 0 010 14z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
