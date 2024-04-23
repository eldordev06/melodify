/* eslint-disable react/prop-types */
export default function RecItem({ imgPath, altTxt, name, author }) {
  return (
    <div className="w-[230px] p-5 bg-[#181818]">
      <img
        src={imgPath}
        alt={altTxt}
        className="w-full object-cover aspect-square mb-7 rounded-[14px]"
      />
      <div className="flex flex-col items-start gap-1.5">
        <span className="overflow-ellipsis line-clamp-1">{name}</span>
        <span className="text-sm text-[#B3B3B3] overflow-ellipsisx line-clamp-1">
          {author}
        </span>
      </div>
    </div>
  );
}
