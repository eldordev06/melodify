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
        <SidebarItem itemName="home" iconName="home" isActive={true} />
        <SidebarItem itemName="search" iconName="search" />
        <SidebarItem itemName="library" iconName="library" />
      </div>
      <div className="mb-10">
        <SidebarItem itemName="create-playlist" iconName="create-playlist" />
        <SidebarItem itemName="liked-songs" iconName="liked-songs" />
        <SidebarItem itemName="your-episodes" iconName="your-episodes" />
      </div>
    </aside>
  );
}
