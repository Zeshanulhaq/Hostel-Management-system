import React from "react";
import { BrowserRouter as Router, Outlet } from "react-router-dom";
import Home from "../../Pages/Home";
import Footer from "../Footer";
import Header from "../Header";

const Main = (props) => {
  return (
    <Router>
      <Header />
      {props.children}
      <Footer />
    </Router>
  );
};

export default Main;
