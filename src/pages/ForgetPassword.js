import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [data, setData] = useState(false);
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const validation = {
    email: { required: "Email is required", pattern: /^\S+@\S+$/i },
  };
  const handleRegister = () => {
    setData(true);
  };

  //  console.log("data",data)
  return (
    <div className=" flex justify-center  my-7">
      <div className="w-full max-w-xl">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(handleRegister)}
        >
          {!data && (
            <>
              {" "}
              <div className="text-center">
                <p className="text-2xl">Forgot Password</p>
              </div>
              <div className="flex items-center justify-center my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-24 h-24 text-center"
                >
                  <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="md:px-10 flex justify-center  my-3">
                <p className="text-center">
                  Enter your email and we'll send you a link to reset your
                  password{" "}
                </p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 focus:border-red-500 active:border-red-900 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  {...register("email", validation.email)}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
                <small className="text-red-700">
                  {errors?.email && errors.email.message}
                </small>
              </div>
            </>
          )}
          {data && (
            <div className="">
              <div className="flex items-center justify-center my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className=" w-20 h-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-center text-4xl	  my-5">ThankYou</h1>
              </div>
              <p className="text-center  text-teal-600 my-5">
                A password reset email has been sent to Successfully. Please
                follow the instructions in the email to reset your password.{" "}
              </p>
            </div>
          )}
          <div className="flex items-center justify-center my-7">
            {!data && (
              <button
                className="bg-secondary-main text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
