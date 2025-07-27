import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { PersonAdd, Search, DriveEta } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    icon: <PersonAdd fontSize="large" />,
    title: '1. Sign Up',
    description: 'Create your account and tell us about your driving goals and experience level.',
    color: '#FF6B6B',
    delay: 0.2
  },
  {
    icon: <Search fontSize="large" />,
    title: '2. Find Instructor',
    description: 'Browse certified instructors in your area and choose based on reviews and availability.',
    color: '#4ECDC4',
    delay: 0.4
  },
  {
    icon: <DriveEta fontSize="large" />,
    title: '3. Start Learning',
    description: 'Book your lessons and start your journey to becoming a confident driver.',
    color: '#667eea',
    delay: 0.6
  }
];

const Process: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ 
      py: 12, 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
      '@keyframes gradientShift': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' }
      }
    }}>
      <Container ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Typography 
            variant="h2" 
            textAlign="center" 
            fontWeight={800} 
            gutterBottom
            sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            How It Works 🎯
          </Typography>
          <Typography 
            variant="h5" 
            textAlign="center" 
            sx={{ mb: 8, color: 'rgba(255,255,255,0.9)', fontWeight: 400 }}
          >
            Get started in just 3 simple steps
          </Typography>
        </motion.div>
        
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4,
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 45 }}
              animate={inView ? { 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                transition: { 
                  duration: 1, 
                  delay: step.delay,
                  ease: "backOut" 
                }
              } : {}}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 20
              }}
              style={{
                flex: '1 1 300px',
                maxWidth: '350px',
                minWidth: '300px'
              }}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  p: 5, 
                  textAlign: 'center', 
                  height: '100%',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
                    transform: 'translateY(-10px)',
                  },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '5px',
                    background: `linear-gradient(90deg, ${step.color}, ${step.color}cc)`,
                  }
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Box 
                    sx={{ 
                      mb: 3,
                      display: 'inline-flex',
                      p: 3,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                      color: 'white',
                      boxShadow: `0 10px 30px ${step.color}40`
                    }}
                  >
                    {step.icon}
                  </Box>
                </motion.div>
                <Typography 
                  variant="h4" 
                  fontWeight={700} 
                  sx={{ mb: 3, color: '#2c3e50' }}
                >
                  {step.title}
                </Typography>
                <Typography 
                  color="text.secondary"
                  sx={{ 
                    lineHeight: 1.8, 
                    fontSize: '1.1rem',
                    fontWeight: 400
                  }}
                >
                  {step.description}
                </Typography>
                
                {/* Animated connector line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100px' } : {}}
                    transition={{ duration: 1, delay: step.delay + 0.5 }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '-50px',
                      height: '2px',
                      background: `linear-gradient(90deg, ${step.color}, transparent)`,
                      zIndex: 1
                    }}
                  />
                )}
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Process;
