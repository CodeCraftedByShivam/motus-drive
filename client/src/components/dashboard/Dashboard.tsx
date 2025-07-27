import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Avatar,
  Chip,
} from '@mui/material';
import { Person, ExitToApp } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'student': return 'primary';
      case 'instructor': return 'success';
      case 'admin': return 'error';
      default: return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
              <Person />
            </Avatar>
            <Box>
              <Typography variant="h4" gutterBottom>
                Welcome, {user?.name}!
              </Typography>
              <Chip 
                label={user?.role?.toUpperCase()} 
                color={getRoleColor(user?.role || '') as any} 
                size="small" 
              />
            </Box>
          </Box>
          <Button
            variant="outlined"
            startIcon={<ExitToApp />}
            onClick={logout}
          >
            Logout
          </Button>
        </Box>
        
        {/* Profile Information */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Profile Information
          </Typography>
          <Typography><strong>Name:</strong> {user?.name}</Typography>
          <Typography><strong>Email:</strong> {user?.email}</Typography>
          <Typography><strong>Phone:</strong> {user?.phone}</Typography>
          <Typography><strong>Role:</strong> {user?.role}</Typography>
        </Box>

        {/* Role-based content */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            {user?.role === 'student' ? 'Book Your Next Lesson' : 'Your Schedule'}
          </Typography>
          <Typography color="textSecondary" paragraph>
            {user?.role === 'student' 
              ? 'Find certified instructors and book driving lessons at your convenience.'
              : 'Manage your teaching schedule and upcoming lessons.'
            }
          </Typography>
          <Button variant="contained" size="large">
            {user?.role === 'student' ? 'Book Lesson' : 'View Schedule'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Dashboard;
