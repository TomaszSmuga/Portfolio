import "./App.css";
import ArrayTest from "./pages/ArrayTest";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Route, Routes } from "react-router-dom";
import { Abouts } from "./pages/Abouts";
import { Menu } from "./components/Menu/Menu";
import { RegisterPage } from "./pages/Auth/Register";
import { LoginPage } from "./pages/Auth/Login";
import { AuthContextProvider } from "./Context/Context";

const App: React.FC = () => {
  return (
    <>
      <AuthContextProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<ArrayTest />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<Abouts />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
