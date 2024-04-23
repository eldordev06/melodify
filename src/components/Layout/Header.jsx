import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";

export default function Header() {
  return (
    <header className="flex w-full flex-shrink-0 justify-between py-5 px-10">
      <div className="flex gap-5">
        <button className="bg-[#131313] rounded-full p-2 h-fit w-fit">
          <IoIosArrowBack size={24} />
        </button>
        <button className="bg-[#131313] rounded-full p-2 h-fit w-fit">
          <IoIosArrowForward size={24} />
        </button>
      </div>
      <button className="flex items-center gap-4 bg-[#0A0A0A] rounded-3xl p-0.5 pr-2.5 h-fit">
        <div className="gap-2 items-center flex">
          <img
            src="/public/images/avatar.png"
            alt="Avatar"
            className="w-[37px] h-[37px] rounded-full"
          />
          <span>Angel</span>
        </div>
        <RiArrowDownSFill size={24} />
      </button>
    </header>
  );
}
