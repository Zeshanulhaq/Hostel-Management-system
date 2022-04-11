import React from "react";

const Hostelprofilebuild = () => {
  return (
    <>
      <div class="Loader"></div>
      <div class="wrapper">
        <div class="clearfix"></div>

        {/* <!-- Header Title Start --> */}

        <section class="inner-header-title blank">
          <div class="container">
            <h1>Create Hostel Portfolio</h1>
          </div>
        </section>
        <div class="clearfix"></div>

        {/* <!-- Header Title End --> */}

        {/* <!-- General Detail Start --> */}

        <div class="section detail-desc">
          <div class="container white-shadow">
            <div class="row">
              <div class="detail-pic js">
                <div class="box">
                  <input
                    type="file"
                    name="upload-pic[]"
                    id="upload-pic"
                    class="inputfile"
                  />
                  <label for="upload-pic">
                    <i class="fa fa-upload" aria-hidden="true"></i>
                    <span></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="row bottom-mrg">
              <form class="add-feild">
                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Hostel Name"
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="hostel Email"
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Hostel phone"
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <select
                      class="form-control input-lg"
                      aria-placeholder="Select City"
                    >
                      <option selected>Select city</option>
                      <option>Islamabad</option>
                      <option>lahore</option>
                      <option>Wah</option>
                      <option>karachi</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-12 col-sm-12">
                  <textarea
                    class="form-control"
                    placeholder="Description about hostel"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- General Detail End --> */}

        {/* <!-- full detail SetionStart--> */}
        <section class="full-detail">
          <div class="container">
            <div class="row bottom-mrg extra-mrg">
              <form>
                <h2 class="detail-title">General Information</h2>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="hostel Address"
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-globe"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Website Address(opt)"
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-facebook"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Profile Link(opt)"
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-google-plus"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Profile Link(opt)"
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-twitter"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Profile Link(opt)"
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <span class="input-group-addon">Total seats</span>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="enter total number of seats "
                    />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <span class="input-group-addon">Rem. seats</span>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="available seats"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="row bottom-mrg extra-mrg">
              <form>
                <h2 class="detail-title">Our Services</h2>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <select
                      class="form-control input-lg"
                      aria-placeholder="Wifi"
                    >
                      <option selected>Wifi</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <select
                      class="form-control input-lg"
                      aria-placeholder="Gesyar"
                    >
                      <option selected>Gesyar</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <select
                      class="form-control input-lg"
                      aria-placeholder="Select AC"
                    >
                      <option selected>AC</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <select
                      class="form-control input-lg"
                      aria-placeholder="Select laundry"
                    >
                      <option selected>Laundry</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <select
                      class="form-control input-lg"
                      aria-placeholder="chair/table"
                    >
                      <option selected>chair/table</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <select
                      class="form-control input-lg"
                      aria-placeholder="Generator"
                    >
                      <option selected>Generator</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <select
                      class="form-control input-lg"
                      aria-placeholder="mess"
                    >
                      <option selected>Mess</option>
                      <option>2 times</option>
                      <option>3 Times</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div class="row bottom-mrg extra-mrg">
              <form>
                <div class="col-md-12">
                  <button class="btn btn-success btn-primary small-btn">
                    Submit your hostel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hostelprofilebuild;
