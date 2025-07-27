import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Hero: React.FC = () => (
  <Box 
    sx={{ 
      py: 12, 
      background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)', 
      color: '#fff' 
    }}
  >
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="h2" fontWeight={700} gutterBottom>
        Master Driving with Confidence
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
        Connect with certified instructors and book driving lessons at your convenience. 
        Start your journey to safe, confident driving today.
      </Typography>
      <Button
        component={RouterLink}
        to="/register"
        size="large"
        variant="contained"
        color="secondary"
        sx={{ 
          px: 4, 
          py: 1.5, 
          fontSize: '1.1rem',
          borderRadius: 2
        }}
      >
        Get Started Today
      </Button>
    </Container>
  </Box>
);

export default Hero;
