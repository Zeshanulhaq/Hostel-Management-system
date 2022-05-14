import React from "react";
import { BrowserRouter as Router, Outlet } from "react-router-dom";
import Adminnav from "../../Pages/Admin/Adminnav";
import Home from "../../Pages/Home";
import Footer from "../Footer";
import Header from "../Header";

const AdminLayout = (props) => {
  return (
    <Router>
      <Adminnav />
      {props.children}
    </Router>
  );
};

export default AdminLayout;
