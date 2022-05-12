import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
  Switch,
} from "react-router-dom";
import HostelLogin from "./Pages/HostelLogin";
import HostelSignup from "./Pages/HostelSignup";
import HostelDetails from "./Pages/HostelDetails";
import Hostelprofilebuild from "./Pages/Hostelprofilebuild";
import Hostelprofile from "./Pages/Hostelprofile";
import AdminLogin from "./Pages/Admin/AdminLogin";
import Stdsignin from "./Pages/Stdsignin";
import StdsignUp from "./Pages/StdsignUp";
import Searchhostel from "./Pages/Searchhostel";
import GetHostelsList from "./Pages/GetHostelsList";

import Contactus from "./Pages/Contactus";
import AdminSignUp from "./Pages/Admin/AdminSignUp";
// import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Layout from "./Pages/Admin/Layout";
import Main from "./Components/Layouts/Main";
import All from "./Pages/Admin/All";
import Approved from "./Pages/Admin/Approved";
import AdminProfile from "./Pages/Admin/AdminProfile";

import Error404 from "./Pages/Error404";
function App() {
  return (
    // <AdminDashboard />
    <Router>
      <Switch>
        <Route
          path={[
            "/All",
            "/AdminSignUp",
            "/Approved",
            "/AdminProfile",
            "/AdminLogin",
          ]}
        >
          <Layout>
            <Switch>
              <Route path="/AdminLogin" component={AdminLogin} />
              <Route path="/AdminSignUp" component={AdminSignUp} />
              <Route path="/All" component={All} />
              <Route path="/Approved" component={Approved} />
              <Route path="/AdminProfile" component={AdminProfile} />
            </Switch>
          </Layout>
        </Route>
        <Route path={["/HostelLogin", "/HostelSignup", "/"]}>
          <Main>
            <Route exact path="/" component={Home} />
            <Switch>
              <Route path="/HostelLogin" component={HostelLogin} />

              <Route path="/HostelSignup" component={HostelSignup} />
              <Route
                path="/Hostelprofilebuild"
                component={Hostelprofilebuild}
              />
              <Route path="/HostelDetails" component={HostelDetails} />
              <Route path="/Hostelprofile" component={Hostelprofile} />

              <Route path="/Stdsignin" component={Stdsignin} />
              <Route path="/StdsignUp" component={StdsignUp} />
              <Route path="/Searchhostel" component={Searchhostel} />
              <Route path="/Contactus" component={Contactus} />
              <Route path="/GetHostelsList" component={GetHostelsList} />
            </Switch>
          </Main>
        </Route>
        {/* <Route path="*" component={Error404} /> */}
      </Switch>
    </Router>
  );
}

export default App;
