import React, { useEffect } from "react";
import BannerSection from "../../components/bannerSection";
import Layout from "../../layout";
import { Imagesdata } from "../../assets/images/imageData";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { BtnIcon, ServiceImg, ServiceImgTwo, DataImgMain } = Imagesdata || {};
  return (
    <Layout>
      <BannerSection heading={"Services"} />

      <div className="services__bring">
        <div className="trangle" data-aos="fade-left"></div>
        <div className="container">
          <div className="text" data-aos="fade-up">
            <span className="line">Services</span>
            <h2>What We Bring To The Table</h2>
            <p>
              The BK Consulting team draws from their vast and diverse
              background in commercial and government software development and
              implementation.{" "}
            </p>
          </div>
          <div className="row flex">
            <div className="img-box" data-aos="fade-right">
              <figure>
                <img src={ServiceImg} alt="" />
              </figure>
            </div>
            <div className="text-box" data-aos="fade-up">
              <h2>Software Architecture</h2>
              <p>
                The software architecture of a system is the set of structures
                needed to reason about the system, which comprise software
                elements, relations among them, and properties of both. The term
                also refers to documentation of a system's "software
                architecture."{" "}
              </p>
              <p>
                Documenting software architecture facilitates communication
                between stakeholders, documents early decisions about high-level
                design, and allows reuse of design components and patterns
                between projects.
              </p>
              <a href="#" className="btn">
                Get In Touch <img src={BtnIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="services__bring engineering">
        <div className="cricle"></div>
        <div className="container">
          <div className="row flex">
            <div className="text-box" data-aos="fade-right">
              <h2>Systems Engineering</h2>
              <p>
                Systems engineering is an interdisciplinary field of engineering
                focusing on how complex engineering projects should be designed
                and managed over their life cycles. Issues such as logistics,
                the coordination of different teams, and automatic control of
                machinery become more difficult when dealing with large, complex
                projects.{" "}
              </p>
              <p>
                Systems engineering deals with work-processes and tools to
                manage risks on such projects, and it overlaps with both
                technical and human-centered disciplines such as control
                engineering, industrial engineering, organizational studies, and
                project management.
              </p>
              <a href="#" className="btn">
                Get In Touch <img src={BtnIcon} alt="" />
              </a>
            </div>
            <div className="img-box" data-aos="fade-left">
              <figure>
                <img src={ServiceImgTwo} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="experince data_architecture">
        <div className="row flex">
          <div className="img__box" data-aos="fade-right">
            <figure>
              <img src={DataImgMain} alt="" />
            </figure>
          </div>
          <div className="text__box" data-aos="fade-left">
            <div className="detail">
              <h2>Data Architecture</h2>
              <p>
                Data architecture in Information Technology is composed of
                models, policies, rules or standards that govern which data is
                collected, and how it is stored, arranged, integrated, and put
                to use in data systems and in organizations.{" "}
              </p>
              <p>
                A Data Architecture is often the design of data for use in
                defining the target state and the subsequent planning needed to
                achieve the target state. It is usually one of several
                architecture domains that form the pillars of an enterprise
                architecture or solution architecture.
              </p>
              <a href="#" className="btn">
                Get In Touch <img src={BtnIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Service;
