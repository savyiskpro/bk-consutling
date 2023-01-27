import React, { useEffect, useState } from "react";
import { Imagesdata } from "../../assets/images/imageData";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { Logo, PhoneIcon, MailIcon, BlackArrow } = Imagesdata || {};
  const [isNavOpen, SetIsNavOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  const toggleHandler = (val) => {
    if (val) {
      // document.html.classList.add("active");
      document.body.style.overflow = "hidden";
    } else {
      // document.html.classList.add("actives");
      document.body.style.overflow = "auto";
      // overflow-x: hidden;
    }
    SetIsNavOpen(val);
  };
  return (
    <>
      <header className={isNavOpen ? "active" : ""}>
        <div className="container flex align-center">
          <div className="logo">
            <NavLink to="/">
              <figure>
                <img src={Logo} alt="" />
              </figure>
            </NavLink>
          </div>
          <nav className={isNavOpen ? "active" : ""}>
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
              <li>
                <div className="toggle">
                  <span></span>
                  <span></span>
                </div>
              </li>
            </ul>
          </nav>
          <div
            className={
              isNavOpen ? "toggle mobile-toggle active" : "toggle mobile-toggle"
            }
            onClick={() => toggleHandler(!isNavOpen)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <div className={isNavOpen ? "main-menu active" : "main-menu"}>
        <div className="flex inner-box">
          <p className="copyright-text">Copyright © 2012 BK Consulting.</p>
          <div className="box">
            <div className="logo">
              <a href="./index.html">
                <figure>
                  <img src={Logo} alt="" />
                </figure>
              </a>
            </div>
            <ul className="extra-links">
              <li>
                <img src={MailIcon} />
                <a href="mailto:admin@bkconsults.com">admin@bkconsults.com</a>
                <a href="mailto:info@bkconsults.com">info@bkconsults.com</a>
              </li>
              <li>
                <img src={PhoneIcon} />
                <a href="tel:5712930631">571-293-0631</a>
              </li>
              <li>
                <button type="button" className="btn">
                  Get in touch <img src={BlackArrow} />
                </button>
              </li>
            </ul>
          </div>
          <div className="box">
            <ul className="main-nav">
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
        </div>
      </div>
    </>
  );
};

export default Header;
