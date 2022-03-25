import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
