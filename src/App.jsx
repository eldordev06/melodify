import Layout from "./components/Layout/Layout";
import Playlist from "./components/Playlist";

function App() {
  return (
    <>
      <Layout>
        <main className="flex-grow relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-auto px-10 pt-[50px]">
            <section>
              <h1 className="text-4xl mb-7">Good morning</h1>
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
          </div>
        </main>
      </Layout>
    </>
  );
}

export default App;
