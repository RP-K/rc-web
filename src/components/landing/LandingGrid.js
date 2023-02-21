import React from "react";
import MessageIcon  from "../../assets/icon/MessageIcon";
import ChatIcon from "../../assets/icon/ChatIcon";
import FileIcon from "../../assets/icon/FileIcon";
import PrivacyIcon from "../../assets/icon/PrivacyIcon";
import { useNavigate } from 'react-router-dom'

const LandingGrid = () => {
  const navigate = useNavigate()
  return (
    <div className="relative isolate overflow-hidden bg-gray-700 py-24 sm:py-32">
  <svg viewBox="0 0 1097 845" aria-hidden="true" className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]">
    <path fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
    <defs>
      <linearGradient id="10724532-9d81-43d2-bb94-866e98dd6e42" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
        <stop stop-color="#776FFF" />
        <stop offset="1" stop-color="#FF4694" />
      </linearGradient>
    </defs>
  </svg>
  <svg viewBox="0 0 1097 845" aria-hidden="true" className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0">
    <path fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
    <defs>
      <linearGradient id="8ddc7edb-8983-4cd7-bccb-79ad21097d70" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
        <stop stop-color="#776FFF" />
        <stop offset="1" stop-color="#FF4694" />
      </linearGradient>
    </defs>
  </svg>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">User-friendly, safe, private, and fun.
      Rain Computing’s software and pricing are designed to fit your needs.</p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1  leading-7 sm:grid-cols-2  ">
      
        <button onClick={ () => {navigate ('/login')}} type="button" className="border border-slate-300 hover:border-slate-400 bg-slate-600 sm:max-w-[4rem] md:max-w-[6.25rem] font-semibold text-white">
        Join Now
        </button>
      </div>
      <dl className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse">
        <a className="text-base leading-7 text-gray-300">Grop Chat</a>
          <ChatIcon className="text-white h-10 w-10"/>
        </div>

        <div className="flex flex-col-reverse">
        <a className="text-base leading-7 text-gray-300">Message</a>
        <MessageIcon className="text-white h-10 w-10"/>
        </div>

        <div className="flex flex-col-reverse">
        <a className="text-base leading-7 text-gray-300">File Sharing</a>
        <FileIcon className="text-white h-10 w-10"/>
        </div>

        <div className="flex flex-col-reverse">
        <a className="text-base leading-7 text-gray-300">Privacy & Policy</a>
        <PrivacyIcon className="text-white h-10 w-10"/>
        </div>
      </dl>
    </div>
  </div>
</div>

  );
};

export default LandingGrid;
