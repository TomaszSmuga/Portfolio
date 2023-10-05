import "./App.css";
import ArrayTest from "./pages/ArrayTest";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Route, Routes, Link } from "react-router-dom";
import { Abouts } from "./pages/Abouts";
import { Menu } from "./components/Menu/Menu";
const App: React.FC = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<ArrayTest />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<Abouts />} />
        <Route path="*" />
      </Routes>
    </>
  );
};

export default App;
