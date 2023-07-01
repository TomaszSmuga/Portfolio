import "./App.css";
import ArrayTest from "./pages/ArrayTest";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <ArrayTest />
      </Provider>
    </>
  );
};

export default App;
