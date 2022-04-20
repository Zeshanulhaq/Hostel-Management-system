import React from "react";
import bg from "../assets/img/banner-10.jpg";
const Contactus = () => {
  return (
    <>
      <section
        class="inner-header-title"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div class="container">
          <h1>Contact Page</h1>
        </div>
      </section>
      <div class="clearfix"></div>
      {/* <!-- Title Header End --> */}

      {/* <!-- Contact Page Section Start --> */}
      <section class="contact-page">
        <div class="container">
          <h2>You Can contact </h2>

          <div class="col-md-4 col-sm-4">
            <div class="contact-box">
              <i class="fa fa-map-marker"></i>
              <p>#address of hostel</p>
              <p> London Uk (122546)</p>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="contact-box">
              <i class="fa fa-envelope"></i>
              <p>(hostel email)careerdesk12@gmail.com </p>
              <p>support@careerdesk.com</p>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="contact-box">
              <i class="fa fa-phone"></i>
              <p>(hostel number)UK: 01 123 456 7895</p>
              <p>Ind: +91 123 546 8758</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
