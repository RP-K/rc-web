import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";
import logo from "../../assets/logo/logo.png";
import MobileHeader from "./MobileHeader";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import profile from "../../assets/image/iyer.jpg";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDoubleDown } from "heroicons-react";
const Navbar = () => {
  const [login, setLogin] = useState(false);
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "Chat" },
    { to: "/contact", text: "Help" },
  ];
  const [isMobileview] = useMediaQuery("764");
  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ');
  // }
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <div>
      <div className="flex justify-between px-4 py-3 items-center border-b-2">
        <div>
          <img className="h-10" src={logo} />
        </div>

        {isMobileview ? (
          // Desktop View
          <div className="flex justify-end space-x-20 items-center">
            {navLinks.map((link) => (
              <div key={link.to} to={link.to}>
                <div className="font-semibold  py-0.5 items-center">
                  {link.text}
                </div>
              </div>
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
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button>
                      {" "}
                      <img
                        className="h-9 w-9 rounded-full"
                        src={profile}
                      />{" "}
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-100"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-left absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Register an Attorny
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                                onClick={() => setLogin(true)}
                              >
                                Logout
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </>
            )}
          </div>
        ) : (
          // Mobile View
          <div className="flex justify-end space-x-3">
            <>
              {login ? (
                <Button click={() => setLogin(false)} name={`Login`} />
              ) : (
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button>
                    {" "}
                    <img className="h-9 w-9 rounded-full" src={profile} />{" "}
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-left absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Register an Attorny
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => setLogin(true)}
                            >
                              Logout
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              )}{" "}
            </>{" "}
            <MobileHeader />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
