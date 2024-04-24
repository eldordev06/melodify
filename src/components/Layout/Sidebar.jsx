import SidebarItem from "../SidebarItem";

export default function Sidebar() {
  return (
    <aside className="bg-black w-[300px] h-full relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-auto px-2.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <a
          href="https://open.spotify.com"
          target="_blank"
          className="block p-5"
        >
          <img
            src="/icons/sidebar/logo.svg"
            alt="Logo."
            className="w-[165px] h-[50px] object-contain"
          />
        </a>
        <ul className="mb-[52px]">
          <SidebarItem itemName="home" iconName="home" isActive={true} />
          <SidebarItem itemName="search" iconName="search" />
          <SidebarItem itemName="library" iconName="library" />
        </ul>
        <ul className="mb-10">
          <SidebarItem itemName="create-playlist" iconName="create-playlist" />
          <SidebarItem itemName="liked-songs" iconName="liked-songs" />
          <SidebarItem itemName="your-episodes" iconName="your-episodes" />
        </ul>
        <ul>
          <SidebarItem itemName="FAV" />
          <SidebarItem itemName="Daily Mix 1" />
          <SidebarItem itemName="Discover Weekly" />
          <SidebarItem itemName="Malayalam" />
          <SidebarItem itemName="Dance / Electronix Mix" />
          <SidebarItem itemName="EDM / Popular" />
        </ul>
        <a href="/download" className="block mt-16 mb-3.5">
          <SidebarItem itemName="Install App" iconName="arrow-down" />
        </a>
      </div>
    </aside>
  );
}
