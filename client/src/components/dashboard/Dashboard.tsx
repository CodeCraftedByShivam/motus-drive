import React from 'react';
import { Box, Paper, Typography, Button, Avatar } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography>Please log in to access your dashboard.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Avatar 
            sx={{ 
              width: 80, 
              height: 80, 
              mx: 'auto', 
              mb: 2,
              bgcolor: '#667eea',
              fontSize: '2rem',
              fontWeight: 700
            }}
          >
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Welcome, {user.name}!
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Profile Information
          </Typography>
          <Typography><strong>Name:</strong> {user?.name}</Typography>
          <Typography><strong>Email:</strong> {user?.email}</Typography>
          {user?.phone && (
            <Typography><strong>Phone:</strong> {user.phone}</Typography>
          )}
          <Typography><strong>Role:</strong> {user?.role}</Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            {user?.role === 'learner' ? 'Book Your Next Lesson' : 'Your Schedule'}
          </Typography>
          <Typography color="textSecondary" paragraph>
            {user?.role === 'learner'
              ? 'Find certified instructors and book driving lessons at your convenience.'
              : 'Manage your teaching schedule and upcoming lessons.'
            }
          </Typography>
          <Button variant="contained" size="large">
            {user?.role === 'learner' ? 'Book Lesson' : 'View Schedule'}
          </Button>
        </Box>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button 
            variant="outlined" 
            color="error" 
            onClick={logout}
          >
            Logout
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Dashboard;
