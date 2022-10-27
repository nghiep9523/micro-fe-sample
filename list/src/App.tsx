import { Provider } from "react-redux";
import store from "store/store";

import "./App.css";
import Home from "./Home";

const App = () => {
  return (
    <Provider store={store as any}>
      <Home />
    </Provider>
  );
};

export default App;
