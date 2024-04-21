import SidebarItem from "../SidebarItem";

export default function Sidebar() {
  return (
    <aside className="bg-black w-[300px] h-full text-white px-2.5">
      <a href="https://open.spotify.com" target="_blank" className="block p-5">
        <img
          src="/public/icons/sidebar/logo.svg"
          alt="Logo."
          className="w-[165px] h-[50px] object-contain"
        />
      </a>
      <div className="mb-[52px]">
        <SidebarItem itemName="home" isActive={true} />
        <SidebarItem itemName="search" />
        <SidebarItem itemName="library" />
      </div>
      <div className="mb-10">
        <SidebarItem itemName="create-playlist" />
        <SidebarItem itemName="liked-songs" />
        <SidebarItem itemName="your-episodes" />
      </div>
    </aside>
  );
}
