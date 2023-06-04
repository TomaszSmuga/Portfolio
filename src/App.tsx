import { useState } from "react";
import "./App.css";
// import { FormComponent } from "./pages/LandingPage";
import { GlobalStyles } from "./Utilities/GlobalStyles";
import { Task } from "./pages/Task";
import { Test } from "./pages/TestPage";
import { TestMap2 } from "./pages/LandingPage";

const App: React.FC = () => {
  return (
    <>
      {/* <GlobalStyles /> */}
      {/* <TestMap2 /> */}
      <Test />
    </>
  );
};

export default App;
