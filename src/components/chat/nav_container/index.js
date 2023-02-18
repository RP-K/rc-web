import NavArea from "./NavArea";
import ProfileCard from "./ProfileCard";

const NavContainer = () => {
  return (
    <div className="col-span-2 lg:col-span-1 chat-container bg-secondary-light rounded-md">
      <ProfileCard />
      <NavArea />
    </div>
  );
};

export default NavContainer;
