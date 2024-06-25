import React from "react";
import "./LandingPage.css";
import Navbar from "./Navbar/Navbar";
import LandingpageImg from "./assets/cover-image.png";
import AppApk from "./assets/tieoda.apk";

const LandingPage = () => {
  const handleDownload = () => {
    // Create a virtual link
    const link = document.createElement("a");
    link.href = AppApk;
    link.download = "tieoda.apk";

    // Append it to the body
    document.body.appendChild(link);

    // Trigger the click event
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

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
                onClick={handleDownload}
                className="landing-page-signup-button"
                style={{ cursor: "pointer" }}
              >
                Get app
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
