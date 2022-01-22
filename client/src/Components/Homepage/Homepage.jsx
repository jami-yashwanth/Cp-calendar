import React from "react";
import "./homepage.css";
import darkThemeImg from "../../images/homepage-dark-theme-img.png";
import lightThemeImg from "../../images/homepage-light-theme-img.png";
import Navbar from "../Navbar/Navbar";


export default function Homepage({theme,ToggleTheme}) {
  return (
    <>
      <Navbar theme={theme} ToggleTheme={ToggleTheme} />
      <div className="homepage">
        <div className="homepage-titles">
          <div className="homepage-title1">
            EXPERIENCE <br />
            COMPETITIVE <br /> PROGRAMMING
          </div>
          <div className="homepage-title2">
            “Experience is the name everyone gives to <br /> their mistakes.” –
            Oscar Wilde
          </div>
        </div>
        <div className="homepage-img">
          {theme === "dark" ? (
            <img src={darkThemeImg} alt="no photo" className="homepage-img" />
          ) : (
            <img src={lightThemeImg} alt="no photo" className="homepage-img" />
          )}
        </div>
      </div>
    </>
  );
}
