/* eslint-disable react/prop-types */
import Playlist from "./Playlist";

export default function Playlists({ heading }) {
  return (
    <section className="mt-[50px]">
      <h1 className="text-4xl mb-7">{heading}</h1>
      <div className="grid grid-cols-4 gap-5">
        <Playlist
          iconPath="/public/icons/sidebar/liked-songs.svg"
          plName="Liked Songs"
        />
        <Playlist
          iconPath="/public/icons/sidebar/liked-songs.svg"
          plName="Neffex Playlist"
        />
        <Playlist
          iconPath="/public/icons/sidebar/liked-songs.svg"
          plName="K/DA"
        />
        <Playlist
          iconPath="/public/icons/sidebar/liked-songs.svg"
          plName="Liked Songs"
        />
        <Playlist
          iconPath="/public/icons/sidebar/liked-songs.svg"
          plName="Dance / Electronic Mix"
        />
      </div>
    </section>
  );
}
