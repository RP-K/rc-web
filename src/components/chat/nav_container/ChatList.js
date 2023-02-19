import React from "react";

const ChatList = ({ profile, active, user,notification,date,isActive=false }) => {
  return (
    <div>
      
      <div className= {`
      ${isActive ? "bg-white border-secondary-main border-2 border-b-2 px-5 hover:bg-gray-100  py-4 text-normal font-semibold my-1":"border-b-2 px-5  bg-[#f7efd7]  hover:bg-gray-100  py-4 text-normal font-semibold my-1 "}`}>
       
        <div className="flex justify-between  items-center space-x-3 ">
          <div className="flex justify-start items-center space-x-3">
            <img className="h-9 w-9 rounded-full" src={profile} alt="user" />
            <div>
              <p className="truncate w-52">{user}</p>
              <p className="text-sm"><span className="text-green-500">

● </span>{active}</p>
            </div>
          </div>
          <div>          <p className="text-xs">{date}</p>
{/* {notification} */}
</div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ChatList;
