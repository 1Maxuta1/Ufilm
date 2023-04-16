import React, { FC, ReactNode, useState } from "react";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
