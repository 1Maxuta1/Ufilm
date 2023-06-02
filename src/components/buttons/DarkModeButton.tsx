import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
    const body = document.getElementsByTagName("body")[0];
    const app = document.getElementsByTagName("app")[0];
    const header = document.getElementsByTagName("header")[0];
    if (darkMode) {
      body.classList.remove("bg-dark_purple");
      body.classList.add("bg-antiquewhite;");
    } else {
      body.classList.remove("bg-antiquewhite;");
      body.classList.add("bg-dark_purple");
    }
    body.style.transition = "background-color 0.6s ease-in-out";
    //   if (darkMode) {
    //     app.classList.remove("bg-medium_purple");
    //     app.classList.add("bg-antiquewhite;");
    //   } else {
    //     app.classList.remove("bg-antiquewhite;");
    //     app.classList.add("bg-medium_purple");
    //   }
    //   (app as HTMLElement).style.transition = "background-color 0.6s ease-in-out";
    //   if (darkMode) {
    //     header.classList.remove("bg-#9593BA");
    //     header.classList.add("bg-#4C4B5E;");
    //   } else {
    //     header.classList.remove("bg-#4C4B5E;");
    //     header.classList.add("bg-#9593BA");
    //   }
    //   (header as HTMLElement).style.transition =
    //     "background-color 0.6s ease-in-out";
  };

  return (
    <div
      className={`  ${
        darkMode
          ? " transition duration-600 ease-in-out bg-dark_purple text-white"
          : "  bg-antiquewhite; text-gray-900 transition duration-600 ease-in-out"
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
