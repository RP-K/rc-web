import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../header/MobileNav.css";

const MobileHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      {isMobile && (
        <ul className="ul  py-5 space-y-4 font-semibold  bg-primary-main z-40 ">
          <li>
            <a to="/">Home</a>
          </li>
          <li>
            {" "}
            <a to="/">Chat</a>
          </li>
          <li>
            {" "}
            <a to="/">Help</a>
          </li>
        </ul>
      )}

      <button className="" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <div className="burger-bar show "></div>
        ) : (
          <div className="burger-bar z-50"></div>
        )}
      </button>
    </div>
  );
};

export default MobileHeader;
