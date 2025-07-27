import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Benefits from './Benefits';
import Process from './Process';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

const LandingPage: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <Benefits />
    <Process />
    <Testimonials />
    <CTA />
    <Footer />
  </>
);

export default LandingPage;
