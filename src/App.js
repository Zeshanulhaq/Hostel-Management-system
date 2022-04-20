import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HostelLogin from "./Pages/HostelLogin";
import HostelSignup from "./Pages/HostelSignup";
import HostelDetails from "./Pages/HostelDetails";
import Hostelprofilebuild from "./Pages/Hostelprofilebuild";
import Hostelprofile from "./Pages/Hostelprofile";
import AdminLogin from "./Pages/AdminLogin";
import Stdsignin from "./Pages/Stdsignin";
import StdsignUp from "./Pages/StdsignUp";
import Searchhostel from "./Pages/Searchhostel";
import Contactus from "./Pages/Contactus";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HostelLogin" element={<HostelLogin />} />
        <Route path="/HostelSignup" element={<HostelSignup />} />
        <Route path="/Hostelprofilebuild" element={<Hostelprofilebuild />} />
        <Route path="/Hostelprofile" element={<Hostelprofile />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Stdsignin" element={<Stdsignin />} />
        <Route path="/StdsignUp" element={<StdsignUp />} />
        <Route path="/Searchhostel" element={<Searchhostel />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/HostelDetails" element={<HostelDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
