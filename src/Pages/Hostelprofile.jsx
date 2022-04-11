import React from "react";
import can1 from "../assets/img/can-1.png";
import can2 from "../assets/img/can-2.png";

import background from "../assets/img/banner-10.jpg";

const Hostelprofile = () => {
  return (
    <>
      <div class="Loader"></div>
      <div class="wrapper">
        {/* <!-- Title Header Start --> */}
        <section
          class="inner-header-title"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div class="container">
            <h1>Hostel Profile</h1>
          </div>
        </section>
        <div class="clearfix"></div>

        {/* <!-- Candidate Profile Start --> */}
        <section class="detail-desc advance-detail-pr gray-bg">
          <div class="container white-shadow">
            <div class="row">
              <div class="detail-pic">
                <img src={can2} class="img" alt="" />
                <a href="#" class="detail-edit" title="edit">
                  <i class="fa fa-pencil"></i>
                </a>
              </div>
            </div>

            <div class="row bottom-mrg">
              <div class="col-md-12 col-sm-12">
                <div class="advance-detail detail-desc-caption">
                  <h4>Adam Declizer</h4>
                  <span class="designation">CEO & Founder (ownername)</span>
                  <p>available/total seats</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="full-detail-description full-detail gray-bg">
          <div class="container">
            <div class="col-md-12 col-sm-12">
              <div class="full-card">
                <div class="deatil-tab-employ tool-tab">
                  <ul class="nav simple nav-tabs" id="simple-design-tab">
                    <li class="active">
                      <a href="#abouthostel">About</a>
                    </li>
                    <li>
                      <a href="#address">Address</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#socialmedia">social media</a>
                    </li>
                    <li>
                      <a href="#feedbacks">
                        Feedbacks <span class="info-bar">6</span>
                      </a>
                    </li>
                    <li>
                      <a href="#settings">Settings</a>
                    </li>
                  </ul>
                  {/* <!-- Start All Sec --> */}
                  <div class="tab-content">
                    {/* <!-- Start About Sec --> */}
                    <div id="abouthostel" class="tab-pane fade in active">
                      <h3>About hostel</h3>
                      <p>
                        (write here about hostel)Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nulla interdum sed diam ac
                        fermentum. Mauris nec pellentesque neque. Cras nec diam
                        euismod, congue sapien eu, fermentum libero. Vestibulum
                        quis sem.
                      </p>
                    </div>
                    {/* <!-- End About Sec --> */}

                    {/* <!-- Start Address Sec --> */}
                    <div id="address" class="tab-pane fade">
                      <h3>Address Info</h3>
                      <ul class="job-detail-des">
                        <li>
                          <span>Address:</span>SCO 210, Neez Plaza (address of
                          hostel)
                        </li>
                        <li>
                          <span>City:</span>Mohali(hostel city)
                        </li>

                        <li>
                          <span>Country:</span>Pakistan
                        </li>

                        <li>
                          <span>phone:</span>+91 123 456 7854 (hostel phone)
                        </li>

                        <li>
                          <span>Email:</span>youremail@gmail.com
                        </li>
                      </ul>
                    </div>
                    {/* <!-- End Address Sec --> */}

                    <div id="services" class="tab-pane fade">
                      <h3>Hostel Services</h3>
                      <ul class="job-detail-des">
                        <li>
                          <span>wifi:</span>(wifi )
                        </li>
                        <li>
                          <span>mess:</span>(mess )
                        </li>
                        <li>
                          <span>chair/table:</span>(chair/hostel)
                        </li>
                        <li>
                          <span>geysar:</span>(geysar)
                        </li>
                        <li>
                          <span>AC:</span>(AC)
                        </li>
                        <li>
                          <span>laundry:</span>
                        </li>
                      </ul>
                    </div>
                    <div id="socialmedia" class="tab-pane fade">
                      <h3>Social Media</h3>
                      <ul class="job-detail-des">
                        <li>
                          <span>Facebook:</span>(Facebook )
                        </li>
                        <li>
                          <span>Website:</span>(Website )
                        </li>
                        <li>
                          <span>Google:</span>(Google)
                        </li>
                        <li>
                          <span>Tweeter:</span>(Tweeter)
                        </li>
                      </ul>
                    </div>

                    {/* <!-- Start Message --> */}
                    <div id="feedbacks" class="tab-pane fade">
                      <div class="inbox-body inbox-widget">
                        <div class="mail-card">
                          <header
                            class="card-header cursor-pointer collapsed"
                            data-toggle="collapse"
                            data-target="#full-message"
                            aria-expanded="false"
                          >
                            <div class="card-title flexbox">
                              <img
                                class="img-responsive img-circle avatar"
                                src={can1}
                                alt="..."
                              />
                              <div>
                                <h6>Daniel Duke(user)</h6>
                                <small>Today at 07:34 AM</small>
                                <small>
                                  <a
                                    class="text-info collapsed"
                                    href="#detail-view"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                  >
                                    View Detail
                                  </a>
                                </small>

                                <div
                                  class="no-collapsing cursor-text collapse"
                                  id="detail-view"
                                  aria-expanded="false"
                                  //   style="height: 0px;"
                                >
                                  <small class="d-inline-block">From:</small>
                                  <small>
                                    theadmin@thetheme.io(user email)
                                  </small>
                                </div>
                              </div>
                            </div>
                          </header>
                          <div
                            class="collapse"
                            id="full-message"
                            aria-expanded="false"
                            // style="height: 0px;"
                          >
                            <div class="card-body">
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
                    <div id="settings" class="tab-pane fade">
                      <div class="row no-mrg">
                        <h3>Edit Profile</h3>
                        <div class="edit-pro">
                          <div class="col-md-4 col-sm-6">
                            <label>User Name</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="enter name"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>User Email</label>
                            <input
                              type="email"
                              class="form-control"
                              placeholder="username@gmail.com"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>User Phone</label>
                            <input
                              type="number"
                              class="form-control"
                              placeholder="+923445554"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>User Password</label>
                            <input
                              type="password"
                              class="form-control"
                              placeholder="********"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Hostel Name</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Hostel name"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Hostel Email</label>
                            <input
                              type="email"
                              class="form-control"
                              placeholder="hostel@gmail.com"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Hostel City</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="enter city"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Hostel Address</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Hostel address"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Website address</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="website address"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Facebook address </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="address of Facebook"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>google address </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="address of Facebook"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Tweeter address </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="address of Facebook"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>total seats</label>
                            <input
                              type="number"
                              class="form-control"
                              placeholder="total seats"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Remaining seats</label>
                            <input
                              type="number"
                              class="form-control"
                              placeholder="reamining seats"
                            />
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Chair/Table</label>
                            <select
                              class="form-control input-lg"
                              aria-placeholder="Gesyar"
                            >
                              <option selected>Chair/Table</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Gesyar</label>
                            <select
                              class="form-control input-lg"
                              aria-placeholder="Gesyar"
                            >
                              <option selected>Gesyar</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Laundry</label>
                            <select
                              class="form-control input-lg"
                              aria-placeholder="Gesyar"
                            >
                              <option selected>Laundry</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Mess</label>
                            <select
                              class="form-control input-lg"
                              aria-placeholder="Gesyar"
                            >
                              <option selected>Mess</option>
                              <option>2 times</option>
                              <option>3 times</option>
                            </select>
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>AC</label>
                            <select
                              class="form-control input-lg"
                              aria-placeholder="Gesyar"
                            >
                              <option selected>AC</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>

                          <div class="col-md-4 col-sm-6">
                            <label> Generator</label>
                            <select
                              class="form-control input-lg"
                              aria-placeholder="Gesyar"
                            >
                              <option selected>Generator</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>Wifi</label>
                            <select
                              class="form-control input-lg"
                              aria-placeholder="Gesyar"
                            >
                              <option selected>Wifi</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <label>New Password</label>
                            <input
                              type="password"
                              class="form-control"
                              placeholder="*********"
                            />
                          </div>

                          <div class="col-md-4 col-sm-6">
                            <label>About you</label>
                            <textarea
                              class="form-control"
                              placeholder="Write Something"
                            ></textarea>
                          </div>

                          <div class="col-sm-12">
                            <button type="button" class="update-btn">
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
