/* eslint-disable react/prop-types */
export default function SidebarItem({
  itemName = false,
  iconName = false,
  isActive = false,
}) {
  if (itemName || iconName) {
    let txt = "";
    if (iconName) {
      iconName = iconName.toLowerCase();
    }
    if (itemName) {
      itemName.split("-").forEach((item) => (txt = txt + item + " "));
    }

    return (
      <div
        className={`flex gap-6 items-center px-5 py-3 ${isActive ? "bg-[#282828]" : ""} rounded-md`}
      >
        {iconName ? (
          <img
            src={`/public/icons/sidebar/${iconName}.svg`}
            alt={iconName + "icon."}
            className="w-6 h-6 object-cover"
          />
        ) : (
          ""
        )}
        <span className="capitalize">{txt}</span>
      </div>
    );
  } else {
    console.log('You did not provide enough data :(')
  }
}
