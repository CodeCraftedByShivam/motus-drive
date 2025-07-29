import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Star } from '@mui/icons-material';

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box
      component="section"
      aria-label="Call to Action"
      ref={ref}
      sx={{
        py: { xs: 10, sm: 15 },
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 25%, #667eea 50%, #764ba2 75%, #f093fb 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 20s ease infinite',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        '@keyframes gradientShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }}
    >
      {/* Simplified animated stars */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            color: 'rgba(255,255,255,0.1)',
            fontSize: Math.random() * 20 + 10,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          aria-hidden="true"
        >
          <Star />
        </motion.div>
      ))}

      <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ display: 'inline-block', marginBottom: '2rem' }}
            aria-hidden="true"
          >
            <Rocket sx={{ fontSize: { xs: 50, sm: 80 }, color: '#FFD700' }} />
          </motion.div>

          <Typography
            variant="h2"
            fontWeight={800}
            gutterBottom
            sx={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontSize: { xs: '2rem', sm: '3.5rem', md: '4rem' },
            }}
          >
            Ready to Start Your Driving Journey? 🌟
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 6,
              opacity: 0.95,
              fontWeight: 400,
              lineHeight: 1.6,
              px: { xs: 2, sm: 0 },
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            Join thousands of students who have successfully learned to drive with Motus Drive.
            Your road to independence starts here! 🚗💨
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
              mb: { xs: 6, sm: 8 },
            }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                component={RouterLink}
                to="/register"
                size="large"
                variant="contained"
                sx={{
                  px: { xs: 5, sm: 8 },
                  py: { xs: 1.5, sm: 3 },
                  fontSize: { xs: '1rem', sm: '1.4rem' },
                  fontWeight: 700,
                  borderRadius: 50,
                  background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF8E8E 30%, #6EEEE6 90%)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                  },
                }}
              >
                🚀 Sign Up Now
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                component={RouterLink}
                to="/login"
                size="large"
                variant="outlined"
                sx={{
                  px: { xs: 4, sm: 6 },
                  py: { xs: 1.5, sm: 3 },
                  fontSize: { xs: '0.9rem', sm: '1.2rem' },
                  fontWeight: 600,
                  borderRadius: 50,
                  color: 'white',
                  borderColor: 'white',
                  borderWidth: 2,
                  textTransform: 'none',
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255,255,255,0.1)',
                  '&:hover': {
                    borderColor: 'white',
                    background: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 30px rgba(255,255,255,0.2)',
                  },
                }}
              >
                🔑 Already Have Account?
              </Button>
            </motion.div>
          </Box>
        </motion.div>

        {/* Simplified stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Box
            sx={{
              mt: 8,
              display: 'flex',
              justifyContent: 'center',
              gap: 6,
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              textAlign: 'center',
            }}
          >
            {[
              { number: '10,000+', label: 'Happy Students' },
              { number: '500+', label: 'Expert Instructors' },
              { number: '95%', label: 'Pass Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                style={{ minWidth: 120 }}
              >
                <Typography
                  variant="h3"
                  fontWeight={800}
                  sx={{
                    color: '#FFD700',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  {stat.label}
                </Typography>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTA;
