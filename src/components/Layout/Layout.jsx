/* eslint-disable react/prop-types */
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow h-full">
          <Header />
          {children}
        </div>
      </div>
      <div className="bg-[#282828] text-white h-24 text-3xl flex items-center justify-center">
        <span>PLAYER</span>
      </div>
    </div>
  );
}
