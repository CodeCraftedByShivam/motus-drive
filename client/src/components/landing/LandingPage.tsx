import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LandingPage: React.FC = () => (
  <Container sx={{ py: 8, textAlign: 'center' }}>
    <Typography variant="h2" gutterBottom>
      Welcome to Motus Drive
    </Typography>
    <Typography variant="h6" sx={{ mb: 4 }}>
      Professional driving lessons at your convenience
    </Typography>
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
      <Button
        component={RouterLink}
        to="/register"
        variant="contained"
        size="large"
      >
        Sign Up
      </Button>
      <Button
        component={RouterLink}
        to="/login"
        variant="outlined"
        size="large"
      >
        Log In
      </Button>
    </Box>
  </Container>
);

export default LandingPage;
