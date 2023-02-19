const ProfileCard = ({ toggleShow }) => {
  const profile = {
    firstName: "Mr",
    lastName: "User",
    profilePic: "https://www.material-tailwind.com/img/face-2.jpg",
  };
  const name = profile.firstName + " " + profile.lastName;
  return (
    <div className="flex p-1 lg:p-2 md:text-xl items-center gap-4  relative">
      <div className="lg:hidden absolute top-2 right-5" onClick={toggleShow}>
        i
      </div>
      <img
        className="w-12 h-12 lg:w-20 lg:h-20 rounded-full"
        src={profile.profilePic}
        alt={name}
      />
      <span className="overflow-clip">{name}</span>
    </div>
  );
};

export default ProfileCard;
