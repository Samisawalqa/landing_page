import './App.css';
import Header from "./landing/Header"
import Footer from "./landing/Footer"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Hero from './landing/Hero';
import About from './landing/About';
import Count from './landing/Count';
import WhyUs from './landing/WhyUs';
import Features from './landing/Features';
import Courses from './landing/Courses';
import Trainers from './landing/Trainers';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <div className="index-page">

        <Header />

        <main className="main">

          <Hero />

          <About />

          <Count />

          <WhyUs/>

          <Features/>

          <Courses/>

          <Trainers/>

        </main>

        <Footer />

      </div>
    </div>
  );
}

export default App;
