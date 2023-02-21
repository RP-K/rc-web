import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/image/iyer.jpg";
import { Menu, Transition } from "@headlessui/react";

const ProfileMenu = () => {
  return (
    <div>  <Menu as="div" className="relative inline-block text-left">
    <Menu.Button>
      <img
        className="h-9 w-9 rounded-full"
        src={profile}
        alt="user"
      />
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
      <Menu.Items className="origin-top-left absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none z-10">
        <div className="py-1">
          <Menu.Item>
            <Link
              to="#"
              className="text-gray-700 block px-4 py-2 text-sm"
            >
              Profile
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="#"
              className="text-gray-700 block px-4 py-2 text-sm"
            >
              Register Attorney
            </Link>
          </Menu.Item>
          <Menu.Item>
            <button
              onClick={() => console.log("logout")}
              className="text-gray-700 block px-4 py-2 text-sm"
            >
              Logout
            </button>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu></div>
  )
}

export default ProfileMenu