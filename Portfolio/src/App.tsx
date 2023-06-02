import { useState } from "react";
import "./App.css";
import { FormComponent } from "./pages/LandingPage";
import { GlobalStyles } from "./Utilities/GlobalStyles";
import { Task } from "./pages/Task";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <FormComponent />
    </>
  );
};

export default App;
