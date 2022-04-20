import React from "react";

const Stdsignin = () => {
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
                        />
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control"
                          placeholder="Password"
                          name="password"
                          type="password"
                          value=""
                        />
                      </div>
                      <a href="index-2.html" class="btn btn-login">
                        Sign Up
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

export default Stdsignin;
