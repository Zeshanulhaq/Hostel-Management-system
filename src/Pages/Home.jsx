import React from "react";
import background from "../assets/img/banner-9.jpg";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div
          className="banner"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container">
            <div className="banner-caption">
              <div className="col-md-12 col-sm-12 banner-text">
                <h1>20+ Browse Hostels</h1>

                <form className="form-horizontal">
                  <div className="col-md-4 no-padd">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control right-bor"
                        id="joblist"
                        placeholder="Skills, Designations, Companies"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 no-padd">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control right-bor"
                        id="location"
                        placeholder="Search By Location.."
                      />
                    </div>
                  </div>
                  <div className="col-md-3 no-padd">
                    <div className="input-group">
                      <select id="choose-city" className="form-control">
                        <option>Choose City</option>
                        <option>Chandigarh</option>
                        <option>London</option>
                        <option>England</option>
                        <option>Pratapcity</option>
                        <option>Ukrain</option>
                        <option>Wilangana</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 no-padd">
                    <div className="input-group">
                      <button type="submit" className="btn btn-primary">
                        Search Job
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="clearfix"></div>
        <section>
          <div className="container">
            <div className="row">
              <div className="main-heading">
                <p>20 New Hostels</p>

                <h2>
                  New & Random <span>Hostels</span>
                </h2>
              </div>
            </div>
            <div className="row extra-mrg">
              <div className="col-md-3 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img
                      src="assets/img/com-1.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-detail.html">Web Developer</a>
                    </h3>

                    <p>
                      <span>Google</span>
                    </p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="part-time">Part Time</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$110 - 200
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img
                      src="assets/img/com-2.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-detail.html">Web Developer</a>
                    </h3>

                    <p>
                      <span>Google</span>
                    </p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="freelanc">Freelancer</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$110 - 200
                        </span>
                      </p>
                    </li>
                  </ul>
                  <span className="tg-themetag tg-featuretag">Premium</span>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img
                      src="assets/img/com-7.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-detail.html">Web Developer</a>
                    </h3>

                    <p>
                      <span>Google</span>
                    </p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="freelanc">Freelancer</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$110 - 200
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="clearfix"></div>
        <section
          className="video-sec dark"
          id="video"
          style="background-image:url(assets/img/banner-10.jpg);"
        >
          <div className="container">
            <div className="row">
              <div className="main-heading">
                <p>Best For Your Projects</p>

                <h2>
                  Watch Our <span>video</span>
                </h2>
              </div>
            </div>
            <div className="video-part">
              <a
                href="#"
                data-toggle="modal"
                data-target="#my-video"
                className="video-btn"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </section>
        <div className="clearfix"></div>
        <section className="how-it-works">
          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-md-12">
                <div className="main-heading">
                  <p>Working Process</p>

                  <h2>
                    How It <span>Works</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="working-process">
                  <span className="process-img">
                    <img
                      src="assets/img/step-1.png"
                      className="img-responsive"
                      alt=""
                    />
                    <span className="process-num">01</span>
                  </span>
                  <h4>Create An Account</h4>

                  <p>
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers find place best.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="working-process">
                  <span className="process-img">
                    <img
                      src="assets/img/step-2.png"
                      className="img-responsive"
                      alt=""
                    />
                    <span className="process-num">02</span>
                  </span>
                  <h4>Search Jobs</h4>

                  <p>
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers find place best.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="working-process">
                  <span className="process-img">
                    <img
                      src="assets/img/step-3.png"
                      className="img-responsive"
                      alt=""
                    />
                    <span className="process-num">03</span>
                  </span>
                  <h4>Save & Apply</h4>

                  <p>
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers find place best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Home;
