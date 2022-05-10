import React from "react";
import bgimage from "../assets/img/banner-10.jpg";

const Searchhostel = () => {
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
                  />
                </div>
                <div class="col-md-3 col-sm-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Location: City, State, Zip"
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
                  <button type="submit" class="btn btn-success full-width">
                    Filter
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Company Searrch Filter End --> */}

          <a href="resume-detail.html" class="item-click">
            <article>
              <div class="brows-resume">
                <div class="row no-mrg">
                  <div class="col-md-2 col-sm-2">
                    <div class="brows-resume-pic">
                      <img
                        src="assets/img/can-1.png"
                        class="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-name">
                      <h4>Charles Hopman</h4>
                      <span class="brows-resume-designation">
                        App Developer
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-location">
                      <p>
                        <i class="fa fa-map-marker"></i> Street #210, Make New
                        London
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="browse-resume-rate">
                      <span>
                        <i class="fa fa-money"></i>$15/hour
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row extra-mrg row-skill">
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
                </div>
              </div>
            </article>
          </a>

          <a href="resume-detail.html" class="item-click">
            <article>
              <div class="brows-resume">
                <div class="row no-mrg">
                  <div class="col-md-2 col-sm-2">
                    <div class="brows-resume-pic">
                      <img
                        src="assets/img/can-2.png"
                        class="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-name">
                      <h4>Alexander Weir</h4>
                      <span class="brows-resume-designation">
                        IOS Developer
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-location">
                      <p>
                        <i class="fa fa-map-marker"></i> Saint Paul, MN 55102
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="browse-resume-rate">
                      <span>
                        <i class="fa fa-money"></i>$14/hour
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row extra-mrg row-skill">
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
                        <span class="resume-exp">Exp. 2.5 Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </a>

          <a href="resume-detail.html" class="item-click">
            <article>
              <div class="brows-resume">
                <div class="row no-mrg">
                  <div class="col-md-2 col-sm-2">
                    <div class="brows-resume-pic">
                      <img
                        src="assets/img/can-3.png"
                        class="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-name">
                      <h4>Zara Clow</h4>
                      <span class="brows-resume-designation">Web Designer</span>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-location">
                      <p>
                        <i class="fa fa-map-marker"></i> MOLESWORTH VIC 3718
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="browse-resume-rate">
                      <span>
                        <i class="fa fa-money"></i>$16/hour
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row extra-mrg row-skill">
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
                        <span class="resume-exp">Exp. 4 Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </a>

          <a href="resume-detail.html" class="item-click">
            <article>
              <div class="brows-resume">
                <div class="row no-mrg">
                  <div class="col-md-2 col-sm-2">
                    <div class="brows-resume-pic">
                      <img
                        src="assets/img/can-4.png"
                        class="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-name">
                      <h4>Finn Osman</h4>
                      <span class="brows-resume-designation">
                        App Developer
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-location">
                      <p>
                        <i class="fa fa-map-marker"></i> JOHANNA VIC 3238
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="browse-resume-rate">
                      <span>
                        <i class="fa fa-money"></i>$15.5/hour
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row extra-mrg row-skill">
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
                        <span class="resume-exp">Exp. 3.2 Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </a>

          <a href="resume-detail.html" class="item-click">
            <article>
              <div class="brows-resume">
                <div class="row no-mrg">
                  <div class="col-md-2 col-sm-2">
                    <div class="brows-resume-pic">
                      <img
                        src="assets/img/can-5.png"
                        class="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-name">
                      <h4>Zane Joyner</h4>
                      <span class="brows-resume-designation">
                        PHP Developer
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-location">
                      <p>
                        <i class="fa fa-map-marker"></i> DOYLES CREEK NSW 2330
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="browse-resume-rate">
                      <span>
                        <i class="fa fa-money"></i>$16/hour
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row extra-mrg row-skill">
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
                        <span class="resume-exp">Exp. 4 Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </a>

          <a href="resume-detail.html" class="item-click">
            <article>
              <div class="brows-resume">
                <div class="row no-mrg">
                  <div class="col-md-2 col-sm-2">
                    <div class="brows-resume-pic">
                      <img
                        src="assets/img/can-1.png"
                        class="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-name">
                      <h4>Henry Crooks</h4>
                      <span class="brows-resume-designation">
                        UI/UX Designer
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-location">
                      <p>
                        <i class="fa fa-map-marker"></i> SOUTHERN BROOK WA 6401
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="browse-resume-rate">
                      <span>
                        <i class="fa fa-money"></i>$18/hour
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row extra-mrg row-skill">
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
                        <span class="resume-exp">Exp. 5 Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </a>

          <a href="resume-detail.html" class="item-click">
            <article>
              <div class="brows-resume">
                <div class="row no-mrg">
                  <div class="col-md-2 col-sm-2">
                    <div class="brows-resume-pic">
                      <img
                        src="assets/img/can-2.png"
                        class="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-name">
                      <h4>Taylah Axon</h4>
                      <span class="brows-resume-designation">Html Expert</span>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-location">
                      <p>
                        <i class="fa fa-map-marker"></i> WATERLOO QLD 4673
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="browse-resume-rate">
                      <span>
                        <i class="fa fa-money"></i>$18/hour
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row extra-mrg row-skill">
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
                        <span class="resume-exp">Exp. 4.5 Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </a>

          <a href="resume-detail.html" class="item-click">
            <article>
              <div class="brows-resume">
                <div class="row no-mrg">
                  <div class="col-md-2 col-sm-2">
                    <div class="brows-resume-pic">
                      <img
                        src="assets/img/can-3.png"
                        class="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-name">
                      <h4>Adam Gillwist</h4>
                      <span class="brows-resume-designation">
                        App Developer
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="brows-resume-location">
                      <p>
                        <i class="fa fa-map-marker"></i> Street #210, Make New
                        London
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="browse-resume-rate">
                      <span>
                        <i class="fa fa-money"></i>$15/hour
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row extra-mrg row-skill">
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
                </div>
              </div>
            </article>
          </a>

          <div class="row">
            <ul class="pagination">
              <li>
                <a href="/">&laquo;</a>
              </li>
              <li class="active">
                <a href="/">1</a>
              </li>
              <li>
                <a href="/">2</a>
              </li>
              <li>
                <a href="/">3</a>
              </li>
              <li>
                <a href="/">4</a>
              </li>
              <li>
                <a href="/">
                  <i class="fa fa-ellipsis-h"></i>
                </a>
              </li>
              <li>
                <a href="/">&raquo;</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Searchhostel;
