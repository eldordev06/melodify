/* eslint-disable react/prop-types */
export default function SidebarItem({
  itemName = "example",
  isActive = false,
}) {
  const pathName = itemName.toLowerCase();
  let txt = "";
  itemName.split("-").forEach((item) => txt = txt + item + " ");

  return (
    <div
      className={`flex gap-6 items-center px-5 py-3 ${isActive ? "bg-[#282828]" : ""} rounded-md`}
    >
      <img
        src={`/public/icons/sidebar/${pathName}.svg`}
        alt={itemName + "icon."}
        className="w-6 h-6 object-cover"
      />
      <span className="capitalize">{txt}</span>
    </div>
  );
}
