import React, { useEffect } from "react";
import Layout from "../../layout";
import BannerSection from "../../components/bannerSection";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout hideCarrerForm={true}>
      <BannerSection
        heading={"We Want To Hear From You"}
        content={
          "Questions? Contact us with the form below and we’ll reach out  within two business days."
        }
        contectBanner={true}
      />
      <div className="contact__form" data-aos="fade-up">
        <div className="form__section">
          <form action="">
            <div className="form_inner">
              <div className="form-group">
                <label for="">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label for="">Email Address</label>
                <input
                  type="email"
                  required
                  className="form-control"
                  placeholder="Enter email address"
                />
              </div>
              <div className="form-group">
                <label for="">Phone Number</label>
                <input
                  type="number"
                  required
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="form-group">
                <label for="">Company</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter company name"
                />
              </div>
              <div className="form-group full">
                <label for="">Message</label>
                <textarea
                  className="form-control"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <div className="form-group full check__box">
                <div className="check">
                  <input type="checkbox" />
                  <label for="">I’m not a robot</label>
                </div>
                <button className="btn">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
