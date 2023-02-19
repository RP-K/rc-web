import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const LogIn = () => {
  return (
    <>
      <div className=" flex justify-center h-full p-6">
        <div className="w-full max-w-xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-8 flex justify-center">
              <img src={logo} className="h-10" alt=" " />
            </div>
            <div className="mb-4 text-center">
              <p className="text-xl py-5 text-primary-main font-bold ">
                Welcome to Rain Computing
              </p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter Email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>

            <div className="flex justify-end mb-6">
              <a href="/#" className="text-primary-main">
                Forgot password?
              </a>
            </div>

            <div className="flex items-center justify-center my-3">
              <button
                className="bg-secondary-main text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log In
              </button>
            </div>

            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 my-6">Or</p>
            </div>

            <p className="text-sm font-semibold pt-2 flex justify-center">
              New Rain Computing?
              <Link to="/signup">
                <p className="text-primary-main underline pr-2">
                  Create Account
                </p>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
