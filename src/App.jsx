import Layout from "./components/Layout/Layout";
import Playlists from "./components/Playlists";
import Rec from "./components/Rec";

function App() {
  return (
    <>
      <Layout>
        <main className="flex-grow relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-auto px-10 pb-10">
            <Playlists heading="Good morning" />
            <Rec heading="Shows you might like" />
          </div>
        </main>
      </Layout>
    </>
  );
}

export default App;
