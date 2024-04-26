import BrowseAllCard from "../BrowseAllCard";

function Search() {
  return (
    <section className="mt-[50px]">
      <h2 className="text-4xl mb-7">Browse all</h2>
      <div className="grid grid-cols-5 gap-8">
        <BrowseAllCard heading="Music" />
        <BrowseAllCard heading="Music" />
        <BrowseAllCard heading="Music" />
        <BrowseAllCard heading="Music" />
        <BrowseAllCard heading="Music" />
        <BrowseAllCard heading="Music" />
        <BrowseAllCard heading="Music" />
        <BrowseAllCard heading="Music" />
        <BrowseAllCard heading="Music" />
        <BrowseAllCard heading="Music" />
      </div>
    </section>
  );
}

export default Search;
