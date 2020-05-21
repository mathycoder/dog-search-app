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
      <body>
        <div className="App-main">
          <ImageDisplay />
        </div>
      </body>
    </div>
  );
}

export default App;
