import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import logowt from "../assets/img/logo-white.png";

const Header = () => {
  const std_jwt = localStorage.getItem("std_jwt_token");
  const hstl_jwt = localStorage.getItem("jwt");

  const history = useHistory();
  const onstdLogout = () => {
    localStorage.removeItem("std_jwt_token");
    history.push("/");
    window.location.reload(false);
  };
  const onhstllogout = () => {
    localStorage.removeItem("jwt");
    history.push("/HostelLogin");
    window.location.reload(false);
  };

  const hstlowner = () => {
    if (!hstl_jwt) {
      history.push("/HostelLogin");
    } else {
      history.push("/Hostelprofile");
    }
    window.location.reload(false);
  };
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

              <li className="left-br" onClick={hstlowner}>
                <Link
                  to="#"
                  data-toggle="modal"
                  data-target="#signup"
                  className="signin"
                >
                  Hostel Owner
                </Link>
              </li>
              {hstl_jwt ? (
                <li className="left-br" onClick={onhstllogout}>
                  <Link
                    to="/HostelLogin"
                    data-toggle="modal"
                    data-target="#signup"
                    className="signin"
                  >
                    Hostel Logout
                  </Link>
                </li>
              ) : (
                <li className="left-br">
                  <Link
                    to="/HostelLogin"
                    data-toggle="modal"
                    data-target="#signup"
                    className="signin"
                  >
                    Hostel Login
                  </Link>
                </li>
              )}
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
                            {!std_jwt && (
                              <li>
                                <Link to="/Stdsignin">Login</Link>
                              </li>
                            )}
                            {!std_jwt && (
                              <li>
                                <Link to="/StdsignUp">Register</Link>
                              </li>
                            )}

                            {/* <li>
                              <Link to="index-6.html">Profile</Link>
                            </li> */}

                            {std_jwt && <li onClick={onstdLogout}>Logout</li>}
                          </ul>
                        </div>
                      </div>
                      {/* <div className="col-menu col-md-4">
                        <h6 className="title">Hostel Owner</h6>

                        <div className="content">
                          <ul className="menu-col">
                            {!hstl_jwt && (
                              <li>
                                <Link to="HostelLogin">Login</Link>
                              </li>
                            )}

                            {!hstl_jwt && (
                              <li>
                                <Link to="/HostelSignup">Register</Link>
                              </li>
                            )}
                            {hstl_jwt && (
                              <li>
                                <Link to="/Hostelprofilebuild">
                                  Build Portfolio
                                </Link>
                              </li>
                            )}

                            {hstl_jwt && (
                              <li>
                                <Link to="/Hostelprofile">Profile</Link>
                              </li>
                            )}
                            {hstl_jwt && (
                              <li onClick={onhstllogout}>
                                <Link to="/">Logout</Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div> */}
                      {/* <div className="col-menu col-md-4">
                        <h6 className="title">Admin Portal</h6>

                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <Link to="/AdminLogin">Login</Link>
                            </li>
                            <li>
                              <Link to="/AdminSignUp">Register</Link>
                            </li>
                            <li>
                              <Link to="create-resume.html">
                                View Hostel Rquests
                              </Link>
                            </li>
                            <li>
                              <Link to="resume-detail.html">Profile</Link>
                            </li>
                            <li>
                              <Link to="/">Logout</Link>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/Searchhostel">Hostels</Link>
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
