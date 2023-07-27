import React from 'react';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <header>
        <h2>My Shopping List</h2>
        <button>Dark Mode</button>
      </header>
      <ShoppingList />
    </div>
  );
}

export default App;
