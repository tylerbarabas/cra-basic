import React from 'react';
import BackgroundVideo from './components/background-video'
import MiscProvider from './contexts/misc'
import './App.css';

function App() {
  return (
    <MiscProvider>
      <div className="App">
        <BackgroundVideo />
        <h1
          style={{
            color: 'white',
            position: 'absolute',
            top: 0,
            left: '100px',
          }}>Bill Godfrey</h1>
      </div>
    </MiscProvider>
  );
}

export default App;
