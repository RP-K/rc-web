import ChatArea from "./ChatArea";
import ChatCard from "./ChatCard";

const MessageContainer = () => {
  return (
    <div className="col-span-2 lg:col-span-1 chat-container rounded-md flex flex-col">
      <ChatCard />
      <ChatArea />
    </div>
  );
};

export default MessageContainer;
