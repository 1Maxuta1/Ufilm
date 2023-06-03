import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import MainPage from "./components/pages/main/MainPage";

type Props = {};

const App = (props: Props) => {
  return (
    <Router>
      <Layout>
        <MainPage />
      </Layout>
    </Router>
  );
};

export default App;
