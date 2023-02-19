import { useState } from "react";
import profile from "../../../assets/image/iyer.jpg";
import ChatList from "./ChatList";

const navItems = ["Chats", "Cases", "Contacts"];
const NavArea = ({ show }) => {
  const [activeTab, setActiveTab] = useState("Chats");

  const handleClick = (item) => {
    setActiveTab(item);
  };

  return (
    <>
      <div
        className="flex gap-x-3 items-center justify-around border-y-[1px] border-y-primary-main transition-all duration-1000"
        style={{ display: !show && "none" }}
      >
        {navItems.map((item) => (
          <button
            className={`p-2 transition-all duration-700 ${
              activeTab === item && "underline text-secondary-main font-bold"
            }`}
            key={item}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div
        className="max-h-[80vh] lg:max-h-[unset] overflow-y-auto"
        style={{ display: !show && "none" }}
      >
        {activeTab === "Chats" &&[...Array(15).keys()].map((i, j) => (
          <div className="" key={j} >
           <ChatList profile={profile} active={`Active`} user={`krishnakumar s`} notification={`@`} date={`18/02/2022`} isActive={j === 2} />
          </div>
        ))}
      </div>
    </>
  );
};

export default NavArea;
