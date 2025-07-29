import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ py: 6, bgcolor: '#222222', color: '#ffffff' }}>
    <Container>
      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4,
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' } }}>
          <Typography variant="h6" fontWeight={700} sx={{ color: '#ff0000', mb: 2, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
            Motus Drive
          </Typography>
          <Typography variant="body2" sx={{ color: '#cccccc', mb: 2, lineHeight: 1.6 }}>
            Your trusted partner in learning to drive safely and confidently. 
            Professional instruction, flexible scheduling, modern vehicles.
          </Typography>
        </Box>
        
        <Box sx={{ flex: { xs: '1 1 45%', md: '1 1 25%' } }}>
          <Typography variant="h6" fontWeight={600} sx={{ color: '#ffffff', mb: 2, fontSize: { xs: '1rem', md: '1.15rem' } }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/register" sx={{ color: '#cccccc', textDecoration: 'none', cursor: 'pointer', '&:hover': { color: '#ff0000' } }}>
              • Sign Up
            </Link>
            <Link href="/login" sx={{ color: '#cccccc', textDecoration: 'none', cursor: 'pointer', '&:hover': { color: '#ff0000' } }}>
              • Log In
            </Link>
            <Link href="#" sx={{ color: '#cccccc', textDecoration: 'none', cursor: 'pointer', '&:hover': { color: '#ff0000' } }}>
              • About Us
            </Link>
          </Box>
        </Box>
        
        <Box sx={{ flex: { xs: '1 1 45%', md: '1 1 25%' } }}>
          <Typography variant="h6" fontWeight={600} sx={{ color: '#ffffff', mb: 2, fontSize: { xs: '1rem', md: '1.15rem' } }}>
            Support
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" sx={{ color: '#cccccc', textDecoration: 'none', cursor: 'pointer', '&:hover': { color: '#ff0000' } }}>
              • Help Center
            </Link>
            <Link href="#" sx={{ color: '#cccccc', textDecoration: 'none', cursor: 'pointer', '&:hover': { color: '#ff0000' } }}>
              • Safety Guidelines
            </Link>
            <Link href="#" sx={{ color: '#cccccc', textDecoration: 'none', cursor: 'pointer', '&:hover': { color: '#ff0000' } }}>
              • Terms of Service
            </Link>
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ borderTop: '1px solid #444444', mt: 4, pt: 3, textAlign: 'center', px: { xs: 2, md: 0 } }}>
        <Typography variant="body2" sx={{ color: '#888888', fontSize: { xs: '0.85rem', md: '1rem' } }}>
          © {new Date().getFullYear()} Motus Drive. All rights reserved. Built with ❤️ for safer roads.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
