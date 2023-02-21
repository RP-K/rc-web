import Info from "../../../assets/icon/Info";
import Search from "../../../assets/icon/Search";
import Settings from "../../../assets/icon/Settings";
import Pin from "../../../assets/icon/Pin.svg";
const ChatCard = () => {
  const profile = {
    firstName: "Reciver",
    lastName: "User",
    profilePic: "https://www.material-tailwind.com/img/face-2.jpg",
  };
  const name = profile.firstName + " " + profile.lastName;
  return (
    <div className="flex p-1 2xl:p-2 md:text-xl items-center justify-between gap-3 border-b-[1px] border-b-primary-main">
      <div className="flex items-center justify-start gap-3 lg:gap-5 truncate">
        <img
          className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full"
          src={profile.profilePic}
          alt={name}
        />
        <div className="flex items-start flex-col justify-start gap-1">
          <span className="truncate font-subtitle">{name}</span>
          <span className="text-green-500  italic text-sm">● Online</span>
        </div>
      </div>
      <div className="flex items-center justify-start gap-3 lg:gap-5">
        <img className="w-6 h-6  rounded-full" src={Pin} alt={name} />
        <Info />
        <Search />
        <Settings />
      </div>
    </div>
  );
};

export default ChatCard;
