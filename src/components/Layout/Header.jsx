import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Header() {
  return (
    <header className="flex justify-between pt-5 pl-[340px] pr-10">
      <div className="flex gap-5">
        <button className="bg-[#131313] rounded-full p-2">
          <IoIosArrowBack size={24} color="white" />
        </button>
        <button className="bg-[#131313] rounded-full p-2">
          <IoIosArrowForward size={24} color="white" />
        </button>
      </div>
      <button className="">
        
      </button>
    </header>
  );
}
