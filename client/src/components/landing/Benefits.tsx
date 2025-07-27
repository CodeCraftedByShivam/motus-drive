import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { DirectionsCar, Schedule, Verified, School } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const benefits = [
  { 
    icon: <Verified fontSize="large" />, 
    title: 'Certified Instructors', 
    text: 'All instructors are background-checked, licensed, and experienced professionals.',
    color: '#4ECDC4',
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)'
  },
  { 
    icon: <Schedule fontSize="large" />, 
    title: 'Flexible Scheduling', 
    text: 'Book lessons that fit your schedule - mornings, evenings, or weekends.',
    color: '#FF6B6B',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)'
  },
  { 
    icon: <DirectionsCar fontSize="large" />, 
    title: 'Modern Vehicles', 
    text: 'Learn on well-maintained, dual-control cars with latest safety features.',
    color: '#667eea',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  { 
    icon: <School fontSize="large" />, 
    title: 'Proven Methods', 
    text: 'Structured curriculum designed to make you a safe and confident driver.',
    color: '#f093fb',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
];

const Benefits: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ py: 10, background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
      <Container ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            textAlign="center" 
            fontWeight={800} 
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Why Choose Motus Drive? ✨
          </Typography>
          <Typography 
            variant="h5" 
            textAlign="center" 
            color="text.secondary" 
            sx={{ mb: 8, fontWeight: 400 }}
          >
            We make learning to drive safe, convenient, and effective
          </Typography>
        </motion.div>
        
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4,
            justifyContent: 'center'
          }}
        >
          {benefits.map(({ icon, title, text, color, gradient }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1 
              } : { 
                opacity: 0, 
                y: 50, 
                scale: 0.9 
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                flex: '1 1 280px',
                maxWidth: '320px',
                minWidth: '280px'
              }}
            >
              <Card
                sx={{ 
                  height: '100%',
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    transform: 'translateY(-5px)',
                  },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: gradient,
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box 
                    sx={{ 
                      mb: 3,
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      background: gradient,
                      color: 'white',
                      boxShadow: `0 8px 20px ${color}40`
                    }}
                  >
                    {icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    fontWeight={700} 
                    sx={{ mb: 2, color: '#2c3e50' }}
                  >
                    {title}
                  </Typography>
                  <Typography 
                    color="text.secondary"
                    sx={{ lineHeight: 1.7, fontSize: '1.1rem' }}
                  >
                    {text}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Benefits;
