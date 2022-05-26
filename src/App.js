import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Landing from './components/Landing'
import MobileLanding from './components/MobileLanding';
import MobileNav from './components/MobileNavbar';
import Skills from './components/Skills';
import Work from './components/Work'
import Credits from './components/Credits'
import Footer from './components/Footer';

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
    <div className="App Light">
      {/* <header className="App-header">
        <Nav />
      </header> */}
      <main className="App-main">
        {
          (windowWidth > 650) ?
          <div className="Desktop-app">
            <Landing />
            <About />
    
            <Work />
            <Contact />
            <Footer />
          </div>
          : 
          <div className="Mobile-app">
            <MobileLanding />
            <MobileNav />
            <About />
     
            <Work />
            <Contact />
            <Footer />
          </div>
        }
      <Routes>
        <Route path="/credits" element={<Credits />} />
      </Routes>
      </main>

    </div>
  );
}

export default App;
