import React from "react";
import { Link } from "react-router-dom";
import { NavbarGenre } from "../../../types/types";
import { navbarGenres } from "../../../constants/navbar";
import Dropdown from "../../Dropdown/Dropdown";
import SearchBar from "../../buttons/SearchBar";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#7a7af1]">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-shrink-0 flex items-center"></div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex gap-4">
              {navbarGenres.map((genre: NavbarGenre) => (
                <Dropdown
                  options={genre.options}
                  title={genre.title}
                  key={genre.title}
                />
              ))}
              <div className="flex justify-center">
                <Link
                  to="/new"
                  className="px-3 rounded-md text-sm font-medium text-white"
                >
                  Новинки
                </Link>
              </div>
            </div>
          </div>
        </div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
