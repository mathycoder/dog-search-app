import React from 'react';
import MenuBar from './components/MenuBar'
import QueryBar from './components/QueryBar'
import ImageDisplay from './components/ImageDisplay'
import './App.css'

function App() {
  return (
    <div className="App noselect">
      <header>
        <MenuBar />
      </header>
      <div className="App-main">
        <QueryBar />
        <ImageDisplay />
      </div>
    </div>
  );
}

export default App;
