import React from "react";

function LogIn() {
  return (
    <>
      <section className="h-screen ">
        <div class="h-full p-6">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-5/12 mb-12 md:mb-0">
              <form>
                <div className="mb-12">
                  <h1 className="text-lg text-blue-600 flex justify-center">
                    RAIN COMPUTING
                  </h1>
                </div>
                <div className="mb-8">
                  <p className="text-lg flex justify-center">
                    Welcome to Rain Computing
                  </p>
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-blue-300"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-blue-300"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-end mb-6">
                  <a href="/#" className="text-blue-800">
                    Forgot password?
                  </a>
                </div>

                  <div className="flex items-center justify-center my-3">
                    <button
                      className="bg-secondary-main text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>

                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-semibold mx-4 my-6">Or</p>
                  </div>

                  <p className="text-sm font-semibold mt-4 pt-8 flex justify-center">
                    New Rain Computing?
                    <a
                      href="/#"
                      className="text-blue-600 hover:ease-in ease-in-out duration-300 mr-2 text-underline-offset: 4px"
                    >
                      Create Account
                    </a>
                  </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogIn;
