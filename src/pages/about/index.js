import React, { useEffect } from "react";
import Layout from "../../layout";
import { Imagesdata } from "../../assets/images/imageData";
import BannerSection from "../../components/bannerSection";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { BtnIcon, ExpertImg } = Imagesdata || {};
  return (
    <Layout>
      <BannerSection heading={"About Us"} />

      <div className="expert about_expert">
        <div className="trangle" data-aos="fade-up"></div>
        <div className="container">
          <div className="row flex space-between">
            <div className="col" data-aos="fade-right">
              <spam className="line">Our Founder</spam>
              <h2>Real world experience experts</h2>
              <p>
                Founder Michael Kottmann created BK Consulting with a mission to
                deliver creative and trusted professional services to the
                growing and ever changing technology industry. Incorporated in
                2011, BK Consulting strives for attracting world-class talent
                through continual workplace excellence.
              </p>
              <p>
                Mike Kottmann has over 12 years experience in the computer
                industry with proven expertise in all aspects of the software
                development life cycle. He is well versed in many programming
                languages including Java, Ruby, and PL/SQL. He is a graduate of
                Stonehill College and holds a Master of Science degree in
                Computer Science from the State University of New York Institute
                of Technology.
              </p>
              <a href="#" className="btn">
                Our Services <img src={BtnIcon} alt="" />
              </a>
            </div>
            <div className="col" data-aos="fade-left">
              <figure>
                <img src={ExpertImg} alt="" />
              </figure>
              <div className="detail__box">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/feed/" target="_blank">
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <h6>Mike Kottmann</h6>
                    <span>Founder</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
