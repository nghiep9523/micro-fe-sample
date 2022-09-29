import React from 'react';
import './App.css';
const List = React.lazy(() => import('list/List'));

const App = () => {
  return (
    <div className="App">
      <div>This is host container</div>
      <List/>
    </div>
  );
}

export default App;
