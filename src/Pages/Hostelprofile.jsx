import { useEffect, useState } from "react";
import can1 from "../assets/img/can-1.png";
import can2 from "../assets/img/can-2.png";
import axios from "axios";

import background from "../assets/img/banner-10.jpg";
import { NavLink } from "react-router-dom";

const Hostelprofile = () => {
  const [hstldata, sethstldata] = useState("");
  const [services, setservices] = useState("");
  const [social, setsocial] = useState("");
  const [comnts, setcomments] = useState("");

  useEffect(() => {
    axios
      .get("get/hostel/profile")
      .then((response) => {
        console.log(response.data.data);
        sethstldata(response.data.data);
        setservices(response.data.data.services);
        setsocial(response.data.data.socialmedia);
        setcomments(response.data.data.comments);
        console.log(response.data.data.comments);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  return (
    <>
      <div className="Loader"></div>
      <div className="wrapper">
        {/* <!-- Title Header Start --> */}
        <section
          className="inner-header-title"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container">
            <h1>Hostel Profile</h1>
          </div>
        </section>
        <div className="clearfix"></div>

        {/* <!-- Candidate Profile Start --> */}
        <section className="detail-desc advance-detail-pr gray-bg">
          <div className="container white-shadow">
            <div className="row">
              <div className="detail-pic">
                <img src={hstldata.image} className="img" alt="" />
                <a href="/" className="detail-edit" title="edit">
                  <i className="fa fa-pencil"></i>
                </a>
              </div>
            </div>

            <div className="row bottom-mrg">
              <div className="col-md-12 col-sm-12">
                <div className="advance-detail detail-desc-caption">
                  <h4>{hstldata.hostel_name}</h4>
                  <span className="designation">
                    CEO & Founder {hstldata.ownername}
                  </span>
                  <p>{hstldata.rem_seats}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="full-detail-description full-detail gray-bg">
          <div className="container">
            <div className="col-md-12 col-sm-12">
              <div className="full-card">
                <div className="deatil-tab-employ tool-tab">
                  <ul className="nav simple nav-tabs" id="simple-design-tab">
                    <li className="active">
                      <a href="#abouthostel">About</a>
                    </li>
                    <li>
                      <NavLink to="#address">Address</NavLink>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#socialmedia">social media</a>
                    </li>
                    <li>
                      <a href="#feedbacks">
                        Feedbacks <span className="info-bar">6</span>
                      </a>
                    </li>
                    <li>
                      <a href="#settings">Settings</a>
                    </li>
                  </ul>
                  {/* <!-- Start All Sec --> */}
                  <div className="tab-content">
                    {/* <!-- Start About Sec --> */}
                    <div id="abouthostel" className="tab-pane fade in active">
                      <h3>About hostel</h3>
                      <p>{hstldata.about}</p>
                    </div>
                    {/* <!-- End About Sec --> */}

                    {/* <!-- Start Address Sec --> */}
                    <div id="address" className="tab-pane fade">
                      <h3>Address Info</h3>
                      <ul className="job-detail-des">
                        <li>
                          <span>Address:</span>
                          {hstldata.address}
                        </li>
                        <li>
                          <span>City:</span>Mohali(hostel city)
                        </li>

                        <li>
                          <span>Country:</span>Pakistan
                        </li>

                        <li>
                          <span>phone:</span>
                          {hstldata.phone}
                        </li>

                        <li>
                          <span>Email:</span>
                          {hstldata.email}
                        </li>
                      </ul>
                    </div>
                    {/* <!-- End Address Sec --> */}

                    <div id="services" className="tab-pane fade">
                      <h3>Hostel Services</h3>
                      <ul className="job-detail-des">
                        <li>
                          <span>wifi:</span>
                          {services.wifi}
                        </li>
                        <li>
                          <span>mess:</span>
                          {services.mess}
                        </li>
                        <li>
                          <span>chair/table:</span>
                          {services.chair_table}
                        </li>
                        <li>
                          <span>geysar:</span>
                          {services.geysar}
                        </li>
                        <li>
                          <span>AC:</span>
                          {services.AC}
                        </li>
                        <li>
                          <span>laundry:</span>
                          {services.laundry}
                        </li>
                      </ul>
                    </div>
                    <div id="scialmedia" className="tab-pane fade">
                      <h3>Social Media</h3>
                      <ul className="job-detail-des">
                        <li>
                          <span>Facebook:</span> {social.facebook}
                        </li>
                        <li>
                          <span>Website:</span> {social.website}
                        </li>
                        <li>
                          <span>Google:</span>
                          {social.google}
                        </li>
                        <li>
                          <span>Tweeter:</span> {social.tweeter}
                        </li>
                      </ul>
                    </div>

                    {/* <!-- Start Message --> */}
                    <div id="feedbacks" className="tab-pane fade">
                      <div className="inbox-body inbox-widget">
                        <div className="mail-card">
                          <header
                            className="card-header cursor-pointer collapsed"
                            data-toggle="collapse"
                            data-target="#full-message"
                            aria-expanded="false"
                          >
                            <div className="card-title flexbox">
                              <img
                                className="img-responsive img-circle avatar"
                                src={can1}
                                alt="..."
                              />
                              <div>
                                <h6>Daniel Duke(user)</h6>
                                <small>Today at 07:34 AM</small>
                                <small>
                                  <a
                                    className="text-info collapsed"
                                    href="#detail-view"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                  >
                                    View Detail
                                  </a>
                                </small>

                                <div
                                  className="no-collapsing cursor-text collapse"
                                  id="detail-view"
                                  aria-expanded="false"
                                  //   style="height: 0px;"
                                >
                                  <small className="d-inline-block">
                                    From:
                                  </small>
                                  <small>
                                    theadmin@thetheme.io(user email)
                                  </small>
                                </div>
                              </div>
                            </div>
                          </header>
                          <div
                            className="collapse"
                            id="full-message"
                            aria-expanded="false"
                            // style="height: 0px;"
                          >
                            <div className="card-body">
                              <p>
                                (message from user)Sed ut perspiciatis unde
                                omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem
                                aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta
                                sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit, sed
                                quia.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Message --> */}

                    {/* <!-- Start Settings --> */}
                    <div id="settings" className="tab-pane fade">
                      <div className="row no-mrg">
                        <h3>Edit Profile</h3>
                        <div className="edit-pro">
                          <div className="col-md-4 col-sm-6">
                            <label>User Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="enter name"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>User Email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="username@gmail.com"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>User Phone</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="+923445554"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>User Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="********"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Hostel Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Hostel name"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Hostel Email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="hostel@gmail.com"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Hostel City</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="enter city"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Hostel Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Hostel address"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Website address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="website address"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Facebook address </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="address of Facebook"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>google address </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="address of Facebook"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Tweeter address </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="address of Facebook"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>total seats</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="total seats"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Remaining seats</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="reamining seats"
                            />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Chair/Table</label>
                            <select
                              className="form-control input-lg"
                              placeholder="Gesyar"
                            >
                              <option selected>Chair/Table</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Gesyar</label>
                            <select
                              className="form-control input-lg"
                              placeholder="Gesyar"
                            >
                              <option selected>Gesyar</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Laundry</label>
                            <select
                              className="form-control input-lg"
                              placeholder="Gesyar"
                            >
                              <option selected>Laundry</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Mess</label>
                            <select
                              className="form-control input-lg"
                              placeholder="Gesyar"
                            >
                              <option selected>Mess</option>
                              <option>2 times</option>
                              <option>3 times</option>
                            </select>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>AC</label>
                            <select
                              className="form-control input-lg"
                              placeholder="Gesyar"
                            >
                              <option selected>AC</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>

                          <div className="col-md-4 col-sm-6">
                            <label> Generator</label>
                            <select
                              className="form-control input-lg"
                              placeholder="Gesyar"
                            >
                              <option selected>Generator</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Wifi</label>
                            <select
                              className="form-control input-lg"
                              placeholder="Gesyar"
                            >
                              <option selected>Wifi</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>New Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="*********"
                            />
                          </div>

                          <div className="col-md-4 col-sm-6">
                            <label>About you</label>
                            <textarea
                              className="form-control"
                              placeholder="Write Something"
                            ></textarea>
                          </div>

                          <div className="col-sm-12">
                            <button type="button" className="update-btn">
                              Update Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Settings --> */}
                  </div>
                  {/* <!-- Start All Sec --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hostelprofile;
