import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
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
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={CallToAction}
            />
          </Switch>
          <Link to="/">
            <Logo />
          </Link>
          <Nav />
        </BrowserRouter>
      </div>
    </MiscProvider>
  );
}

export default App;
