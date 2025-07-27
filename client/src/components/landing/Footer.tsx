import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer: React.FC = () => (
  <Box sx={{ py: 6, bgcolor: '#f5f5f5' }}>
    <Container>
      {/* Flexbox container instead of Grid */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4,
          justifyContent: 'space-between'
        }}
      >
        {/* Company Info */}
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' } }}>
          <Typography variant="h6" fontWeight={700} color="primary" gutterBottom>
            Motus Drive
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Your trusted partner in learning to drive safely and confidently. 
            Professional instruction, flexible scheduling, modern vehicles.
          </Typography>
        </Box>
        
        {/* Quick Links */}
        <Box sx={{ flex: { xs: '1 1 45%', md: '1 1 25%' } }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/register" color="text.secondary">Sign Up</Link>
            <Link href="/login" color="text.secondary">Log In</Link>
            <Link href="#" color="text.secondary">About Us</Link>
            <Link href="#" color="text.secondary">Contact</Link>
          </Box>
        </Box>
        
        {/* Support */}
        <Box sx={{ flex: { xs: '1 1 45%', md: '1 1 25%' } }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Support
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" color="text.secondary">Help Center</Link>
            <Link href="#" color="text.secondary">Safety Guidelines</Link>
            <Link href="#" color="text.secondary">Terms of Service</Link>
            <Link href="#" color="text.secondary">Privacy Policy</Link>
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ borderTop: '1px solid #e0e0e0', mt: 4, pt: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Motus Drive. All rights reserved. Built with ❤️ for safer roads.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
