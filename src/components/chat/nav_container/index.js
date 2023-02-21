import { useEffect, useState } from "react";
import useMediaQuery from "../../../utils/hooks/useMediaQuery";
import NavArea from "./NavArea";
import ProfileCard from "./ProfileCard";

const NavContainer = () => {
  const [isDesktop] = useMediaQuery(1024);
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow((prevValue) => !prevValue);

  useEffect(() => {
    if (isDesktop) setShow(true);
    return () => null;
  }, [isDesktop]);

  return (
    <div className="col-span-2 lg:col-span-1 chat-container shadow rounded-md flex flex-col bg-[#EFFFFD]">
      <ProfileCard toggleShow={toggleShow} show={show} />
      <NavArea show={show} />
    </div>
  );
};

export default NavContainer;
