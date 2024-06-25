import React from "react";
import "./LandingPage.css";
import Navbar from "./Navbar/Navbar";
import LandingpageImg from "./assets/cover-image.png";
import AppApk from "./assets/tieoda.apk";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Navbar />
      <div className="landing-page-details-container">
        <div className="landing-page-details">
          <div className="landing-page-details-names">
            <div className="landing-page-details-heading-name1">
              Discover the magic of short-form videos, where every scroll is a
              journey through a world of laughter, tears, and endless
              possibilities.
            </div>
            <div className="landing-page-details-heading-name2">
              Get the app and start Watching endless videos
            </div>
            <div className="landing-page-details-heading-name2">
              <button
                // onClick={handleClick}
                className="landing-page-signup-button"
                style={{ cursor: "pointer" }}
              >
                <a
                  href={AppApk}
                  download="tieoda.apk" // Ensuring the correct file name
                  className="landing-page-signup-button"
                  style={{ cursor: "pointer", textDecoration: "none" }}
                >
                  Get app
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="landing-page-details-img">
          <img
            src={LandingpageImg}
            alt="landing-page-image"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
