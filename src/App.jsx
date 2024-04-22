import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <main className="flex-grow relative">
          <div className="bg-blue-600 absolute top-0 left-0 right-0 bottom-0 opacity-50 overflow-auto">
            <button className="bg-red-600 w-20 h-10 rounded-lg">
              click me!
            </button>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default App;
