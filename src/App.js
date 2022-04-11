import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HostelSignupLogin from "./Pages/HostelSignupLogin";
import Hostelprofilebuild from "./Pages/Hostelprofilebuild";
import Hostelprofile from "./Pages/Hostelprofile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HostelSignupLogin" element={<HostelSignupLogin />} />
        <Route path="/Hostelprofilebuild" element={<Hostelprofilebuild />} />
        <Route path="/Hostelprofile" element={<Hostelprofile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
