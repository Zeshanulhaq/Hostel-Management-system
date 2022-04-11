import React from "react";

const HostelSignupLogin = () => {
  return (
    <>
      <div className="wrapper">
        {/* <!-- Accordion Design Start --> */}
        <section className="accordion">
          <div className="container">
            <div className="row">
              {/* <!-- Billing Address --> */}
              <div className="col-md-6 col-sm-6">
                <div className="sidebar-wrapper">
                  <div className="sidebar-box-header bb-1">
                    <h4>Create An Account</h4>
                  </div>

                  <form className="billing-form">
                    <div className="row">
                      <div className="col-xs-12">
                        <label>User Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        <label>Phone</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-xs-6">
                        <label>Email</label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        <label>Password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="col-xs-6">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" />
                      </div>
                    </div>

                    <div className="row mrg-top-30">
                      <div className="col-md-12 text-center">
                        <a href="#" className="btn btn-success">
                          SignUp
                        </a>
                        <a href="#" className="btn btn-default">
                          Clear
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

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
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12">
                        <label>Password</label>
                        <input type="password" className="form-control" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 text-center mrg-top-25">
                        <a href="#" className="btn btn-success">
                          LogIn
                        </a>
                        <a href="#" className="btn btn-default">
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

export default HostelSignupLogin;
