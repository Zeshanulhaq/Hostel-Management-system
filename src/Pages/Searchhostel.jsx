import axios from "axios";
import { useState, useEffect } from "react";
import bgimage from "../assets/img/banner-10.jpg";

const Searchhostel = () => {
  const std_jwt_token = localStorage.getItem("std_jwt_token");

  const [city, setcity] = useState("");
  const [hostelname, sethostelname] = useState("");
  const [hstldata, sethstldata] = useState("");
  const [data, setdata] = useState("");
  const [filterpressed, setfilterpressed] = useState(false);

  const handleSubmit = (e) => {
    setfilterpressed(true);
    e.preventDefault();
    axios
      .post("/search/hostel", {
        city: city,
        hostelname: hostelname,
      })
      .then((response) => {
        console.log(response);
        sethstldata(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    axios
      .get("get/hostel/list", {
        headers: { Authorization: `Bearer ${std_jwt_token}` },
      })
      .then((response) => {
        console.log(response);
        setdata(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [std_jwt_token]);

  return (
    <>
      <section
        class="inner-header-title"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div class="container">
          <h1>Browse Hostels</h1>
        </div>
      </section>
      <div class="clearfix"></div>
      {/* <!-- Title Header End --> */}

      {/* <!-- Browse Resume List Start --> */}
      <section class="manage-company">
        <div class="container">
          {/* <!-- Company Searrch Filter Start --> */}
          <div class="row extra-mrg">
            <div class="wrap-search-filter">
              <form>
                <div class="col-md-4 col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Keyword: Name, Tag"
                    value={hostelname}
                    onChange={(e) => sethostelname(e.target.value)}
                  />
                </div>
                <div class="col-md-3 col-sm-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Location: City, State, Zip"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                  />
                </div>
                <div class="col-md-3 col-sm-3">
                  <select
                    class="selectpicker form-control"
                    multiple
                    title="All Categories"
                  >
                    <option>Information Technology</option>
                    <option>Mechanical</option>
                    <option>Hardware</option>
                  </select>
                </div>
                <div class="col-md-2 col-sm-2">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    class="btn btn-success full-width"
                  >
                    Filter
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Company Searrch Filter End --> */}

          {!filterpressed && (
            <div class="row extra-mrg">
              {/* <!-- single item of hostel --> */}
              {data.length > 0 &&
                data.map((data) => (
                  <div key={data.id} class="col-md-4 col-sm-6">
                    <div class="grid-view brows-job-list">
                      <div class="brows-job-company-img">
                        <img src={data.image} class="img-responsive" alt="" />
                      </div>
                      <div class="brows-job-position">
                        <h3>
                          <a href="hostel_details.html">{data.hostel_name}</a>
                        </h3>
                        <p>
                          <span>{data.hostel_phone}</span>
                        </p>
                      </div>
                      <div class="job-position">
                        <span class="job-num">{data.rem_seats}</span>
                      </div>

                      <ul class="grid-view-caption">
                        <li>
                          <div class="brows-job-location">
                            <p>
                              <i class="fa fa-map-marker"></i> {data.address}
                            </p>
                          </div>
                        </li>
                        <li>
                          <p>
                            <span class="brows-job-sallery">
                              <i class="fa fa-phone"></i>hostel phone
                            </span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              {/* <!-- end of hostel item --> */}
            </div>
          )}

          <a href="resume-detail.html" class="item-click">
            <article>
              {hstldata.length > 0 &&
                hstldata.map((row) => (
                  <div class="brows-resume">
                    <div class="row no-mrg" key={row.id}>
                      <div class="col-md-2 col-sm-2">
                        <div class="brows-resume-pic">
                          <img src={row.image} class="img-responsive" alt="" />
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-4">
                        <div class="brows-resume-name">
                          <h4>{row.hostel_name}</h4>
                          <span class="brows-resume-designation">
                            {row.hostel_phone}
                          </span>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-4">
                        <div class="brows-resume-location">
                          <p>
                            <i class="fa fa-map-marker"></i>
                            {row.address}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-2 col-sm-2">
                        <div class="browse-resume-rate">
                          <span>
                            Remaining Seats
                            <br />
                            {row.rem_seats}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* <div class="row extra-mrg row-skill">
                  <div class="browse-resume-skills">
                    <div class="col-md-9 col-sm-8">
                      <div class="br-resume">
                        <span>css</span>
                        <span>html</span>
                        <span>photoshop</span>
                        <span>wordpress</span>
                        <span>css</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-4">
                      <div class="browse-resume-exp">
                        <span class="resume-exp">Exp. 3 Year</span>
                      </div>
                    </div>
                  </div>
                </div> */}
                  </div>
                ))}
            </article>
          </a>
        </div>
      </section>
    </>
  );
};

export default Searchhostel;
