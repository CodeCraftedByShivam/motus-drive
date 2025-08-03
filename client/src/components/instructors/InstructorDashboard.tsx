import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, LinearProgress, Chip } from '@mui/material';
import { 
  TrendingUp, 
  People, 
  Schedule, 
  AttachMoney,
  Star,
  Assignment,
  Notifications,
  CalendarToday 
} from '@mui/icons-material';
import InstructorNavbar from '../navbars/InstructorNavbar';

// Mock data for instructor dashboard
const mockData = {
  instructor: {
    name: 'John Smith',
    rating: 4.8,
    totalStudents: 45,
    totalLessons: 320,
    monthlyEarnings: 12500,
    pendingBookings: 8,
    completedLessons: 28,
    upcomingLessons: 12
  },
  recentBookings: [
    { id: 1, studentName: 'Alice Johnson', time: '10:00 AM', date: 'Today', status: 'confirmed' },
    { id: 2, studentName: 'Bob Wilson', time: '2:00 PM', date: 'Today', status: 'pending' },
    { id: 3, studentName: 'Carol Brown', time: '4:00 PM', date: 'Tomorrow', status: 'confirmed' },
  ],
  notifications: [
    'New booking request from Sarah Davis',
    'Payment received for yesterday\'s lesson',
    'Student feedback: "Excellent instructor!"',
    'Reminder: Update your availability for next week'
  ]
};

const StatCard = ({ title, value, icon, color = '#1565c0', trend }: any) => (
  <Card sx={{ 
    borderRadius: 3, 
    boxShadow: 3, 
    '&:hover': { boxShadow: 6 },
    transition: 'box-shadow 0.3s ease',
    flex: '1 1 250px',
    minWidth: '250px'
  }}>
    <CardContent sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ 
          p: 1.5, 
          borderRadius: 2, 
          bgcolor: `${color}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {React.cloneElement(icon, { sx: { color, fontSize: 28 } })}
        </Box>
        {trend && (
          <Chip 
            label={trend} 
            size="small" 
            sx={{ bgcolor: '#4caf50', color: 'white', fontWeight: 600 }}
          />
        )}
      </Box>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 1, color: '#1a1a1a' }}>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary" fontWeight={500}>
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const InstructorDashboard: React.FC = () => {
  const { instructor, recentBookings, notifications } = mockData;

  return (
    <>
      <InstructorNavbar />
      
      <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 4 }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3 } }}>
          
          {/* Welcome Header */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: { xs: 'flex-start', sm: 'center' }, 
              flexDirection: { xs: 'column', sm: 'row' },
              mb: 2 
            }}>
              <Avatar 
                sx={{ 
                  width: { xs: 56, sm: 64 }, 
                  height: { xs: 56, sm: 64 }, 
                  mr: { xs: 0, sm: 3 },
                  mb: { xs: 2, sm: 0 },
                  bgcolor: '#1565c0',
                  fontSize: '1.5rem',
                  fontWeight: 700 
                }}
              >
                {instructor.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
              <Box>
                <Typography 
                  variant="h4" 
                  fontWeight={700} 
                  sx={{ 
                    color: '#1a1a1a',
                    fontSize: { xs: '1.8rem', sm: '2.125rem' }
                  }}
                >
                  Welcome back, {instructor.name}! 👋
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mt: 1,
                  flexWrap: 'wrap',
                  gap: 1
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Star sx={{ color: '#ffc107', mr: 0.5 }} />
                    <Typography variant="h6" sx={{ mr: 2 }}>
                      {instructor.rating} Rating
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    • {instructor.totalStudents} Students • {instructor.totalLessons} Lessons Taught
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Stats Cards using Flexbox */}
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 3, 
            mb: 4,
            justifyContent: 'center'
          }}>
            <StatCard
              title="Monthly Earnings"
              value={`₹${instructor.monthlyEarnings.toLocaleString()}`}
              icon={<AttachMoney />}
              color="#4caf50"
              trend="+12%"
            />
            <StatCard
              title="Active Students"
              value={instructor.totalStudents}
              icon={<People />}
              color="#2196f3"
              trend="+5"
            />
            <StatCard
              title="Pending Bookings"
              value={instructor.pendingBookings}
              icon={<Assignment />}
              color="#ff9800"
            />
            <StatCard
              title="This Month"
              value={`${instructor.completedLessons} Lessons`}
              icon={<TrendingUp />}
              color="#9c27b0"
              trend="+8%"
            />
          </Box>

          {/* Main Content using Flexbox */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 3 
          }}>
            
            {/* Recent Bookings */}
            <Box sx={{ flex: { xs: '1', lg: '2' } }}>
              <Card sx={{ borderRadius: 3, boxShadow: 3, height: 'fit-content' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Schedule sx={{ color: '#1565c0', mr: 1 }} />
                    <Typography variant="h6" fontWeight={700}>
                      Today's Schedule
                    </Typography>
                  </Box>
                  
                  {recentBookings.map((booking) => (
                    <Box 
                      key={booking.id}
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        p: 2,
                        mb: 2,
                        bgcolor: '#f8f9fa',
                        borderRadius: 2,
                        '&:last-child': { mb: 0 }
                      }}
                    >
                      <CalendarToday sx={{ color: '#1565c0', mr: 2 }} />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {booking.studentName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {booking.date} at {booking.time}
                        </Typography>
                      </Box>
                      <Chip 
                        label={booking.status} 
                        size="small"
                        sx={{
                          bgcolor: booking.status === 'confirmed' ? '#4caf50' : '#ff9800',
                          color: 'white',
                          fontWeight: 600,
                          textTransform: 'capitalize'
                        }}
                      />
                    </Box>
                  ))}
                  
                  <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ 
                      color: '#1565c0', 
                      cursor: 'pointer', 
                      fontWeight: 600,
                      '&:hover': { textDecoration: 'underline' }
                    }}>
                      View Full Schedule →
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            {/* Right Side Cards */}
            <Box sx={{ 
              flex: { xs: '1', lg: '1' },
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              minWidth: { xs: '100%', lg: '300px' }
            }}>
              {/* Notifications Card */}
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Notifications sx={{ color: '#ff9800', mr: 1 }} />
                    <Typography variant="h6" fontWeight={700}>
                      Notifications
                    </Typography>
                  </Box>
                  
                  {notifications.slice(0, 4).map((notification, index) => (
                    <Box key={index} sx={{ mb: 2, '&:last-child': { mb: 0 } }}>
                      <Typography variant="body2" sx={{ 
                        p: 1.5,
                        bgcolor: '#f8f9fa',
                        borderRadius: 1,
                        borderLeft: '3px solid #1565c0'
                      }}>
                        {notification}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>

              {/* Progress Card */}
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
                    Monthly Progress
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Lessons Completed</Typography>
                      <Typography variant="body2" fontWeight={600}>
                        {instructor.completedLessons}/{instructor.completedLessons + instructor.upcomingLessons}
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={(instructor.completedLessons / (instructor.completedLessons + instructor.upcomingLessons)) * 100}
                      sx={{ height: 8, borderRadius: 4, bgcolor: '#e0e0e0' }}
                    />
                  </Box>

                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Student Satisfaction</Typography>
                      <Typography variant="body2" fontWeight={600}>96%</Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={96}
                      sx={{ 
                        height: 8, 
                        borderRadius: 4, 
                        bgcolor: '#e0e0e0',
                        '& .MuiLinearProgress-bar': { bgcolor: '#4caf50' }
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InstructorDashboard;
