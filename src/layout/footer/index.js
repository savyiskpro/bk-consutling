import React from "react";
import { Imagesdata } from "../../assets/images/imageData";
import { NavLink } from "react-router-dom";

function Footer({ hideCarrerForm }) {
  const { BlackArrow, LogoBlack, BtnIcon, MailIcon, PhoneIcon, LocationIcon } =
    Imagesdata || {};
  return (
    <>
      {!hideCarrerForm && (
        <div className="intersted__carrer" data-aos="fade-up">
          <div className="container">
            <ul className="flex space-between align-center">
              <li>
                <h2>
                  Are you interested in taking the <br /> next step in your
                  career?{" "}
                </h2>
                <p>Cras habitant quisque pellentesque pellentesque aliquam.</p>
              </li>
              <li>
                <a href="#" className="btn">
                  Connect with us <img src={BlackArrow} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <footer data-aos="fade-up">
        <div className="container">
          <div className="footer__nav flex space-between align-center">
            <div className="logo">
              <NavLink to="/">
                <figure>
                  <img src={LogoBlack} alt="" />
                </figure>
              </NavLink>
            </div>
            <ul className="flex align-center">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/career">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="row flex space-between">
            <div className="col">
              <div className="sign-up">
                <h6>
                  Sign up to our newsletter for the latest <br /> news and
                  research in business psychology.
                </h6>
                <form action="">
                  <div className="form-group">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="form-control"
                    />
                    <button className="btn">
                      Subscribe{" "}
                      <figure>
                        <img src={BtnIcon} alt="" />
                      </figure>{" "}
                    </button>
                  </div>
                </form>
              </div>
              <ul className="flex">
                <li>
                  <figure>
                    <img src={MailIcon} alt="" />
                  </figure>
                </li>
                <li>
                  <a href="mailto:admin@bkconsults.com">admin@bkconsults.com</a>
                  <a href="mailto:info@bkconsults.com">info@bkconsults.com</a>
                </li>
                <li>
                  <figure>
                    <img src={LocationIcon} alt="" />
                  </figure>
                </li>
                <li>
                  <address>
                    BK Consulting <br />
                    Herndon, VA 20170
                  </address>
                </li>
                <li>
                  <figure>
                    <img src={PhoneIcon} alt="" />
                  </figure>
                </li>
                <li>
                  <a href="tel:571-293-0631">571-293-0631</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="social_media">
                <h6>Follow us on social media</h6>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
                <div className="btn_wrapper">
                  <a href="#" className="btn">
                    Get In Touch{" "}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="copy-right">
                <p>
                  Copyright © 2023 BK Consulting. All rights reserved.{" "}
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
