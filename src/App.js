import React from 'react';
import MiscProvider from './contexts/misc'
import BackgroundVideo from './components/background-video'
import Logo from './components/logo'
import Nav from './components/nav'
import 'animate.css'
import './App.css'

function App() {
  return (
    <MiscProvider>
      <div className="App">
        <BackgroundVideo />
        <Logo />
        <Nav />
      </div>
    </MiscProvider>
  );
}

export default App;
