import React from "react";

const HostelLogin = () => {
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
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-6">
                        <label>Phone</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="col-xs-6">
                        <label>Email</label>
                        <input type="email" class="form-control" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-6">
                        <label>Password</label>
                        <input type="password" class="form-control" />
                      </div>
                      <div class="col-xs-6">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control" />
                      </div>
                    </div>

                    <div class="row mrg-top-30">
                      <div class="col-md-12 text-center">
                        <a href="/" class="btn btn-success">
                          SignUp
                        </a>
                        <a href="/" class="btn btn-default">
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
