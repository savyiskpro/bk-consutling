import React, { useEffect } from "react";
import Layout from "../../layout";
import { Imagesdata } from "../../assets/images/imageData";
import Slider from "react-slick";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    BannerImage,
    BtnIcon,
    ExperinceImage,
    BlackArrow,
    InvestorsImg,
    PrintingImg,
    ConsultingImg,
    DataImg,
    ExpertImg,
    BlogOne,
    BlogTwo,
    BlogThree,
  } = Imagesdata || {};

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Layout>
      <div className="home_banner">
        <figure>
          <img src={BannerImage} alt="" />
        </figure>
        <div className="container">
          <div className="banner__text">
            <h1>Delivering Results</h1>
            <p>
              Providing experienced professionals to the intelligence community.
              Delivering innovative results... fast!
            </p>
            <a href="#" className="btn">
              Get in touch
              <img src={BtnIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="down-arrow">
          <a href="#">
            SCROLL DOWN
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* <!-- experince  --> */}

      <div className="experince">
        <div className="row flex">
          <div className="img__box" data-aos="fade-right">
            <figure>
              <img src={ExperinceImage} alt="" />
            </figure>
          </div>
          <div className="text__box" data-aos="fade-left">
            <span className="line">ABout</span>
            <h2>Backed by 25 years of combined experience</h2>
            <p>
              The BK Consulting team draws from their vast and diverse
              background in commercial and government software development and
              implementation. BK Consulting offers a wide range of capabilities
              for any project need. Our Team is continually learning new
              applications of existing technologies along with cutting edge
              ideas to solve problems.
            </p>
            <ul className="flex align-center half__line">
              <li>
                <a href="#">
                  Overview <img src={BlackArrow} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  Potential Employees <img src={BlackArrow} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*  Trusted investor */}
      <div className="investor">
        <div className="container">
          <div className="img__box" data-aos="fade-up">
            <h3>Trusted by over 180 partners and investors</h3>
            <figure>
              <img src={InvestorsImg} alt="" />
            </figure>
          </div>
        </div>
      </div>

      {/* service Section */}

      <div className="service">
        <div className="container">
          <div className="s-text" data-aos="fade-up">
            <span className="line">Services</span>
            <h2>What We Bring To The Table</h2>
            <p>
              The BK Consulting team draws from their vast and diverse
              background in commercial and government software development and
              implementation.{" "}
            </p>
          </div>
          <div className="row">
            <div className="col" data-aos="fade-up">
              <div className="icon">
                <figure>
                  <img src={PrintingImg} alt="" />
                </figure>
              </div>
              <div className="text">
                <h3>Software Architecture</h3>
                <p>
                  The software architecture of a system is the set of structures
                  needed to reason about the system, which comprise software
                  elements, relations among them, and properties of both.
                </p>
                <ul className="flex align-center half__line">
                  <li>
                    <a href="#">
                      Read More
                      <img src={BlackArrow} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col" data-aos="fade-up">
              <div className="icon">
                <figure>
                  <img src={ConsultingImg} alt="" />
                </figure>
              </div>
              <div className="text">
                <h3>Systems Engineering</h3>
                <p>
                  The software architecture of a system is the set of structures
                  needed to reason about the system, which comprise software
                  elements, relations among them, and properties of both.
                </p>
                <ul className="flex align-center half__line">
                  <li>
                    <a href="#">
                      Read More
                      <img src={BlackArrow} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col" data-aos="fade-up">
              <div className="icon">
                <figure>
                  <img src={DataImg} alt="" />
                </figure>
              </div>
              <div className="text">
                <h3>Data Architecture</h3>
                <p>
                  The software architecture of a system is the set of structures
                  needed to reason about the system, which comprise software
                  elements, relations among them, and properties of both.
                </p>
                <ul className="flex align-center half__line">
                  <li>
                    <a href="#">
                      Read More
                      <img src={BlackArrow} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col get_touch" data-aos="fade-up">
              <h3>Get In Touch With us</h3>
              <a href="#" className="btn">
                Contact us <img src={BtnIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Expert Section */}
      <div className="expert">
        <div className="trangle" data-aos="fade-right"></div>
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
              <a href="#" className="btn">
                Read More <img src={BtnIcon} alt="" />
              </a>
            </div>
            <div className="col" data-aos="fade-left">
              <figure>
                <img src={ExpertImg} alt="" />
              </figure>
              <div className="detail__box">
                <ul>
                  <li>
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
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
      {/* Latest News Section */}
      <div className="latest__news">
        <div className="container">
          <span className="line" data-aos="fade-up">
            Latest News
          </span>
          <h2 data-aos="fade-up">Check our featured insights</h2>
          <div className="slider__wrapper" data-aos="fade-up">
            <Slider {...settings}>
              <div>
                <div className="news__img">
                  <figure>
                    <img src={BlogOne} alt="" />
                  </figure>
                  <div className="text">
                    <h4>
                      BK Consulting sponsors and participates in charity golf
                      tournament
                    </h4>
                    <span>Published on 10/08/2015</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="news__img">
                  <figure>
                    <img src={BlogTwo} alt="" />
                  </figure>
                  <div className="text">
                    <h4>BK Consulting's Family day at National's Park.</h4>
                    <span>Published on 8/30/2015</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="news__img">
                  <figure>
                    <img src={BlogThree} alt="" />
                  </figure>
                  <div className="text">
                    <h4>BK Consulting employees attend UberConf.</h4>
                    <span>Published on 7/2015</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="news__img">
                  <figure>
                    <img src={BlogOne} alt="" />
                  </figure>
                  <div className="text">
                    <h4>
                      BK Consulting sponsors and participates in charity golf
                      tournament
                    </h4>
                    <span>Published on 10/08/2015</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
