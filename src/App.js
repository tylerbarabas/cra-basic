import React from 'react';
import BackgroundVideo from './components/background-video'
import './App.css';

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <p style={{color: 'white', position: 'absolute', top: 0, left: 0}}>Hello</p>
    </div>
  );
}

export default App;
