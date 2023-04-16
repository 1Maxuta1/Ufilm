import React from "react";
import { Link } from "react-router-dom";
import { NavbarGenre, navbarGenres } from "../../../types/types.ts";
import Dropdown from "../../Dropdown/Dropdown.js";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#7a7af1]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                src="/images/icons/ufilm-website-favicon.png"
                className="w-20 h-20"
              />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navbarGenres.map((genre: NavbarGenre) => (
                  <Dropdown
                    options={genre.options}
                    title={genre.title}
                    key={genre.title}
                  />
                ))}
                <Link
                  to="/new"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:text-white focus:bg-indigo-500"
                >
                  Новинки
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <form className="ml-3 relative">
              <div className="flex">
                <input
                  className="block w-full py-2 pl-10 pr-3 leading-5 rounded-md border-gray-300 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="search"
                  placeholder="Пошук фільмів"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center justify-center px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inrin
  digo-500 focus:ring-offset-2 text-white"
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
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
