/* eslint-disable react/prop-types */
import Header from "./Header";
import Sidebar from "./Sidebar";
import Player from "./Player";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen w-screen text-xl font-medium main-content-bg text-white">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow h-full flex flex-col">
          <Header />
          <Outlet />
        </div>
      </div>
      <Player />
    </div>
  );
}
