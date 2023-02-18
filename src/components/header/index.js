import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../common/Button";
import logo from "../../assets/logo/logo.png";
import MobileHeader from "./MobileHeader";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const [login, setLogin] = useState(false);
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/chat", text: "Chat" },
    { to: "/help", text: "Help" },
  ];
  const [isMobileview] = useMediaQuery("764");

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div>
      <div >
        {isMobileview ? (
                      // Desktop View

          <div className="flex justify-between px-4 py-3 items-center border-b-2">
            {" "}
            <div>
              <img className="h-10" src={logo} alt="Rain Computing" />
            </div>
            <div className="flex justify-end space-x-20 items-center">
              {navLinks.map((link, i) => (
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
              ))}
              {login ? (
                <Button click={() => setLogin(false)} name={`Login`} />
              ) : (
                <>
                  <div>
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg>
                  </div>
                  <div>
                    <ProfileMenu />
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          // Mobile View
          <div>
            <MobileHeader navLinks={navLinks} logo={logo} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
