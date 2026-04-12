import React, { useEffect } from 'react';
import { HashRouter  as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Pricing from './components/Pricing'
import './App.css';
import Achievements from './components/Achievements';
import Experience from './components/Experience';

// Scroll handler component
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

function AppContent() {
  return (
    <div className="app">
      <Header />
      <ScrollHandler />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Education/>
              <Skills />
              <Experience />
              <Services />
              <Projects />
              <Achievements />
              <Testimonials />
              <Connect />
              <Footer/>
            </>
          } />
           <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

export default App;