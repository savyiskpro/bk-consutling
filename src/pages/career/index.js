import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import { Imagesdata } from "../../assets/images/imageData";
import BannerSection from "../../components/bannerSection";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { SearchIcon, LocationIcon, BlueIcon, ClenderIcon } = Imagesdata || {};
  const [activeJob, SetActiveJob] = useState(0);
  const [activePopup, SetActivePopup] = useState(false);
  return (
    <Layout>
      <BannerSection heading={"Careers"} />
      <div className="services__bring carrers">
        <div className="text" data-aos="fade-up">
          <span className="line">JOB OPENINGS</span>
          <h2>Working For BK Consulting</h2>
          <p>
            Are you interested in taking the next step in your career? You
            should consider BK Consulting. We are continually seeking highly
            qualified information technology professionals to join our growing
            team. If you are interested in joining the BK Consulting team,
            please send your resume and cover letter to careers@bkconsults.com
            <b>.</b>
          </p>
        </div>
        <div className="serch_filter" data-aos="fade-up">
          <form action="">
            <div className="from_inner flex">
              <div className="form_section">
                <div className="form-group">
                  <img src={SearchIcon} alt="" />
                  <input
                    type="text"
                    placeholder="Keyword"
                    className="from-control"
                  />
                </div>
                <div className="form-group">
                  <img src={SearchIcon} alt="" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="from-control"
                  />
                </div>
              </div>
              <div className="serch-btn">
                <button className="btn">Search</button>
              </div>
            </div>
            <ul className="flex align-center space-between">
              <li>Clean all</li>
              <li>05 offers found</li>
            </ul>
          </form>
        </div>

        <div className="faq_accordian">
          <div className="accrodian__box" data-aos="fade-up">
            <div
              className={
                activeJob === 1 ? "accordion-title open" : "accordion-title"
              }
            >
              <ul>
                <li>
                  <h6>Instructional Designer - TS.SCI w/ Favorable Poly</h6>
                  <span>
                    <img src={LocationIcon} alt="" /> Herndon, VA
                  </span>
                  <span>
                    <img src={ClenderIcon} alt="" /> 21/11/2022
                  </span>
                </li>
                <li>
                  <div className="readmore" onClick={() => SetActiveJob(1)}>
                    Read More <img src={BlueIcon} alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="accordion-content"
              style={{ display: activeJob === 1 ? "block" : "none" }}
            >
              <a
                href="javascript:void(0)"
                className="applybtn btn"
                onClick={() => SetActivePopup(true)}
              >
                Apply
              </a>
              <div className="text">
                <h5>Benefits</h5>
                <p>
                  BK Consulting is proud to offer highly competitive salaries
                  and comprehensive benefits packages.
                </p>
              </div>
              <div className="box_wrapper flex space-between">
                <div className="box">
                  <h5>Vacation & Holidays</h5>
                  <ul>
                    <li>Twenty-five days of personal leave per year</li>
                    <li>
                      Ten Federal holidays per year (posted on the Office of
                      Personnel Management website)
                    </li>
                    <li>Two floating holidays per year</li>
                  </ul>
                </div>
                <div className="box">
                  <h5>Medical</h5>
                  <ul>
                    <li>100% Company paid Health, Dental, and Vision</li>
                    <li>
                      100% Company paid Short Term and Long Term Disability
                    </li>
                    <li>100% Company paid Life Insurance</li>
                  </ul>
                </div>
                <div className="box">
                  <h5>Other Benefits</h5>
                  <ul>
                    <li>Employee Referral bonuses</li>
                    <li>Annual fitness allowance ($150)</li>
                    <li>
                      Annual contribution towards term life, will and/or trust
                      ($1200)
                    </li>
                  </ul>
                </div>
                <div className="box">
                  <h5>Medical</h5>
                  <ul>
                    <li>Monthly cell phone allowance ($75)</li>
                    <li>Monthly Internet Service Provider allowance ($60)</li>
                    <li>Bi-yearly computer allowance ($1750)</li>
                  </ul>
                </div>
                <div className="box">
                  <h5>401(k)</h5>
                  <ul>
                    <li>
                      Company Contributes 15% of salary to Safe Harbor 401(k)
                    </li>
                  </ul>
                </div>
                <div className="box">
                  <h5>Continuing Education</h5>
                  <ul>
                    <li>Annual training/education allowance (up to $5000)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accrodian__box" data-aos="fade-up">
            <div
              className={
                activeJob === 2 ? "accordion-title open" : "accordion-title"
              }
            >
              <ul>
                <li>
                  <h6>Instructional Designer - TS.SCI w/ Favorable Poly</h6>
                  <span>
                    <img src={LocationIcon} alt="" /> Herndon, VA
                  </span>
                  <span>
                    <img src={ClenderIcon} alt="" /> 21/11/2022
                  </span>
                </li>
                <li>
                  <div className="readmore" onClick={() => SetActiveJob(2)}>
                    Read More <img src={BlueIcon} alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="accordion-content"
              style={{ display: activeJob === 2 ? "block" : "none" }}
            >
              <a
                href="javascript:void(0)"
                className="applybtn btn"
                onClick={() => SetActivePopup(true)}
              >
                Apply
              </a>
              <div className="text">
                <h5>Benefits</h5>
                <p>
                  BK Consulting is proud to offer highly competitive salaries
                  and comprehensive benefits packages.
                </p>
              </div>
              <div className="box_wrapper flex space-between">
                <div className="box">
                  <h5>Vacation & Holidays</h5>
                  <ul>
                    <li>Twenty-five days of personal leave per year</li>
                    <li>
                      Ten Federal holidays per year (posted on the Office of
                      Personnel Management website)
                    </li>
                    <li>Two floating holidays per year</li>
                  </ul>
                </div>
                <div className="box">
                  <h5>Medical</h5>
                  <ul>
                    <li>100% Company paid Health, Dental, and Vision</li>
                    <li>
                      100% Company paid Short Term and Long Term Disability
                    </li>
                    <li>100% Company paid Life Insurance</li>
                  </ul>
                </div>
                <div className="box">
                  <h5>Other Benefits</h5>
                  <ul>
                    <li>Employee Referral bonuses</li>
                    <li>Annual fitness allowance ($150)</li>
                    <li>
                      Annual contribution towards term life, will and/or trust
                      ($1200)
                    </li>
                  </ul>
                </div>
                <div className="box">
                  <h5>Medical</h5>
                  <ul>
                    <li>Monthly cell phone allowance ($75)</li>
                    <li>Monthly Internet Service Provider allowance ($60)</li>
                    <li>Bi-yearly computer allowance ($1750)</li>
                  </ul>
                </div>
                <div className="box">
                  <h5>401(k)</h5>
                  <ul>
                    <li>
                      Company Contributes 15% of salary to Safe Harbor 401(k)
                    </li>
                  </ul>
                </div>
                <div className="box">
                  <h5>Continuing Education</h5>
                  <ul>
                    <li>Annual training/education allowance (up to $5000)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={activePopup ? "pop-up active" : "pop-up"}>
            <div className="pop__up__inner">
              <div className="cross_btn" onClick={() => SetActivePopup(false)}>
                <span></span>
                <span></span>
              </div>
              <h2>Apply</h2>
              <div className="form_inner">
                <div className="form-group full">
                  <input
                    type="text"
                    className="form-control"
                    id="job"
                    placeholder=" "
                  />
                  <label for="job">Job*</label>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=" "
                  />
                  <label for="firstName">Your first name*</label>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=" "
                  />
                  <label for="lastName">Your last name*</label>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder=" "
                  />
                  <label for="phone">Your phone number*</label>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder=" "
                  />
                  <label for="email">Your email address*</label>
                </div>
                <div className="form-group full">
                  <textarea
                    placeholder=" "
                    id="message"
                    className="form-control"
                  ></textarea>
                  <label for="message">Your message</label>
                </div>
                <div className="form-group full upload-box">
                  <label for="">RESUME*</label>
                  <div className="file-upload">
                    <input id="file-s" type="file" />
                    <label for="file-s">
                      <span>No selected file</span>
                      <button>Browse</button>
                    </label>
                  </div>
                </div>
              </div>
              <div className="text">
                <h6>*Thses fields are required</h6>
                <p>
                  By clicking on Apply you agree that your data will be used by
                  BK Consulting to better respond to you. To find out more about
                  the management of your personal data and to exercise your
                  rights, see our privacy policy .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Career;
