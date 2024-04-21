import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <main className="w-full h-full flex items-center justify-center">
          <button className="bg-red-600 w-20 h-10 rounded-lg">click me!</button>
        </main>
      </Layout>
    </>
  );
}

export default App;
