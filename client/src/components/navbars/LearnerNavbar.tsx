import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useTheme,
  useMediaQuery,
  Avatar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Person as PersonIcon,
  ExpandMore,
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  EmojiEvents,
  ListAlt,
  History,
  DirectionsCar,
  Login as LoginIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  AccountCircle,
  LocalLibrary,
  PersonAdd,
} from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// Import AuthModal
import AuthModal from '../auth/AuthModal';

// Replace with your own authentication hook
import { useAuth } from '../../context/AuthContext';

const servicesMenuItems = [
  { label: 'Book a Session', icon: <AssignmentIcon fontSize="small" />, to: '/book-session' },
  { label: 'Packages', icon: <ListAlt fontSize="small" />, to: '/packages' },
  { label: 'Instructors', icon: <SchoolIcon fontSize="small" />, to: '/instructors' },
  { label: 'License Help', icon: <EmojiEvents fontSize="small" />, to: '/license-help' },
  { label: 'Track Progress', icon: <History fontSize="small" />, to: '/progress' },
  { label: 'Mock LL Test', icon: <LocalLibrary fontSize="small" />, to: '/mock-ll-test' },
];

export default function LearnerNavbar() {
  const { user, logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  // Dropdowns for desktop
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(null);
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

  // Mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false);

  // AuthModal state
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Fixed handlers - ensure only one dropdown is open at a time
  const handleServicesOpen = (e: React.MouseEvent<HTMLElement>) => {
    setServicesAnchor(e.currentTarget);
    setProfileAnchor(null); // Close profile when services opens
  };
  const handleServicesClose = () => setServicesAnchor(null);

  const handleProfileOpen = (e: React.MouseEvent<HTMLElement>) => {
    setProfileAnchor(e.currentTarget);
    setServicesAnchor(null); // Close services when profile opens
  };
  const handleProfileClose = () => setProfileAnchor(null);

  const handleMobileDrawer = () => setMobileOpen((open) => !open);

  const handleLogout = () => {
    logout();
    handleProfileClose();
    setMobileOpen(false);
    navigate('/');
  };

  // Mobile Drawer Content
  const mobileDrawer = (
    <Box sx={{ width: 280 }} role="presentation" onClick={handleMobileDrawer}>
      <Toolbar sx={{ bgcolor: '#222', color: '#fff', minHeight: 56 }}>
        <DirectionsCar sx={{ color: '#ff0000', mr: 1, fontSize: 30 }} />
        <Typography variant="h6" fontWeight={700}>
          Motus Drive
        </Typography>
      </Toolbar>
      <Divider />

      {/* Main links */}
      <List>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>

        {/* Services Dropdown as a list */}
        <ListItem disablePadding>
          <ListItemText
            primary={<Box sx={{ px: 2, mt: 1, fontWeight: 700 }}>Services</Box>}
          />
        </ListItem>
        {servicesMenuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={RouterLink} to={item.to} sx={{ pl: 4 }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Profile Dropdown */}
        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <ListItemText
            primary={<Box sx={{ px: 2, mt: 1, fontWeight: 700 }}>Profile</Box>}
          />
        </ListItem>
        {user ? (
          <>
            {/* Logged in */}
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/bookings">
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="My Booking" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/progress">
                <ListItemIcon>
                  <History />
                </ListItemIcon>
                <ListItemText primary="My Progress" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/settings">
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            {/* Not logged in - Updated with modal and registration options */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => {
                setAuthModalOpen(true);
                setMobileOpen(false);
              }}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Sign In / Sign Up" />
              </ListItemButton>
            </ListItem>
            
            {/* Register as Learner */}
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/register">
                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>
                <ListItemText primary="Register as Learner" />
              </ListItemButton>
            </ListItem>
            
            {/* Register as Instructor */}
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/register/instructor">
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Register as Instructor" />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/instructor-login">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Login as Instructor" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/become-instructor">
                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>
                <ListItemText primary="Become an Instructor" />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      {/* Wrapper Box for centering, width control, and top padding */}
      <Box
        sx={{
          position: 'fixed',
          top: { xs: 12, sm: 20 },        // Padding from top (responsive)
          left: '50%',                     // Position at 50% from left
          transform: 'translateX(-50%)',   // Center horizontally
          width: { xs: '95%', sm: '90%' }, // 90% width (95% on mobile for better spacing)
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <AppBar
          position="static" // Changed from fixed since wrapper handles positioning
          elevation={4}
          sx={{
            bgcolor: '#222',
            color: '#fff',
            borderRadius: '20px', // All four corners rounded
            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 64, sm: 70 }, px: { xs: 2, sm: 4 } }}>
            {/* Logo / Brand */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <DirectionsCar
                sx={{
                  color: '#ff0000',
                  mr: 1,
                  fontSize: { xs: 28, sm: 35 },
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(360deg)',
                    color: '#ff4d4d',
                  },
                }}
              />
              <Typography
                variant="h4"
                fontWeight={800}
                component={RouterLink}
                to="/"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: { xs: '1.5rem', sm: '2rem' },
                  userSelect: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#ff0000' },
                }}
              >
                Motus Drive
              </Typography>
            </Box>

            {isMobile ? (
              <IconButton onClick={handleMobileDrawer} sx={{ color: 'white' }} size="large">
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* Nav Links */}
                <Button
                  component={RouterLink}
                  to="/"
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    borderRadius: '20px',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      bgcolor: '#ff0000',
                      color: 'white',
                      boxShadow: '0 0 10px #ff0000',
                    },
                  }}
                  startIcon={<HomeIcon />}
                >
                  Home
                </Button>
                <Button
                  component={RouterLink}
                  to="/about"
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    borderRadius: '20px',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      bgcolor: '#ff3333',
                      color: 'white',
                      boxShadow: '0 0 10px #ff3333',
                    },
                  }}
                  startIcon={<InfoIcon />}
                >
                  About Us
                </Button>

                {/* Services dropdown */}
                <Button
                  color="inherit"
                  onClick={handleServicesOpen}
                  endIcon={<ExpandMore />}
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    borderRadius: '20px',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      bgcolor: '#ff6666',
                      color: 'white',
                      boxShadow: '0 0 15px #ff6666',
                    },
                  }}
                  aria-haspopup="true"
                  aria-controls={servicesAnchor ? 'services-menu' : undefined}
                >
                  Services
                </Button>

                {/* Profile dropdown */}
                <Button
                  color="inherit"
                  onClick={handleProfileOpen}
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    ml: 1,
                    minWidth: 36,
                    borderRadius: '20px',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      bgcolor: '#ff9999',
                      color: 'white',
                      boxShadow: '0 0 15px #ff9999',
                    },
                  }}
                  startIcon={
                    user ? (
                      <Avatar alt="User" sx={{ width: 28, height: 28 }}>
                        {(user.name && user.name) || 'U'}
                      </Avatar>
                    ) : (
                      <AccountCircle sx={{ fontSize: 28 }} />
                    )
                  }
                  endIcon={<ExpandMore />}
                  aria-haspopup="true"
                  aria-controls={profileAnchor ? 'profile-menu' : undefined}
                >
                  Profile
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {/* Services dropdown menu */}
      <Menu
        id="services-menu"
        anchorEl={servicesAnchor}
        open={Boolean(servicesAnchor)}
        onClose={handleServicesClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        sx={{ mt: 1 }}
        PaperProps={{
          sx: {
            borderRadius: 3,
            minWidth: 220,
            boxShadow: theme.shadows,
          },
        }}
      >
        {servicesMenuItems.map((item) => (
          <MenuItem
            key={item.label}
            component={RouterLink}
            to={item.to}
            onClick={handleServicesClose}
            sx={{ fontWeight: 600 }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Profile dropdown menu - UPDATED WITH MODAL INTEGRATION */}
      <Menu
        id="profile-menu"
        anchorEl={profileAnchor}
        open={Boolean(profileAnchor)}
        onClose={handleProfileClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        sx={{ mt: 1 }}
        PaperProps={{
          sx: {
            borderRadius: 3,
            minWidth: 200,
            boxShadow: theme.shadows,
          },
        }}
      >
        {user ? (
          <>
            {/* Logged in user options */}
            <MenuItem
              component={RouterLink}
              to="/bookings"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <AssignmentIcon />
              </ListItemIcon>
              My Booking
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/progress"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <History />
              </ListItemIcon>
              My Progress
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/settings"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <SettingsIcon />
              </ListItemIcon>
              Settings
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={handleLogout}
              sx={{
                fontWeight: 600,
                color: '#ff0000',
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <LogoutIcon sx={{ color: '#ff0000' }} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </>
        ) : (
          <>
            {/* Not logged in - Updated with modal integration */}
            <MenuItem
              onClick={() => {
                setAuthModalOpen(true);
                handleProfileClose();
              }}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <LoginIcon />
              </ListItemIcon>
              Sign In / Sign Up
            </MenuItem>
            
            {/* Register as Learner */}
            <MenuItem
              component={RouterLink}
              to="/register"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <PersonAdd />
              </ListItemIcon>
              Register as Learner
            </MenuItem>
            
            {/* Register as Instructor */}
            <MenuItem
              component={RouterLink}
              to="/register/instructor"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <SchoolIcon />
              </ListItemIcon>
              Register as Instructor
            </MenuItem>
            
            <Divider sx={{ my: 1 }} />
            
            <MenuItem
              component={RouterLink}
              to="/instructor-login"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <PersonIcon />
              </ListItemIcon>
              Login as Instructor
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/become-instructor"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <PersonAdd />
              </ListItemIcon>
              Become an Instructor
            </MenuItem>
          </>
        )}
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleMobileDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { bgcolor: '#222', color: '#fff', width: 280, borderRadius: '0 0 0 20px' },
        }}
      >
        {mobileDrawer}
      </Drawer>

      {/* AuthModal Component */}
      <AuthModal 
        open={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />

      {/* Spacer for content below navbar */}
      <Box sx={{ height: { xs: 88, sm: 110 } }} />
    </>
  );
}
