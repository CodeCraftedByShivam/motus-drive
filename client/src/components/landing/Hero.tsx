import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { DriveEta } from '@mui/icons-material';

const Hero: React.FC = () => (
  <Box 
    component="section"
    aria-label="Hero Section"
    sx={{ 
      pt: { xs: 12, sm: 15 }, 
      pb: { xs: 8, sm: 10 },
      background: 'linear-gradient(135deg, #e8e8e8 0%, #ffffff 50%, #f5f5f5 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: { xs: '80vh', sm: '90vh' },
      display: 'flex',
      alignItems: 'center',
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
    {/* Floating car icon - responsive positioning and sizing */}
    <Box
      sx={{
        position: 'absolute',
        top: { xs: '15%', sm: '20%' },
        right: { xs: '5%', sm: '10%' },
        color: 'rgba(255,0,0,0.1)',
        fontSize: { xs: '60px', sm: '80px', md: '120px' },
        animation: 'floatIcon 15s ease-in-out infinite',
        display: { xs: 'none', sm: 'block' }, // Hide on mobile for cleaner look
        '@keyframes floatIcon': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' }
        }
      }}
      aria-hidden="true"
    >
      <DriveEta />
    </Box>

    <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
      <Typography 
        variant="h1" 
        component="h1"
        fontWeight={800} 
        sx={{ 
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '4.5rem' },
          color: '#222222',
          mb: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 0 },
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          animation: 'fadeInUp 1s ease-out',
          lineHeight: { xs: 1.2, sm: 1.3 },
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
        component="p"
        sx={{ 
          mb: { xs: 4, sm: 5 }, 
          color: '#555555',
          fontWeight: 400,
          lineHeight: 1.6,
          px: { xs: 3, sm: 2, md: 0 },
          fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
          animation: 'fadeInUp 1s ease-out 0.3s both'
        }}
      >
        Connect with certified instructors and book driving lessons at your convenience. 
        Start your journey to safe, confident driving today! 🚗
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Button
          component={RouterLink}
          to="/register"
          size="large"
          variant="contained"
          sx={{ 
            px: { xs: 4, sm: 6 }, 
            py: { xs: 1.5, sm: 2 }, 
            fontSize: { xs: '1.1rem', sm: '1.3rem' },
            borderRadius: 50,
            bgcolor: '#ff0000',
            color: 'white',
            fontWeight: 700,
            textTransform: 'none',
            boxShadow: '0 8px 25px rgba(255,0,0,0.3)',
            animation: 'fadeInUp 1s ease-out 0.6s both',
            transition: 'all 0.3s ease',
            minWidth: { xs: '200px', sm: '240px' },
            '&:hover': {
              bgcolor: '#cc0000',
              transform: 'translateY(-3px)',
              boxShadow: '0 12px 35px rgba(255,0,0,0.4)',
            },
            '&:active': {
              transform: 'translateY(-1px)',
            }
          }}
        >
          🚀 Get Started Today
        </Button>

        {/* Optional secondary button for browse instructors */}
        <Button
          component={RouterLink}
          to="/instructors"
          size="large"
          variant="outlined"
          sx={{ 
            px: { xs: 3, sm: 4 }, 
            py: { xs: 1.5, sm: 2 }, 
            fontSize: { xs: '1rem', sm: '1.1rem' },
            borderRadius: 50,
            color: '#ff0000',
            borderColor: '#ff0000',
            fontWeight: 600,
            textTransform: 'none',
            animation: 'fadeInUp 1s ease-out 0.8s both',
            transition: 'all 0.3s ease',
            minWidth: { xs: '180px', sm: '200px' },
            '&:hover': {
              bgcolor: 'rgba(255,0,0,0.1)',
              borderColor: '#cc0000',
              color: '#cc0000',
              transform: 'translateY(-2px)',
            }
          }}
        >
          Browse Instructors
        </Button>
      </Box>

      {/* Trust indicators */}
      <Box 
        sx={{ 
          mt: { xs: 6, sm: 8 },
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: { xs: 3, sm: 6 },
          opacity: 0.8,
          animation: 'fadeInUp 1s ease-out 1s both'
        }}
      >
        {[
          { stat: '10K+', label: 'Students' },
          { stat: '500+', label: 'Instructors' },
          { stat: '95%', label: 'Success Rate' }
        ].map((item, index) => (
          <Box key={item.label} sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h4" 
              fontWeight={700} 
              sx={{ 
                color: '#ff0000',
                fontSize: { xs: '1.5rem', sm: '2rem' },
                lineHeight: 1
              }}
            >
              {item.stat}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#666666',
                fontWeight: 500,
                fontSize: { xs: '0.8rem', sm: '0.9rem' }
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Hero;
