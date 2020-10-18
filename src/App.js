import React from 'react';
import MiscProvider from './contexts/misc'
import BackgroundVideo from './components/background-video'
import Logo from './components/logo'
import Nav from './components/nav'
import CallToAction from './components/call-to-action'
import 'animate.css'
import './App.css'

function App() {
  return (
    <MiscProvider>
      <div className="App">
        <BackgroundVideo />
        <CallToAction />
        <Logo />
        <Nav />
      </div>
    </MiscProvider>
  );
}

export default App;
