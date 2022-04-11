import React from "react";
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
            <a className="navbar-brand" href="index-2.html">
              <img src={logowt} className="logo logo-display" alt="" />
              <img src={logowt} className="logo logo-scrolled" alt="" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li>
                <a href="login.html">
                  <i aria-hidden="true"></i>About
                </a>
              </li>

              <li className="left-br">
                <a
                  href="javascript:void(0)"
                  data-toggle="modal"
                  data-target="#signup"
                  className="signin"
                >
                  Hostel Owner
                </a>
              </li>
              <li className="left-br">
                <a
                  href="javascript:void(0)"
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
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
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
                              <a href="index-3.html">Login</a>
                            </li>
                            <li>
                              <a href="index-4.html">Register</a>
                            </li>

                            <li>
                              <a href="index-6.html">Profile</a>
                            </li>
                            <li>
                              <a href="freelancing.html">Search Hostel</a>
                            </li>
                            <li>
                              <a href="index-5.html">Logout</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-4">
                        <h6 className="title">Hostel Owner</h6>

                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <a href="browse-jobs.html">Login</a>
                            </li>
                            <li>
                              <a href="browse-company.html">Register</a>
                            </li>
                            <li>
                              <a href="create-resume.html">Build Portfolio</a>
                            </li>
                            <li>
                              <a href="resume-detail.html">Profile</a>
                            </li>
                            <li>
                              <a href="#">Logout</a>
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
                              <a href="#">Logout</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html">Hostels</a>
              </li>
              <li>
                <a href="blog.html">Contact</a>
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
