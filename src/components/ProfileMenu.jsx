import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiExternalLinkLine } from "react-icons/ri";

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 bg-[#0A0A0A] rounded-3xl p-0.5 pr-2.5 h-fit hover:bg-[#1c1c1c] hover:border-[#404040] active:border-gray-500 border border-transparent"
      >
        <div className="gap-2 items-center flex">
          <img
            src="/images/avatar.png"
            alt="Avatar"
            className="w-[37px] h-[37px] rounded-full"
          />
          <span>Angel</span>
        </div>
        <RiArrowDownSFill size={24} />
      </button>

      {isOpen ? (
        <ul className="flex flex-col items-start rounded absolute top-full mt-2.5 right-0 z-10 bg-[#282828] w-60 overflow-hidden">
          <li className="w-full flex items-center justify-between hover:bg-[#3c3c3c] p-2.5 px-5">
            <span>Account</span>
            <RiExternalLinkLine />
          </li>
          <li className="hover:bg-[#3c3c3c] p-2.5 px-5 w-full text-start">
            Profile
          </li>
          <li className="hover:bg-[#3c3c3c] p-2.5 px-5 w-full text-start">
            Log out
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default ProfileMenu;
