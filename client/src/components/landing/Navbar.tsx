import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          bgcolor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <DriveEta 
                sx={{ 
                  color: scrolled ? '#1976d2' : '#fff', 
                  fontSize: 35, 
                  mr: 1 
                }} 
              />
            </motion.div>
            <Typography 
              variant="h4" 
              fontWeight={800} 
              sx={{
                background: scrolled 
                  ? 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)'
                  : 'linear-gradient(45deg, #fff 30%, #f0f8ff 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: scrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              Motus Drive
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {user ? (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    component={RouterLink}
                    to="/dashboard"
                    variant="outlined"
                    sx={{
                      color: scrolled ? '#1976d2' : '#fff',
                      borderColor: scrolled ? '#1976d2' : '#fff',
                      borderRadius: 25,
                      px: 3,
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: scrolled ? '#1976d2' : '#fff',
                        bgcolor: scrolled ? 'rgba(25,118,210,0.1)' : 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    Dashboard
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={logout}
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                      borderRadius: 25,
                      px: 3,
                      fontWeight: 600,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FF8E8E 30%, #6EEEE6 90%)',
                      }
                    }}
                  >
                    Logout
                  </Button>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    component={RouterLink}
                    to="/login"
                    variant="outlined"
                    sx={{
                      color: scrolled ? '#1976d2' : '#fff',
                      borderColor: scrolled ? '#1976d2' : '#fff',
                      borderRadius: 25,
                      px: 3,
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: scrolled ? '#1976d2' : '#fff',
                        bgcolor: scrolled ? 'rgba(25,118,210,0.1)' : 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    Log In
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    component={RouterLink}
                    to="/register"
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                      borderRadius: 25,
                      px: 3,
                      fontWeight: 600,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #8a9ef5 30%, #9168b8 90%)',
                      }
                    }}
                  >
                    Sign Up
                  </Button>
                </motion.div>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;
