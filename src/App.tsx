import "./App.css";
import ArrayTest from "./pages/ArrayTest";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Route, Routes, Link } from "react-router-dom";
import { Abouts } from "./pages/Abouts";

const App: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/test"}>Test</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<ArrayTest />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<Abouts />} />
      </Routes>
    </>
  );
};

export default App;
