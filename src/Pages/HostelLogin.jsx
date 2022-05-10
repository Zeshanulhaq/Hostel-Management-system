import axios from "axios";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";

const HostelLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const authctx = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const opt = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    try {
      const resp = await fetch("http://127.0.0.1:5000/hostel/login", opt);

      if (resp.status !== 200) {
        alert("there was an error");
        return false;
      }
      const data = await resp.json();

      console.log("this came from the backend", data);
      localStorage.setItem("jwt", data.access_token);

      return true;
    } catch (error) {
      console.error("there was an error logging in");
    }
  };
  const onClear = (e) => {
    setemail("");
    setpassword("");
  };
  // const isAuthenticated = sessionStorage.getItem("token");
  // console.log("page is authenticated", isAuthenticated);
  return (
    <>
      <div className="wrapper">
        {/* <!-- Accordion Design Start --> */}
        <section className="accordion">
          <div className="container">
            <div className="row">
              {/* <!-- Payment Detail --> */}
              <div className="col-md-6 col-sm-6">
                <div className="sidebar-wrapper">
                  <div className="sidebar-box-header bb-1">
                    <h4>LogIn Your Account</h4>
                  </div>

                  <form className="billing-form">
                    <div className="row">
                      <div className="col-xs-12">
                        <label> Email</label>
                        <input
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12">
                        <label>Password</label>
                        <input
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                          type="password"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 text-center mrg-top-25">
                        <a
                          href="/"
                          className="btn btn-success"
                          onClick={handleSubmit}
                        >
                          LogIn
                        </a>
                        <a
                          href="/"
                          className="btn btn-default"
                          onClick={onClear}
                        >
                          clear
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
