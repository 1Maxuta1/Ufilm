import React from "react";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer: React.FC = ({}) => {
  return (
    <footer className="bg-[#9C4AD4] px-4 py-2 flex flex-col sm:flex-row items-center justify-between rounded-b-2xl">
      <nav className="flex flex-wrap justify-center sm:justify-start">
        <a
          href="#"
          className="text-white text-sm px-2 py-1 hover:text-gray-300"
        >
          Підтримка
        </a>
        <a
          href="#"
          className="text-white text-sm px-2 py-1 hover:text-gray-300"
        >
          Реклама на сайті
        </a>
        <a
          href="#"
          className="text-white text-sm px-2 py-1 hover:text-gray-300"
        >
          Угода
        </a>
        <a
          href="#"
          className="text-white text-sm px-2 py-1 hover:text-gray-300"
        >
          Правовласникам
        </a>
        <a
          href="#"
          className="text-white text-sm px-2 py-1 hover:text-gray-300"
        >
          Контакти
        </a>
      </nav>
      <div className="flex items-center mt-2 sm:mt-0">
        <p className="text-white text-xs">&copy; 2023 Ufilm</p>
        <div className="flex ml-2">
          <a href="#" className="mr-2">
            <AiFillTwitterCircle size={24} color="white" />
          </a>
          <a href="#" className="mr-2">
            <AiFillYoutube size={24} color="white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
