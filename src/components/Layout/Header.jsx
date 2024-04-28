import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProfileMenu from "../ProfileMenu";
import { FiSearch } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export default function Header() {
  let location = useLocation();

  return (
    <header className="flex w-full flex-shrink-0 justify-between py-5 px-10">
      <div className="flex gap-5">
        <button className="bg-[#131313] border border-transparent rounded-full p-2 h-fit w-fit hover:bg-[#1c1c1c] hover:border-[#404040] active:border-gray-500">
          <IoIosArrowBack size={24} />
        </button>
        <button className="bg-[#131313] rounded-full p-2 h-fit w-fit border border-transparent hover:bg-[#1c1c1c] hover:border-[#404040] active:border-gray-500">
          <IoIosArrowForward size={24} />
        </button>
        {location.pathname == "/search" ? (
          <div className="bg-[#262626] border border-transparent w-[365px] rounded-full py-1.5 px-9 relative focus-within:border-[#717171] focus-within:bg-[#2c2c2c] h-12 cursor-pointer hover:bg-[#2c2c2c] hover:border-[#717171]">
            <FiSearch
              size={16}
              className="absolute top-1/2 -translate-y-1/2 left-3"
            />
            <input
              id="search"
              type="text"
              className="bg-transparent h-full placeholder:text-sm placeholder:text-[#717171] font-normal w-full outline-none text-sm"
              placeholder="What do you want to play?"
            />
          </div>
        ) : null}
      </div>
      <ProfileMenu />
    </header>
  );
}
