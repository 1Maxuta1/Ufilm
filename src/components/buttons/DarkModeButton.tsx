import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
    const body = document.getElementsByTagName("body")[0];
    if (darkMode) {
      body.classList.remove("bg-template_night");
      body.classList.add("bg-white");
    } else {
      body.classList.remove("bg-white");
      body.classList.add("bg-template_night");
    }
    body.style.transition = "background-color 0.6s ease-in-out   ";
  };

  return (
    <div
      className={`  ${
        darkMode
          ? " transition duration-600 ease-in-out bg-template_night text-white"
          : "  bg-white text-gray-900 transition duration-600 ease-in-out"
      }`}
    >
      <button
        className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none  transition-colors"
        onClick={handleModeToggle}
      >
        {darkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
        {darkMode ? "Світла тема" : "Темна тема"}
      </button>
    </div>
  );
}

export default DarkModeButton;
