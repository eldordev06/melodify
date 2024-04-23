import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <main className="flex-grow relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-auto px-10"></div>
        </main>
      </Layout>
    </>
  );
}

export default App;
