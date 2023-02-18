const ChatArea = () => {
  return (
    <div className="max-h-[80vh] lg:max-h-[unset] overflow-y-auto">
      {[...Array(15).keys()].map((i, j) => (
        <p className="my-10" key={j}>
          {i}
        </p>
      ))}
    </div>
  );
};

export default ChatArea;
