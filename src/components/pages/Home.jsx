import Playlists from "../Playlists";
import Rec from "../Rec";

function Home() {
  return (
    <main className="flex-grow relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-auto px-10 pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <Playlists heading="Good morning" />
        <Rec heading="Shows you might like" />
      </div>
    </main>
  );
}

export default Home;
