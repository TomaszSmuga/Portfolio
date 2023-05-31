import { useState } from "react";
import "./App.css";
import { FormComponent } from "./pages/LandingPage";
import { GlobalStyles } from "./Utilities/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <FormComponent />
    </>
  );
};

export default App;
