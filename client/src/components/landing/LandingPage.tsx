import React from 'react';
import { Box, Fade } from '@mui/material';
import Navbar from './Navbar';
import Hero from './Hero';
import Benefits from './Benefits';
import Process from './Process';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        bgcolor: '#ffffff',
      }}
    >
      {/* Fixed/Sticky Navigation */}
      <Navbar />
      
      {/* Page Content with Smooth Scrolling */}
      <Box
        sx={{
          '& > *': {
            scrollMarginTop: '80px', // Adjust based on navbar height
          },
          '& section': {
            position: 'relative',
            zIndex: 1,
          }
        }}
      >
        {/* Hero Section */}
        <Fade in timeout={800}>
          <Box>
            <Hero />
          </Box>
        </Fade>

        {/* Benefits Section */}
        <Box sx={{ py: { xs: 0, sm: 2 } }}>
          <Benefits />
        </Box>

        {/* Process Section */}
        <Box sx={{ py: { xs: 0, sm: 2 } }}>
          <Process />
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ py: { xs: 0, sm: 2 } }}>
          <Testimonials />
        </Box>

        {/* Call to Action Section */}
        <CTA />
      </Box>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default LandingPage;
