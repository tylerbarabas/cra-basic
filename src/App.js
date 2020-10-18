import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import MiscProvider from './contexts/misc'
import BackdropProvider from './contexts/backdrop'
import BackgroundVideo from './components/background-video'
import Logo from './components/logo'
import Nav from './components/nav'
import CallToAction from './components/call-to-action'
import ElectronicPressKit from './components/electronic-press-kit'
import Blog from './components/blog'
import 'animate.css'
import './App.css'

function App() {
  return (
    <MiscProvider>
      <div className="App">
        <BrowserRouter>
          <BackdropProvider>
            <BackgroundVideo />
            <Switch>
              <Route
                exact
                path="/"
                component={CallToAction}
              />
              <Route
                exact
                path="/epk"
                component={ElectronicPressKit}
              />
              <Route
                exact
                path="/blog"
                component={Blog}
              />
            </Switch>
            <Link to="/">
              <Logo />
            </Link>
            <Nav />
          </BackdropProvider>
        </BrowserRouter>
      </div>
    </MiscProvider>
  );
}

export default App;
