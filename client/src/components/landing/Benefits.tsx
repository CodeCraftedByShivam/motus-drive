import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { DirectionsCar, Schedule, Verified, School } from '@mui/icons-material';

const benefits = [
  { 
    icon: <Verified fontSize="large" color="primary" />, 
    title: 'Certified Instructors', 
    text: 'All instructors are background-checked, licensed, and experienced professionals.' 
  },
  { 
    icon: <Schedule fontSize="large" color="primary" />, 
    title: 'Flexible Scheduling', 
    text: 'Book lessons that fit your schedule - mornings, evenings, or weekends.' 
  },
  { 
    icon: <DirectionsCar fontSize="large" color="primary" />, 
    title: 'Modern Vehicles', 
    text: 'Learn on well-maintained, dual-control cars with latest safety features.' 
  },
  { 
    icon: <School fontSize="large" color="primary" />, 
    title: 'Proven Methods', 
    text: 'Structured curriculum designed to make you a safe and confident driver.' 
  },
];

const Benefits: React.FC = () => (
  <Container sx={{ py: 8 }}>
    <Typography variant="h3" textAlign="center" fontWeight={600} gutterBottom>
      Why Choose Motus Drive?
    </Typography>
    <Typography 
      variant="h6" 
      textAlign="center" 
      color="text.secondary" 
      sx={{ mb: 6 }}
    >
      We make learning to drive safe, convenient, and effective
    </Typography>
    
    {/* Flexbox instead of Grid */}
    <Box 
      sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 4,
        justifyContent: 'center'
      }}
    >
      {benefits.map(({ icon, title, text }) => (
        <Box 
          key={title}
          sx={{ 
            flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' },
            textAlign: 'center',
            minWidth: '250px'
          }}
        >
          <Box sx={{ mb: 2 }}>
            {icon}
          </Box>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
            {title}
          </Typography>
          <Typography color="text.secondary">
            {text}
          </Typography>
        </Box>
      ))}
    </Box>
  </Container>
);

export default Benefits;
