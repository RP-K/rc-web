import { useState } from "react";

const navItems = ["Chats", "Cases", "Contacts"];
const NavArea = ({ show }) => {
  const [activeTab, setActiveTab] = useState("Chats");
  const handleClick = (item) => {
    setActiveTab(item);
  };
  return (
    <>
      <div
        className="flex gap-x-3 items-center justify-around border-b-[1px] border-b-primary-main transition-all duration-1000"
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
      <div className="overflow-y-auto" style={{ display: !show && "none" }}>
        {[...Array(10).keys()].map((i, j) => (
          <p className="my-10" key={j}>
            {i}
          </p>
        ))}
      </div>
    </>
  );
};

export default NavArea;
