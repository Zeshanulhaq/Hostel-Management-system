import React from "react";
import { Link } from "react-router-dom";
import logowt from "../assets/img/logo-white.png";

const Header = () => {
  return (
    <div>
      {/* Start Navigation  */}
      <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">
        <div className="container">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img src={logowt} className="logo logo-display" alt="job" />
              <img src={logowt} className="logo logo-scrolled" alt="stock" />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li>
                <Link to="/">
                  <i aria-hidden="true"></i>About
                </Link>
              </li>

              <li className="left-br">
                <a
                  href="/"
                  data-toggle="modal"
                  data-target="#signup"
                  className="signin"
                >
                  Hostel Owner
                </a>
              </li>
              <li className="left-br">
                <a
                  href="/"
                  data-toggle="modal"
                  data-target="#signup"
                  className="signin"
                >
                  Admin portal
                </a>
              </li>
            </ul>
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="dropdown megamenu-fw">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                  Brows
                </a>
                <ul className="dropdown-menu megamenu-content" role="menu">
                  <li>
                    <div className="row">
                      <div className="col-menu col-md-4">
                        <h6 className="title">Students</h6>

                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <Link to="/Stdsignin">Login</Link>
                            </li>
                            <li>
                              <Link to="/StdsignUp">Register</Link>
                            </li>

                            <li>
                              <Link to="index-6.html">Profile</Link>
                            </li>
                            <li>
                              <Link to="/Searchhostel">Search Hostel</Link>
                            </li>
                            <li>
                              <Link to="index-5.html">Logout</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-4">
                        <h6 className="title">Hostel Owner</h6>

                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <Link to="/HostelLogin">Login</Link>
                            </li>
                            <li>
                              <Link to="/HostelSignup">Register</Link>
                            </li>
                            <li>
                              <Link to="/Hostelprofilebuild">
                                Build Portfolio
                              </Link>
                            </li>
                            <li>
                              <Link to="/Hostelprofile">Profile</Link>
                            </li>
                            <li>
                              <Link to="/">Logout</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-4">
                        <h6 className="title">Admin Portal</h6>

                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <a href="browse-jobs.html">Login</a>
                            </li>
                            <li>
                              <a href="browse-company.html">Register</a>
                            </li>
                            <li>
                              <a href="create-resume.html">
                                View Hostel Rquests
                              </a>
                            </li>
                            <li>
                              <a href="resume-detail.html">Profile</a>
                            </li>
                            <li>
                              <a href="/">Logout</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/hostelDetails">Hostels</Link>
              </li>
              <li>
                <Link to="/Contactus">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navigation  */}
    </div>
  );
};

export default Header;
