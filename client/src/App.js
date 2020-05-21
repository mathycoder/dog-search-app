import React from 'react';
import MenuBar from './components/MenuBar'
// import QueryBar from './components/QueryBar'
import ImageDisplay from './components/ImageDisplay'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <MenuBar />
      </header>
      <main>
        <div className="App-main">
          <ImageDisplay />
        </div>
      </main>
    </div>
  );
}

export default App;
