import logo from './logo.svg';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax'
import {Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Landing from './components/Landing'
import Nav from './components/Nav'
import Resume from './components/Resume'
import Work from './components/Work'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Nav />
      </header> */}
      <main className="App-main">
        <Landing />
        <About />
        <Work />
        <Contact />

      </main>

    </div>
  );
}

export default App;
