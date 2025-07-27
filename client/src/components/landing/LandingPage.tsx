import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Benefits from './Benefits';
import Process from './Process';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';
import { Box } from '@mui/material';

const LandingPage: React.FC = () => (
  <Box sx={{ 
    background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%)',
    minHeight: '100vh'
  }}>
    <Navbar />
    <Hero />
    <Benefits />
    <Process />
    <Testimonials />
    <CTA />
    <Footer />
  </Box>
);

export default LandingPage;
