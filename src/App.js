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
import AdminLogin from "./Pages/Admin/AdminLogin";
import Stdsignin from "./Pages/Stdsignin";
import StdsignUp from "./Pages/StdsignUp";
import Searchhostel from "./Pages/Searchhostel";
import Contactus from "./Pages/Contactus";
import AdminSignUp from "./Pages/Admin/AdminSignUp";
import AdminDashboard from "./Pages/Admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminSignUp" element={<AdminSignUp />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />

        <Route path="/HostelLogin" element={<HostelLogin />} />

        <Route path="/HostelSignup" element={<HostelSignup />} />
        <Route path="/Hostelprofilebuild" element={<Hostelprofilebuild />} />
        <Route path="/HostelDetails" element={<HostelDetails />} />
        <Route path="/Hostelprofile" element={<Hostelprofile />} />

        <Route path="/Stdsignin" element={<Stdsignin />} />
        <Route path="/StdsignUp" element={<StdsignUp />} />
        <Route path="/Searchhostel" element={<Searchhostel />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
