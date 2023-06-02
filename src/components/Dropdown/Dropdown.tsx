import React from "react";
import { Link } from "react-router-dom";

interface DropdownProps {
  title: string;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, options }) => {
  const [openSection, setOpenSection] = React.useState("");

  const handleMouse = (section: string) => {
    if (openSection === section) {
      setOpenSection(section); // Потім повернути ""
    } else {
      setOpenSection(section);
      if (openSection !== "") {
        setOpenSection("");
      }
    }
  };

  return (
    <div className="relative inline-block text-center">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => handleMouse(title)}
          // on={() => handleMouseLeave(title)}
        >
          {title}
        </button>
      </div>

      {openSection === title && (
        <div
          className=" w-[500%] absolute  top-auto mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
            {options.map((option) => (
              <Link
                to={`/${option}`}
                key={option}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleMouse(title)}
                // onMouseLeave={() => handleMouseLeave(title)}
              >
                {option}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
