import Arrow from "../../../assets/icon/Arrow";

const ProfileCard = ({ toggleShow, show }) => {
  const profile = {
    firstName: "Mr",
    lastName: "User",
    profilePic:
      "https://roget.biz/wp-content/uploads/2011/08/cartoonize_pet.jpg",
  };
  const name = profile.firstName + " " + profile.lastName;
  return (
    <div className="relative flex p-1 2xl:p-2 md:text-xl items-center justify-start gap-4  border-b-primary-main">
      <div className="lg:hidden absolute top-50 right-5" onClick={toggleShow}>
        <Arrow isOpen={show} />
      </div>
      <img
        className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full"
        src={profile.profilePic}
        alt={name}
      />
      <span className="overflow-clip">{name}</span>
    </div>
  );
};

export default ProfileCard;
