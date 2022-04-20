import React from "react";
import bg from "../assets/img/banner-10.jpg";
import client1 from "../assets/img/client-1.jpg";

const HostelDetails = () => {
  return (
    <>
      <div class="Loader"></div>
      <div class="wrapper">
        <section class="inner-header-title" style={{ bg }}>
          <div class="container">
            <h1>Hostel Detail</h1>
          </div>
        </section>
        <div class="clearfix"></div>
        {/* <!-- Title Header End --> */}

        {/* <!-- Resume Detail Start --> */}
        <section class="detail-desc">
          <div class="container white-shadow">
            <div class="row mrg-0">
              <div class="detail-pic">
                <img src={client1} class="img" alt="" />
                <a href="/" class="detail-edit" title="edit">
                  <i class="fa fa-pencil"></i>
                </a>
              </div>
            </div>
            <div class="row bottom-mrg mrg-0">
              <div class="col-md-8 col-sm-8">
                <div class="detail-desc-caption">
                  <h4>hostel ownername</h4>
                  <span class="designation">hostel name</span>
                  <p>about this hostel.</p>
                </div>
              </div>
              <div class="col-md-4 col-sm-4">
                <div class="get-touch">
                  <h4>Get in Touch</h4>
                  <ul>
                    <li>
                      <i class="fa fa-map-marker"></i>
                      <span>hostel address</span>
                    </li>
                    <li>
                      <i class="fa fa-envelope"></i>
                      <span>hostel@gmail.com</span>
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>
                      <span>034344</span>
                    </li>
                    <li>
                      <i class="fa fa-money"></i>
                      <span>available seat</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Resume Detail End --> */}

        <section class="full-detail-description full-detail">
          <div class="container">
            <div class="row row-bottom mrg-0">
              <h2 class="detail-title">Services</h2>

              <ul class="job-detail-des" style={{ color: "blue" }}>
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
                  {}
                </li>
              </ul>
            </div>

            <div class="row row-bottom mrg-0">
              <h2 class="detail-title">socialmedia</h2>

              <ul class="job-detail-des" style={{ color: "blue" }}>
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
          </div>
          <section class="container">
            <h2 class="detail-title">FeedBack</h2>
            <div class="row no-mrg">
              <div class="comments">
                <div class="section-title2">
                  <h3>Comments</h3>
                </div>

                <div class="single-comment">
                  <div class="img-holder">
                    <img
                      src="assets/img/blog/1.jpg"
                      class="img-responsive"
                      alt="1image"
                    />
                  </div>
                  <div class="text-holder">
                    <div class="top">
                      <div class="name pull-left">
                        <h4>Daniel Dax – Feb 10, 2017</h4>
                      </div>
                    </div>
                    <div class="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row no-mrg">
              <div class="comments-form">
                <div class="section-title2">
                  <h3>Comment</h3>
                </div>
                <form>
                  <div class="col-md-12 col-sm-12">
                    <textarea
                      class="form-control"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <button class="thm-btn btn-comment" type="submit">
                    submit now
                  </button>
                </form>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default HostelDetails;
