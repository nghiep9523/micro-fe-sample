import React from "react";
import "./App.css";
const List = React.lazy(() => import("./modules/List"));
const Cart = React.lazy(() => import("./modules/Cart"));

function App() {
  return (
    <div className="App">
      <div className="list-app">
        <List />
      </div>
      <div className="cart-app">
        <Cart />
      </div>
    </div>
  );
}

export default App;
