import React from 'react';
import { Box, Typography, Container, Paper, Stack } from '@mui/material';
import { PersonAdd, Search, DriveEta } from '@mui/icons-material';

const steps = [
  {
    icon: <PersonAdd fontSize="large" color="primary" />,
    title: '1. Sign Up',
    description: 'Create your account and tell us about your driving goals and experience level.'
  },
  {
    icon: <Search fontSize="large" color="primary" />,
    title: '2. Find Instructor',
    description: 'Browse certified instructors in your area and choose based on reviews and availability.'
  },
  {
    icon: <DriveEta fontSize="large" color="primary" />,
    title: '3. Start Learning',
    description: 'Book your lessons and start your journey to becoming a confident driver.'
  }
];

const Process: React.FC = () => (
  <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
    <Container>
      <Typography variant="h3" textAlign="center" fontWeight={600} gutterBottom>
        How It Works
      </Typography>
      <Typography 
        variant="h6" 
        textAlign="center" 
        color="text.secondary" 
        sx={{ mb: 6 }}
      >
        Get started in just 3 simple steps
      </Typography>
      
      {/* Stack with Flexbox instead of Grid */}
      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        spacing={4}
        sx={{ alignItems: 'stretch' }}
      >
        {steps.map((step, index) => (
          <Box key={index} sx={{ flex: 1 }}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 4, 
                textAlign: 'center', 
                height: '100%',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Box sx={{ mb: 2 }}>
                {step.icon}
              </Box>
              <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
                {step.title}
              </Typography>
              <Typography color="text.secondary">
                {step.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Stack>
    </Container>
  </Box>
);

export default Process;
