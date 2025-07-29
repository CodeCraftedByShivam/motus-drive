import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { DriveEta } from '@mui/icons-material';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileNavClick = () => {
    setMobileOpen(false);
  };

  // Mobile drawer content
  const drawer = (
    <Box 
      sx={{ 
        width: 280, 
        height: '100%',
        bgcolor: '#333333',
        color: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Mobile header */}
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <DriveEta sx={{ color: '#ff0000', fontSize: 30, mr: 1 }} />
          <Typography variant="h6" fontWeight={700} color="white">
            Motus Drive
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Mobile navigation items */}
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {user ? (
          <>
            <ListItem 
              component={RouterLink} 
              to="/dashboard" 
              onClick={handleMobileNavClick}
              sx={{ 
                py: 2,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              <ListItemText 
                primary="Dashboard" 
                primaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem' }}
              />
            </ListItem>
            <ListItem 
              component={RouterLink} 
              to="/instructors" 
              onClick={handleMobileNavClick}
              sx={{ 
                py: 2,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              <ListItemText 
                primary="Browse Instructors" 
                primaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem' }}
              />
            </ListItem>
            <ListItem 
              onClick={() => {
                logout();
                handleMobileNavClick();
              }}
              sx={{ 
                py: 2,
                cursor: 'pointer',
                '&:hover': { bgcolor: 'rgba(255,0,0,0.1)' }
              }}
            >
              <ListItemText 
                primary="Logout" 
                primaryTypographyProps={{ 
                  fontWeight: 600, 
                  fontSize: '1.1rem',
                  color: '#ff0000'
                }}
              />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem 
              component={RouterLink} 
              to="/instructors" 
              onClick={handleMobileNavClick}
              sx={{ 
                py: 2,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              <ListItemText 
                primary="Browse Instructors" 
                primaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem' }}
              />
            </ListItem>
            <ListItem 
              component={RouterLink} 
              to="/login" 
              onClick={handleMobileNavClick}
              sx={{ 
                py: 2,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              <ListItemText 
                primary="Log In" 
                primaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem' }}
              />
            </ListItem>
            <ListItem 
              component={RouterLink} 
              to="/register" 
              onClick={handleMobileNavClick}
              sx={{ 
                py: 2,
                '&:hover': { bgcolor: 'rgba(255,0,0,0.1)' }
              }}
            >
              <ListItemText 
                primary="Sign Up" 
                primaryTypographyProps={{ 
                  fontWeight: 600, 
                  fontSize: '1.1rem',
                  color: '#ff0000'
                }}
              />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          bgcolor: scrolled ? 'rgba(50, 50, 50, 0.95)' : '#333333',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
          zIndex: theme.zIndex.drawer + 1
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <DriveEta 
              sx={{ 
                color: '#ff0000', 
                fontSize: { xs: 28, sm: 35 }, 
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
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
              }}
            >
              Motus Drive
            </Typography>
          </Box>

          {/* Desktop navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {user ? (
                <>
                  <Button
                    component={RouterLink}
                    to="/instructors"
                    variant="text"
                    sx={{
                      color: '#ffffff',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        color: '#ff0000',
                        bgcolor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    Browse Instructors
                  </Button>
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
                      textTransform: 'none',
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
                      textTransform: 'none',
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
                    to="/instructors"
                    variant="text"
                    sx={{
                      color: '#ffffff',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        color: '#ff0000',
                        bgcolor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    Browse Instructors
                  </Button>
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
                      textTransform: 'none',
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
                      textTransform: 'none',
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
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
