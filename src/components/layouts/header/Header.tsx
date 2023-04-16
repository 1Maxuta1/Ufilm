import React from "react";
import DarkModeButton from "../../buttons/DarkModeButton";

const Header: React.FC = () => {
  return (
    <div className="header flex justify-around items-center lg:gap-96 md:gap-48 h-15 bg-[#4A0678]  ">
      <DarkModeButton />
      <div className="flex gap-8">
        <p>Вхід</p>
        <p>Реєстрація</p>
      </div>
    </div>
  );
};

export default Header;
