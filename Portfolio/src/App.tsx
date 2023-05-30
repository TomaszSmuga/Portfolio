import { useState } from "react";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { GlobalStyles } from "./Utilities/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <LandingPage />
    </>
  );
};

export default App;
