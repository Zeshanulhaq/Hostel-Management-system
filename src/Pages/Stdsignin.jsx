import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Stdsignin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
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
      const resp = await fetch("http://127.0.0.1:5000/student/login", opt);

      if (resp.status !== 200) {
        alert("there was an error");
        return false;
      }
      const data = await resp.json();

      console.log("this came from the backend", data);
      localStorage.setItem("std_jwt_token", data.access_token);

      return data.access_token && history.push("/");
    } catch (error) {
      console.error("there was an error logging in");
    }
  };

  return (
    <>
      <section class="login-plane-sec">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <div class="login-panel panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Log In</h3>
                </div>
                <div class="panel-body mb-2">
                  <form>
                    <fieldset>
                      <div class="form-group">
                        <input
                          class="form-control"
                          placeholder="E-mail"
                          name="email"
                          type="email"
                          autofocus
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control"
                          placeholder="Password"
                          name="password"
                          type="password"
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                        />
                      </div>
                      <Link
                        to="/Hostelprofile"
                        class="btn btn-login"
                        onClick={handleSubmit}
                      >
                        Login
                      </Link>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stdsignin;
