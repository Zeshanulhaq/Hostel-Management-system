import { useState } from "react";
import axios from "axios";
const HostelLogin = () => {
  const [ownername, setownername] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");

  // const history = useNavigate();
  // const useremail = localStorage.getItem("email");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("hostel/signup", {
        ownername: ownername,
        email: email,
        phone: phone,
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.warn(err));
    console.log(email, password, phone, ownername, Confirmpassword);

    alert("Successfully Registered ");
    setemail("");
    setpassword("");
    setownername("");
    setphone("");
    setConfirmpassword("");
  };
  const onClear = (e) => {
    e.preventDefault();
    setemail("");
    setpassword("");
    setownername("");
    setphone("");
    setConfirmpassword("");
  };
  return (
    <>
      <div className="wrapper">
        {/* <!-- Accordion Design Start --> */}
        <section className="accordion">
          <div className="container">
            <div className="row">
              {/* <!-- Billing Address --> */}
              <div class="col-md-6 col-sm-6">
                <div class="sidebar-wrapper">
                  <div class="sidebar-box-header bb-1">
                    <h4>Create An Account</h4>
                  </div>

                  <form class="billing-form">
                    <div class="row">
                      <div class="col-xs-12">
                        <label>User Name</label>
                        <input
                          type="text"
                          value={ownername}
                          onChange={(e) => setownername(e.target.value)}
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-6">
                        <label>Phone</label>
                        <input
                          type="text"
                          class="form-control"
                          value={phone}
                          onChange={(e) => setphone(e.target.value)}
                        />
                      </div>
                      <div class="col-xs-6">
                        <label>Email</label>
                        <input
                          type="email"
                          class="form-control"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-6">
                        <label>Password</label>
                        <input
                          type="password"
                          class="form-control"
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                        />
                      </div>
                      <div class="col-xs-6">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          class="form-control"
                          value={Confirmpassword}
                          onChange={(e) => setConfirmpassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="row mrg-top-30">
                      <div class="col-md-12 text-center">
                        <a
                          href="/"
                          class="btn btn-success"
                          onClick={handleSubmit}
                        >
                          SignUp
                        </a>
                        <a href="/" class="btn btn-default" onClick={onClear}>
                          Clear
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Accordion Design End --> */}
      </div>
    </>
  );
};

export default HostelLogin;
