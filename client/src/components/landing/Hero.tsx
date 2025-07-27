import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { DriveEta } from '@mui/icons-material';

const Hero: React.FC = () => (
  <Box 
    sx={{ 
      pt: 15, 
      pb: 10,
      background: 'linear-gradient(135deg, #e8e8e8 0%, #ffffff 50%, #f5f5f5 100%)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,0,0,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,0,0,0.05) 0%, transparent 50%)',
        animation: 'floatBackground 20s ease-in-out infinite',
      },
      '@keyframes floatBackground': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' }
      }
    }}
  >
    {/* Floating car icon */}
    <Box
      sx={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        color: 'rgba(255,0,0,0.1)',
        fontSize: '120px',
        animation: 'floatIcon 15s ease-in-out infinite',
        '@keyframes floatIcon': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' }
        }
      }}
    >
      <DriveEta />
    </Box>

    <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
      <Typography 
        variant="h1" 
        fontWeight={800} 
        sx={{ 
          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
          color: '#222222',
          mb: 3,
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          animation: 'fadeInUp 1s ease-out',
          '@keyframes fadeInUp': {
            '0%': { opacity: 0, transform: 'translateY(30px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        Master Driving with Confidence
      </Typography>

      <Typography 
        variant="h5" 
        sx={{ 
          mb: 5, 
          color: '#555555',
          fontWeight: 400,
          lineHeight: 1.6,
          animation: 'fadeInUp 1s ease-out 0.3s both'
        }}
      >
        Connect with certified instructors and book driving lessons at your convenience. 
        Start your journey to safe, confident driving today! 🚗
      </Typography>

      <Button
        component={RouterLink}
        to="/register"
        size="large"
        variant="contained"
        sx={{ 
          px: 6, 
          py: 2, 
          fontSize: '1.3rem',
          borderRadius: 50,
          bgcolor: '#ff0000',
          color: 'white',
          fontWeight: 700,
          textTransform: 'none',
          boxShadow: '0 8px 25px rgba(255,0,0,0.3)',
          animation: 'fadeInUp 1s ease-out 0.6s both',
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: '#cc0000',
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 35px rgba(255,0,0,0.4)',
          }
        }}
      >
        🚀 Get Started Today
      </Button>
    </Container>
  </Box>
);

export default Hero;
