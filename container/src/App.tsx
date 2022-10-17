import React from "react";
import "./App.css";
const List = React.lazy(() => import("./modules/List"));

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
