/* eslint-disable react/prop-types */
export default function Playlist({ iconPath, plName }) {
  return (
    <div className="flex items-center gap-5 bg-[#303030] rounded h-[100px] cursor-pointer transition hover:bg-[#3f3f3f]">
      <img src={iconPath} alt="Heart icon." className="h-full aspect-square object-cover" />
      <span>{plName}</span>
    </div>
  );
}
