import React from "react";
import { Imagesdata } from "../../assets/images/imageData";

const BannerSection = ({ heading, content, contectBanner }) => {
  const { BannerImage } = Imagesdata || {};
  return (
    <div
      className={
        contectBanner
          ? "home_banner contact_banner"
          : "home_banner about_banner"
      }
    >
      <figure>
        <img src={BannerImage} alt="" />
      </figure>
      <div className="container">
        <div className="banner__text">
          <h1>{heading}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
