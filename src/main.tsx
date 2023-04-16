import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/fonts.css";
import "./App.css";
import Layout from "./components/layouts/Layout";
import MainPage from "./components/pages/main/MainPage";
import { RouterProvider } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/layouts/footer/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <MainPage />
      </Layout>
    </Router>
  </React.StrictMode>
);
{
  /* <RouterProvider router={router} /> */
}
