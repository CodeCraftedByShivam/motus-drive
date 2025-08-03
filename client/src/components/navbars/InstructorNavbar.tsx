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
  Dashboard as DashboardIcon,
  Schedule as ScheduleIcon,
  People as PeopleIcon,
  AttachMoney as EarningsIcon,
  Person as PersonIcon,
  ExpandMore,
  CalendarToday as CalendarIcon,
  Assignment as BookingsIcon,
  TrendingUp as ProgressIcon,
  MenuBook as LessonPlansIcon,
  RateReview as ReviewsIcon,
  DirectionsCar,
  Login as LoginIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  AccountCircle,
  Payment as PaymentIcon,
  Help as HelpIcon,
  PersonAdd,
  School as SchoolIcon,
} from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// Replace with your own authentication hook
import { useAuth } from '../../context/AuthContext';

const servicesMenuItems = [
  { label: 'My Calendar', icon: <CalendarIcon fontSize="small" />, to: '/instructor/calendar' },
  { label: 'Active Bookings', icon: <BookingsIcon fontSize="small" />, to: '/instructor/bookings' },
  { label: 'Student Progress', icon: <ProgressIcon fontSize="small" />, to: '/instructor/student-progress' },
  { label: 'Lesson Plans', icon: <LessonPlansIcon fontSize="small" />, to: '/instructor/lesson-plans' },
  { label: 'Feedback & Reviews', icon: <ReviewsIcon fontSize="small" />, to: '/instructor/reviews' },
];

