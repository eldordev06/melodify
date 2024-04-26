import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProfileMenu from '../ProfileMenu';

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
      <ProfileMenu />
    </header>
  );
}
