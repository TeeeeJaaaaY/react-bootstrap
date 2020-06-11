import React from 'react';
import './App.css';
import { Nav } from './components/Nav/Nav';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { About } from './components/About/About';
import { CTA } from './components/CTA/CTA';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Stats } from './components/Stats/Stats';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Footer } from './components/Footer/Footer';
import { Modal } from './components/Modal/Modal';


function App() {
  return (
    <>
      <div className="ts-page-wrapper" id="page-top">

        <Nav />

        <Hero />

        <main id="ts-content">
    
          <Services />

          <About />

          <CTA />

          <Portfolio />

          <Stats />

          <Testimonials />

        </main>

        <Footer />
          
      </div>

      <Modal />
    </>
  );
}

export default App;
