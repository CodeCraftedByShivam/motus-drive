import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { DirectionsCar, Schedule, Verified, School } from '@mui/icons-material';

const benefits = [
  {
    icon: <Verified fontSize="large" />,
    title: 'Certified Instructors',
    text: 'All instructors are background-checked, licensed, and experienced professionals.',
  },
  {
    icon: <Schedule fontSize="large" />,
    title: 'Flexible Scheduling',
    text: 'Book lessons that fit your schedule - mornings, evenings, or weekends.',
  },
  {
    icon: <DirectionsCar fontSize="large" />,
    title: 'Modern Vehicles',
    text: 'Learn on well-maintained, dual-control cars with latest safety features.',
  },
  {
    icon: <School fontSize="large" />,
    title: 'Proven Methods',
    text: 'Structured curriculum designed to make you a safe and confident driver.',
  },
];

const Benefits: React.FC = () => (
  <Box sx={{ py: 10, bgcolor: '#ffffff' }}>
    <Container maxWidth="lg">
      {/* Heading */}
      <Typography
        variant="h2"
        textAlign="center"
        fontWeight={800}
        gutterBottom
        sx={{
          color: '#222222',
          mb: 2,
          px: { xs: 2, sm: 4 }, // small horizontal padding on mobile
          fontSize: { xs: '2rem', sm: '2.75rem', md: '3rem' }, // responsive font size
        }}
      >
        Why Choose Motus Drive?
      </Typography>

      {/* Subheading */}
      <Typography
        variant="h6"
        textAlign="center"
        color="#666666"
        sx={{ mb: 8, px: { xs: 3, sm: 6, md: 12 }, fontSize: { xs: '1rem', sm: '1.125rem' } }}
      >
        We make learning to drive safe, convenient, and effective
      </Typography>

      {/* Benefit Cards Container: flex wrap to wrap cards */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
        }}
      >
        {benefits.map(({ icon, title, text }, index) => (
          <Box
            key={title}
            sx={{
              flex: {
                xs: '1 1 100%',    // full width on mobile (small devices)
                sm: '1 1 45%',    // ~2 cards per row on tablets/small screens
                md: '1 1 22%',    // ~4 cards per row on medium+ screens
              },
              maxWidth: { xs: '100%', sm: '45%', md: '22%' },
              minWidth: '260px',  // ensures cards are not too narrow
              animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`,
              '@keyframes slideInUp': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(50px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            <Card
              sx={{
                height: '100%',
                bgcolor: '#ffffff',
                borderRadius: 3,
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                position: 'relative',
                '&:hover': {
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  transform: 'translateY(-5px)',
                },
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  bgcolor: '#ff0000',
                  borderRadius: '3px 3px 0 0',
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box
                  sx={{
                    mb: 3,
                    display: 'inline-flex',
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: '#ff0000',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(255,0,0,0.3)',
                    fontSize: { xs: '2rem', sm: '2.5rem' },
                    // ensures icon is responsive in size
                  }}
                >
                  {icon}
                </Box>

                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{
                    mb: 2,
                    color: '#222222',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' }, // responsive font size
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  color="#666666"
                  sx={{
                    lineHeight: 1.6,
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                    textAlign: 'left',
                    px: { xs: 1, sm: 0 },
                  }}
                >
                  • {text}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Benefits;
