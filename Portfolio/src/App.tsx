import { useState } from "react";
import "./App.css";
// import { FormComponent } from "./pages/LandingPage";
import { GlobalStyles } from "./Utilities/GlobalStyles";
import { Task } from "./pages/Task";
import { Test } from "./pages/TestPage";

const App: React.FC = () => {
  return (
    <>
      {/* <GlobalStyles /> */}
      {/* <FormComponent /> */}
      <Test />
    </>
  );
};

export default App;
