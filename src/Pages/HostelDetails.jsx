import { useEffect, useState } from "react";
import bg from "../assets/img/banner-10.jpg";
import client1 from "../assets/img/client-1.jpg";
import axios from "axios";

const HostelDetails = () => {
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
        <section className="inner-header-title" style={{ bg }}>
          <div className="container">
            <h1>{hstldata.hostel_name}</h1>
          </div>
        </section>
        <div className="clearfix"></div>
        {/* <!-- Title Header End --> */}

        {/* <!-- Resume Detail Start --> */}
        <section className="detail-desc">
          <div className="container white-shadow">
            <div className="row mrg-0">
              <div className="detail-pic">
                <img src={client1} className="img" alt="" />
                <a href="/" className="detail-edit" title="edit">
                  <i className="fa fa-pencil"></i>
                </a>
              </div>
            </div>
            <div className="row bottom-mrg mrg-0">
              <div className="col-md-8 col-sm-8">
                <div className="detail-desc-caption">
                  <h4>{hstldata.ownername} </h4>
                  <span className="designation">{hstldata.hostel_name}</span>
                  <p>about this hostel.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="get-touch">
                  <h4>Get in Touch</h4>
                  <ul>
                    <li>
                      <i className="fa fa-map-marker"></i>
                      <span>{hstldata.address} </span>
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>
                      <span>{hstldata.email}</span>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>
                      <span>{hstldata.phone} </span>
                    </li>
                    <li>
                      <i className="fa fa-money"></i>
                      <span>{hstldata.rem_seats}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Resume Detail End --> */}

        <section className="full-detail-description full-detail">
          <div className="container">
            <div className="row row-bottom mrg-0">
              <h2 className="detail-title">Services</h2>

              <ul className="job-detail-des" style={{ color: "blue" }}>
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

            <div className="row row-bottom mrg-0">
              <h2 className="detail-title">socialmedia</h2>

              <ul className="job-detail-des" style={{ color: "blue" }}>
                <li>
                  <span>Facebook:</span>
                  {social.facebook}
                </li>
                <li>
                  <span>Website:</span>
                  {social.website}
                </li>
                <li>
                  <span>Google:</span>
                  {social.google}
                </li>
                <li>
                  <span>Tweeter:</span>
                  {social.tweeter}
                </li>
              </ul>
            </div>
          </div>
          <section className="container">
            <h2 className="detail-title">FeedBack</h2>
            <div className="row no-mrg">
              <div className="comments">
                <div className="section-title2">
                  <h3>Comments</h3>
                </div>

                {comnts.length > 0 &&
                  comnts.map((comnt) => (
                    <div className="single-comment" key={comnt.student_id}>
                      <div className="img-holder">
                        <img
                          src="assets/img/blog/1.jpg"
                          className="img-responsive"
                          alt="1image"
                        />
                      </div>
                      <div className="text-holder">
                        <div className="top">
                          <div className="name pull-left">
                            <h4>
                              {comnt.name} – {comnt.time}
                            </h4>
                          </div>
                        </div>
                        <div className="text">
                          <p>{comnt.feedback}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="row no-mrg">
              <div className="comments-form">
                <div className="section-title2">
                  <h3>Comment</h3>
                </div>
                <form>
                  <div className="col-md-12 col-sm-12">
                    <textarea
                      className="form-control"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <button className="thm-btn btn-comment" type="submit">
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
