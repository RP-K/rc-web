import React from "react";
import { Link } from "react-router-dom";
import MessageIcon  from "../../assets/icon/MessageIcon";
import ChatIcon from "../../assets/icon/ChatIcon";
import FileIcon from "../../assets/icon/FileIcon";
import PrivacyIcon from "../../assets/icon/PrivacyIcon";

const LandingGrid = () => {
  return (
    <div className="bg-primary-main">
      <div className="text-center pb-6 md:pb-8">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tighter tracking-tighter pb-6 md:pb-8" data-aos="fade-right">
          Talking With
        </h1>
        <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tighter tracking-tighter pb-6 md:pb-8" data-aos="fade-right">
          everyone and
        </h1>
        <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tighter tracking-tighter pb-6 md:pb-8" data-aos="fade-right">
          Keep Secure.
        </h1>
        <div className="max-w-3xl mx-auto pb-6 md:pb-8">
          <p className="text-white text-xl mb-2" data-aos="fade-up-right">
            User-friendly, safe, private, and fun.
          </p>
          <p className="text-white text-xl" data-aos="fade-up-right">
            Rain Computing’s software and pricing are designed to fit your needs
          </p>
        </div>
        <div>
          <Link to="/login">
            <button
              className="bg-secondary-main text-white font-bold rounded py-2 px-16"
              type="submit"
            >
              Join Rain
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center rounded-full bg-green-400 ">
          <MessageIcon className = "w-16 h-16 fill-yellow-500"/>
          <div>
          <span className="text-white font-bold pr-6">Message</span>
          </div>
        </div>
        <div className="flex justify-center rounded-lg">
          <ChatIcon className = "w-16 h-16 fill-green-500"/>
          <div>
          <span className="text-white font-bold">Chat</span>{" "}
          </div>
        </div>
        <div className="flex justify-center rounded-lg">
          <FileIcon className = "w-16 h-16 fill-orange-500"/>
          <div>
          <span className="text-white font-bold">File</span>
          </div>
        </div>
        <div className="flex justify-center">
          <PrivacyIcon className = "w-16 h-16 fill-red-500"/>
          <div>
          <span className="text-white font-bold">Priacy and Security</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingGrid;
