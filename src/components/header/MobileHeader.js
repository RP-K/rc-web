import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../header/MobileNav.css";
import ProfileMenu from "./ProfileMenu";

const MobileHeader = ({ navLinks, logo }) => {
  const [isMobile, setIsMobile] = useState(false);
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <div>
      {isMobile && (
        <ul className="ul  py-5 space-y-4 font-semibold  bg-primary-main z-40 ">
          {navLinks.map((link, i) => (
            <li>
              {" "}
              <NavLink
                key={i}
                to={link.to}
                className={({ isActive }) =>
                  classNames(
                    isActive &&
                      "text-secondary-main underline transition-all duration-500",
                    "font-semibold  py-0.5 items-center"
                  )
                }
              >
                <div className="">{link.text}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between item-center px-2">
        <div className="flex justify-start space-x-3">
          <button className="" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <div className="burger-bar show "></div>
            ) : (
              <div className="burger-bar z-50"></div>
            )}
          </button>
          <img className="h-10" src={logo} alt="Rain Computing" />
        </div>
        <ProfileMenu/>
      </div> 
      
    </div>
  );
};

export default MobileHeader;
