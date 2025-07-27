import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ bgcolor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" fontWeight={700} color="primary">
          Motus Drive
        </Typography>

        <Box>
          {user ? (
            // Show user info and logout for logged-in users
            <>
              <Button
                component={RouterLink}
                to="/dashboard"
                color="primary"
                sx={{ mr: 2 }}
              >
                Dashboard
              </Button>
              <Button
                onClick={logout}
                variant="outlined"
                color="primary"
              >
                Logout
              </Button>
            </>
          ) : (
            // Show login/signup for guests
            <>
              <Button
                component={RouterLink}
                to="/login"
                color="primary"
                sx={{ mr: 2 }}
              >
                Log In
              </Button>
              <Button
                component={RouterLink}
                to="/register"
                variant="contained"
                color="primary"
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