export default function InstructorNavbar() {
  const { user, logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  // Dropdowns for desktop
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(null);
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

  // Mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false);

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
      <Toolbar sx={{ bgcolor: '#1565c0', color: '#fff', minHeight: 56 }}>
        <DirectionsCar sx={{ color: '#ffeb3b', mr: 1, fontSize: 30 }} />
        <Typography variant="h6" fontWeight={700}>
          Instructor Portal
        </Typography>
      </Toolbar>
      <Divider />

      {/* Main links */}
      <List>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/instructor/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/instructor/schedule">
            <ListItemIcon>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText primary="Schedule" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/instructor/students">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/instructor/earnings">
            <ListItemIcon>
              <EarningsIcon />
            </ListItemIcon>
            <ListItemText primary="Earnings" />
          </ListItemButton>
        </ListItem>

        {/* Services Dropdown as a list */}
        <ListItem disablePadding>
          <ListItemText
            primary={<Box sx={{ px: 2, mt: 1, fontWeight: 700 }}>Quick Actions</Box>}
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
            primary={<Box sx={{ px: 2, mt: 1, fontWeight: 700 }}>Account</Box>}
          />
        </ListItem>
        {user ? (
          <>
            {/* Logged in */}
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/instructor/profile">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/instructor/settings">
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Account Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/instructor/payments">
                <ListItemIcon>
                  <PaymentIcon />
                </ListItemIcon>
                <ListItemText primary="Payment Settings" />
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
            {/* Not logged in */}
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/instructor/login">
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Instructor Login" />
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
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/">
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Student Portal" />
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
            bgcolor: '#1565c0', // Professional blue color for instructors
            color: '#fff',
            borderRadius: '20px', // All four corners rounded
            boxShadow: '0 4px 8px rgba(21,101,192,0.4)',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 64, sm: 70 }, px: { xs: 2, sm: 4 } }}>
            {/* Logo / Brand */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <DirectionsCar
                sx={{
                  color: '#ffeb3b', // Yellow accent for instructor portal
                  mr: 1,
                  fontSize: { xs: 28, sm: 35 },
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(360deg)',
                    color: '#fff176',
                  },
                }}
              />
              <Typography
                variant="h4"
                fontWeight={800}
                component={RouterLink}
                to="/instructor/dashboard"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: { xs: '1.3rem', sm: '1.8rem' },
                  userSelect: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#ffeb3b' },
                }}
              >
                Instructor Portal
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
                  to="/instructor/dashboard"
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderRadius: '20px',
                    px: 2.5,
                    py: 1,
                    textTransform: 'none',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      bgcolor: '#0d47a1',
                      color: 'white',
                      boxShadow: '0 0 10px #0d47a1',
                    },
                  }}
                  startIcon={<DashboardIcon />}
                >
                  Dashboard
                </Button>
                <Button
                  component={RouterLink}
                  to="/instructor/schedule"
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderRadius: '20px',
                    px: 2.5,
                    py: 1,
                    textTransform: 'none',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      bgcolor: '#1976d2',
                      color: 'white',
                      boxShadow: '0 0 10px #1976d2',
                    },
                  }}
                  startIcon={<ScheduleIcon />}
                >
                  Schedule
                </Button>
                <Button
                  component={RouterLink}
                  to="/instructor/students"
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderRadius: '20px',
                    px: 2.5,
                    py: 1,
                    textTransform: 'none',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      bgcolor: '#1e88e5',
                      color: 'white',
                      boxShadow: '0 0 10px #1e88e5',
                    },
                  }}
                  startIcon={<PeopleIcon />}
                >
                  Students
                </Button>
                <Button
                  component={RouterLink}
                  to="/instructor/earnings"
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderRadius: '20px',
                    px: 2.5,
                    py: 1,
                    textTransform: 'none',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      bgcolor: '#42a5f5',
                      color: 'white',
                      boxShadow: '0 0 10px #42a5f5',
                    },
                  }}
                  startIcon={<EarningsIcon />}
                >
                  Earnings
                </Button>

                {/* Services dropdown */}
                <Button
                  color="inherit"
                  onClick={handleServicesOpen}
                  endIcon={<ExpandMore />}
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderRadius: '20px',
                    px: 2.5,
                    py: 1,
                    textTransform: 'none',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      bgcolor: '#64b5f6',
                      color: 'white',
                      boxShadow: '0 0 15px #64b5f6',
                    },
                  }}
                  aria-haspopup="true"
                  aria-controls={servicesAnchor ? 'services-menu' : undefined}
                >
                  Quick Actions
                </Button>

                {/* Profile dropdown */}
                <Button
                  color="inherit"
                  onClick={handleProfileOpen}
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    ml: 1,
                    minWidth: 36,
                    borderRadius: '20px',
                    px: 2.5,
                    py: 1,
                    textTransform: 'none',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      bgcolor: '#90caf9',
                      color: 'white',
                      boxShadow: '0 0 15px #90caf9',
                    },
                  }}
                  startIcon={
                    user ? (
                      <Avatar alt="Instructor" sx={{ width: 28, height: 28 }}>
                        {(user.name && user.name[0]) || 'I'}
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

      {/* Services dropdown menu - DEFAULT BEHAVIOR */}
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
            boxShadow: theme.shadows[5],
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

      {/* Profile dropdown menu - DEFAULT BEHAVIOR */}
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
            boxShadow: theme.shadows[5],
          },
        }}
      >
        {user ? (
          <>
            <MenuItem
              component={RouterLink}
              to="/instructor/profile"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <PersonIcon />
              </ListItemIcon>
              My Profile
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/instructor/settings"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <SettingsIcon />
              </ListItemIcon>
              Account Settings
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/instructor/payments"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <PaymentIcon />
              </ListItemIcon>
              Payment Settings
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/instructor/help"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <HelpIcon />
              </ListItemIcon>
              Help & Support
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={handleLogout}
              sx={{
                fontWeight: 600,
                color: '#d32f2f',
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <LogoutIcon sx={{ color: '#d32f2f' }} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              component={RouterLink}
              to="/instructor/login"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <LoginIcon />
              </ListItemIcon>
              Instructor Login
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
            <MenuItem
              component={RouterLink}
              to="/"
              onClick={handleProfileClose}
              sx={{ fontWeight: 600 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <SchoolIcon />
              </ListItemIcon>
              Student Portal
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
          '& .MuiDrawer-paper': { bgcolor: '#1565c0', color: '#fff', width: 280, borderRadius: '0 0 0 20px' },
        }}
      >
        {mobileDrawer}
      </Drawer>

      {/* Spacer for content below navbar - adjusted for new positioning */}
      <Box sx={{ height: { xs: 88, sm: 110 } }} />
    </>
  );
}
