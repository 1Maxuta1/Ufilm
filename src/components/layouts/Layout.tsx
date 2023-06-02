import React, { FC, ReactNode, useState } from "react";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app bg-[#BAA5D9] rounded-2xl">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
