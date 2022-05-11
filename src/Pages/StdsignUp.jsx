import { useState } from "react";
import axios from "axios";

const StdsignUp = () => {
  const [name, setname] = useState("");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("student/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.warn(err));
    console.log(name, email, password, Confirmpassword);

    alert("Successfully Registered ");
    setname("");
    setemail("");
    setpassword("");

    setConfirmpassword("");
  };
  return (
    <>
      <section class="login-plane-sec">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <div class="login-panel panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Create An Account</h3>
                </div>
                <div class="panel-body">
                  <form>
                    <fieldset>
                      <div class="form-group">
                        <input
                          class="form-control"
                          placeholder="User Name"
                          name="text"
                          type="email"
                          autofocus
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                        />
                      </div>
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

                      {/* <!-- Change this to a button or input when using this as a form --> */}
                      <a
                        href="index-2.html"
                        class="btn btn-login"
                        onClick={handleSubmit}
                      >
                        Signup
                      </a>
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

export default StdsignUp;
