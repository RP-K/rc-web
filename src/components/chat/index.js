import MessageContainer from "./message_conatiner";
import NavContainer from "./nav_container";

const Chat = () => {
  return (
    <div
      className="grid auto-rows-min lg:auto-rows-auto grid-cols-[minmax(330px,380px)_1fr] gap-x-2 gap-y-4 "
      id="chat-wrapper"
    >
      <NavContainer />
      <MessageContainer />
    </div>
  );
};

export default Chat;
