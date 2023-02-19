import React from 'react'
import logo from '../../assets/logo/logo.png'
const Signup = () => {
  return (
    <div className=' flex justify-center   border border-gray-200'>
     <div className="w-full max-w-xl">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className='flex justify-center '>
        <img src={logo} alt="Rain Computing" className=' h-10'></img></div>
    <div className='text-center'>
        <p className='text-xl py-5 text-primary-main'>Welcome to Rain Computing</p></div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm  mb-2" >
        First Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="firstname"
        type="text" 
        />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm  mb-2" >
        Last Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="lastname" 
      type="text"
       />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="email" 
        />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm  mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="password"
       type="password" 
       />
    </div>
    <div className="flex items-center mb-4">
    <input id="default-checkbox"
    type="checkbox" 
    value="" 
    required
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    By registering you agree to the raincomputing  
    <a href="#" 
    className="text-blue-600" 
   
    >
    Terms of Use
     </a>
            </label>
</div>
    <div className="flex items-center justify-center my-3">
      <button className="bg-secondary-main text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline" 
      type="submit">
        Sign In
      </button>
    </div>
    <div className=' flex justify-center'>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="24" height="24"
viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>    <p>Sign in With Google </p>
  </div>
  </div>
  <p className="text-center text-gray-500 text-xs">
    &copy;2023 Acme Corp. All rights reserved.
  </p>
  
</div>
    </div>
  )
}

export default Signup   ;