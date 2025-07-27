import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { DriveEta } from '@mui/icons-material';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        bgcolor: scrolled ? 'rgba(50, 50, 50, 0.95)' : '#333333',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <DriveEta 
            sx={{ 
              color: '#ff0000', 
              fontSize: 35, 
              mr: 1,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'rotate(360deg)'
              }
            }} 
          />
          <Typography 
            variant="h4" 
            fontWeight={800} 
            sx={{
              color: '#ffffff',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Motus Drive
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {user ? (
            <>
              <Button
                component={RouterLink}
                to="/dashboard"
                variant="outlined"
                sx={{
                  color: '#ffffff',
                  borderColor: '#ffffff',
                  borderRadius: 25,
                  px: 3,
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#ff0000',
                    color: '#ff0000',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Dashboard
              </Button>
              <Button
                onClick={logout}
                variant="contained"
                sx={{
                  bgcolor: '#ff0000',
                  borderRadius: 25,
                  px: 3,
                  fontWeight: 600,
                  boxShadow: '0 4px 20px rgba(255,0,0,0.3)',
                  '&:hover': {
                    bgcolor: '#cc0000',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={RouterLink}
                to="/login"
                variant="outlined"
                sx={{
                  color: '#ffffff',
                  borderColor: '#ffffff',
                  borderRadius: 25,
                  px: 3,
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#ff0000',
                    color: '#ff0000',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Log In
              </Button>
              <Button
                component={RouterLink}
                to="/register"
                variant="contained"
                sx={{
                  bgcolor: '#ff0000',
                  borderRadius: 25,
                  px: 3,
                  fontWeight: 600,
                  boxShadow: '0 4px 20px rgba(255,0,0,0.3)',
                  '&:hover': {
                    bgcolor: '#cc0000',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
