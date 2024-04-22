/* eslint-disable react/prop-types */
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Header />
          {children}
        </div>
      </div>
      <div className="bg-[#282828] flex-shrink-0 text-white w-screen h-24 text-xl flex items-center justify-center">
        <span>PLAYER</span>
      </div>
    </div>
  );
}
