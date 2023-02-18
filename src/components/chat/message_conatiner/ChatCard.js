const ChatCard = () => {
  const profile = {
    firstName: "Mr",
    lastName: "User",
    profilePic: "https://www.material-tailwind.com/img/face-2.jpg",
  };
  const name = profile.firstName + " " + profile.lastName;
  return (
    <div className="flex p-2 md:text-xl items-center justify-end gap-4 border-b-[1px] border-b-primary-main">
      <span className="overflow-clip">{name}</span>
      <img
        className="w-20 h-20 rounded-full"
        src={profile.profilePic}
        alt={name}
      />
    </div>
  );
};

export default ChatCard;
