import "./App.css";
import ArrayTest from "./pages/ArrayTest";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<ArrayTest />} />
      </Routes>
    </>
  );
};

export default App;
