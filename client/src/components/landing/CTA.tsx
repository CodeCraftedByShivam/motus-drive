import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CTA: React.FC = () => (
  <Box 
    sx={{ 
      py: 8, 
      background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)', 
      color: '#fff' 
    }}
  >
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Ready to Start Your Driving Journey?
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
        Join thousands of students who have successfully learned to drive with Motus Drive. 
        Your road to independence starts here.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button
          component={RouterLink}
          to="/register"
          size="large"
          variant="contained"
          color="secondary"
          sx={{ px: 4, py: 1.5 }}
        >
          Sign Up Now
        </Button>
        <Button
          component={RouterLink}
          to="/login"
          size="large"
          variant="outlined"
          sx={{ 
            px: 4, 
            py: 1.5, 
            color: 'white', 
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white',
              bgcolor: 'rgba(255,255,255,0.1)'
            }
          }}
        >
          Already Have Account?
        </Button>
      </Box>
    </Container>
  </Box>
);

export default CTA;
