import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/Layout/Layout";
import Search from "./components/pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
