import React from 'react';
import { Box, Typography, Container, Paper, Avatar, Rating } from '@mui/material';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'New Driver',
    avatar: 'SJ',
    rating: 5,
    comment: 'Amazing experience! My instructor was patient and professional. Passed my test on the first try!'
  },
  {
    name: 'Mike Chen',
    role: 'International Student',
    avatar: 'MC',
    rating: 5,
    comment: 'Perfect for someone new to driving in this country. The instructors understand different learning styles.'
  },
  {
    name: 'Emily Davis',
    role: 'Busy Professional',
    avatar: 'ED',
    rating: 5,
    comment: 'Flexible scheduling made it possible to learn while working full-time. Highly recommend!'
  }
];

const Testimonials: React.FC = () => (
  <Container sx={{ py: 8 }}>
    <Typography variant="h3" textAlign="center" fontWeight={600} gutterBottom>
      What Our Students Say
    </Typography>
    <Typography 
      variant="h6" 
      textAlign="center" 
      color="text.secondary" 
      sx={{ mb: 6 }}
    >
      Join thousands of satisfied drivers who learned with us
    </Typography>
    
    {/* Flexbox container instead of Grid */}
    <Box 
      sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 4,
        justifyContent: 'center'
      }}
    >
      {testimonials.map((testimonial, index) => (
        <Box 
          key={index}
          sx={{ 
            flex: { xs: '1 1 100%', md: '1 1 30%' },
            minWidth: '280px',
            maxWidth: '400px'
          }}
        >
          <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
            <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
              <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                {testimonial.avatar}
              </Avatar>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.role}
                </Typography>
              </Box>
            </Box>
            <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
            <Typography variant="body1" color="text.secondary">
              "{testimonial.comment}"
            </Typography>
          </Paper>
        </Box>
      ))}
    </Box>
  </Container>
);

export default Testimonials;
