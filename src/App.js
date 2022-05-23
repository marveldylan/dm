import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax'
import {Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Landing from './components/Landing'
import MobileLanding from './components/MobileLanding';
import Resume from './components/Resume'
import Work from './components/Work'

function App() {

  const [windowWidth, setWidth] = useState(window.innerWidth)
  const [windowHeight, setHeight] = useState(window.innerHeight)


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
      console.log(window.innerWidth, 'width')
      console.log(window.innerHeight, 'height')
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth, windowHeight])

  return (
    <div className="App">
      {/* <header className="App-header">
        <Nav />
      </header> */}
      <main className="App-main">
        {
          (windowWidth > 650) ?
          <Landing />
          : <MobileLanding />
        }

        <About />
        <Work />
        <Contact />
      </main>

    </div>
  );
}

export default App;
