/* eslint-disable react/prop-types */
import Header from "./Header";
import Sidebar from "./Sidebar";
import Player from "./Player";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen text-xl font-medium">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow h-full flex flex-col">
          <Header />
          {children}
        </div>
      </div>
      <Player />
    </div>
  );
}
