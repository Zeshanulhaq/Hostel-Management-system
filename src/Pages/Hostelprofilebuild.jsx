import { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import AuthContext from "../store/auth-context";

const Hostelprofilebuild = () => {
  const [hostelname, sethostelname] = useState("");
  const [hostelphone, sethostelphone] = useState("");
  const [hostelemail, sethostelemail] = useState("");
  const [address, setaddress] = useState("");
  const [image, setimage] = useState("");
  const imageInputRef = useRef();
  const [preview, setpreview] = useState("");

  const [city, setcity] = useState("");
  const [totalseats, settotalseats] = useState("");
  const [remseats, setremseats] = useState("");
  const [hstldescription, sethstldescription] = useState("");
  const [accountapproved, setaccountapproved] = useState("");

  const [wifi, setwifi] = useState("");
  const [laundry, setlaundry] = useState("");
  const [AC, setAC] = useState("");
  const [mess, setmess] = useState("");
  const [generator, setgenerator] = useState("");
  const [geysar, setgeysar] = useState("");
  const [chair_table, setchair_table] = useState("");

  const [facebook, setfacebook] = useState("");
  const [google, setgoogle] = useState("");
  const [website, setwebsite] = useState("");
  const [tweeter, settweeter] = useState("");

  const jwtToken = localStorage.getItem("jwt");

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setpreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setpreview(null);
    }
  }, [image]);

  // const authctx = useContext(AuthContext);

  const profileBuildHandler = (e) => {
    e.preventDefault();
    console.log(jwtToken);
    axios
      .post("build/hostel/portfolio", {
        hostel_name: hostelname,
        hostel_phone: hostelphone,
        hostel_email: hostelemail,
        address: address,
        image: image,
        city: city,
        about: hstldescription,
        total_seats: totalseats,
        rem_seats: remseats,
        account_approved: accountapproved,
        wifi: wifi,
        laundry: laundry,
        AC: AC,
        mess: mess,
        generator: generator,
        geysar: geysar,
        chairtable: chair_table,
        facebook: facebook,
        google,
        website,
        tweeter,
      })
      .then((res) => console.log(res))
      .catch((err) => console.warn(err));
  };

  return (
    <>
      <div className="Loader"></div>
      <div className="wrapper">
        <div className="clearfix"></div>

        {/* <!-- Header Title Start --> */}

        <section className="inner-header-title blank">
          <div className="container">
            <h1>Create Hostel Portfolio</h1>
          </div>
        </section>
        <div className="clearfix"></div>

        {/* <!-- Header Title End --> */}

        {/* <!-- General Detail Start --> */}

        <div className="section detail-desc">
          <div className="container white-shadow">
            <div className="row">
              <div className="detail-pic js">
                <div className="box">
                  <input
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setimage(file);
                      } else {
                        setimage(null);
                      }
                    }}
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    name="upload-pic[]"
                    id="upload-pic"
                    className="inputfile"
                  />

                  {preview ? (
                    <img
                      alt=""
                      src={preview}
                      style={{ objectFit: "cover" }}
                      onClick={() => {
                        setimage(null);
                      }}
                    />
                  ) : (
                    <label
                      onClick={(e) => {
                        e.preventDefault();
                        imageInputRef.current.click();
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "5rem",
                      }}
                    >
                      <i className="fa fa-upload" aria-hidden="true"></i>
                      <span></span>
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className="row bottom-mrg">
              <form className="add-feild">
                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <input
                      value={hostelname}
                      onChange={(e) => sethostelname(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Hostel Name"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <input
                      value={hostelemail}
                      onChange={(e) => sethostelemail(e.target.value)}
                      type="email"
                      className="form-control"
                      placeholder="hostel Email"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <input
                      value={hostelphone}
                      onChange={(e) => sethostelphone(e.target.value)}
                      type="number"
                      className="form-control"
                      placeholder="Hostel phone"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <select
                      value={city}
                      onChange={(e) => setcity(e.target.value)}
                      className="form-control input-lg"
                    >
                      <option>Select city</option>
                      <option>Islamabad</option>
                      <option>lahore</option>
                      <option>Wah</option>
                      <option>karachi</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-12 col-sm-12">
                  <textarea
                    value={hstldescription}
                    onChange={(e) => sethstldescription(e.target.value)}
                    className="form-control"
                    placeholder="Description about hostel"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- General Detail End --> */}

        {/* <!-- full detail SetionStart--> */}
        <section className="full-detail">
          <div className="container">
            <div className="row bottom-mrg extra-mrg">
              <form>
                <h2 className="detail-title">General Information</h2>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="hostel Address"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-globe"></i>
                    </span>
                    <input
                      value={website}
                      onChange={(e) => setwebsite(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Website Address(opt)"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-facebook"></i>
                    </span>
                    <input
                      value={facebook}
                      onChange={(e) => setfacebook(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Profile Link(opt)"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-google-plus"></i>
                    </span>
                    <input
                      value={google}
                      onChange={(e) => setgoogle(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Profile Link(opt)"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-twitter"></i>
                    </span>
                    <input
                      value={tweeter}
                      onChange={(e) => settweeter(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Profile Link(opt)"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">Total seats</span>
                    <input
                      value={totalseats}
                      onChange={(e) => settotalseats(e.target.value)}
                      type="number"
                      className="form-control"
                      placeholder="enter total number of seats "
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">Rem. seats</span>
                    <input
                      value={remseats}
                      onChange={(e) => setremseats(e.target.value)}
                      type="number"
                      className="form-control"
                      placeholder="available seats"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="row bottom-mrg extra-mrg">
              <form>
                <h2 className="detail-title">Our Services</h2>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <select
                      value={wifi}
                      onChange={(e) => setwifi(e.target.value)}
                      className="form-control input-lg"
                      placeholder="Wifi"
                    >
                      <option>Wifi</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <select
                      value={geysar}
                      onChange={(e) => setgeysar(e.target.value)}
                      className="form-control input-lg"
                      placeholder="Gesyar"
                    >
                      <option>Gesyar</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <select
                      value={AC}
                      onChange={(e) => setAC(e.target.value)}
                      className="form-control input-lg"
                      placeholder="Select AC"
                    >
                      <option>AC</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <select
                      value={laundry}
                      onChange={(e) => setlaundry(e.target.value)}
                      className="form-control input-lg"
                      placeholder="Select laundry"
                    >
                      <option>Laundry</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <select
                      value={chair_table}
                      onChange={(e) => setchair_table(e.target.value)}
                      className="form-control input-lg"
                      placeholder="chair/table"
                    >
                      <option>chair/table</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <select
                      value={generator}
                      onChange={(e) => setgenerator(e.target.value)}
                      className="form-control input-lg"
                      placeholder="Generator"
                    >
                      <option>Generator</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <select
                      value={mess}
                      onChange={(e) => setmess(e.target.value)}
                      className="form-control input-lg"
                      placeholder="mess"
                    >
                      <option>Mess</option>
                      <option>2 times</option>
                      <option>3 Times</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="row bottom-mrg extra-mrg">
              <form onSubmit={profileBuildHandler}>
                <div className="col-md-12">
                  <button className="btn btn-success btn-primary small-btn">
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
