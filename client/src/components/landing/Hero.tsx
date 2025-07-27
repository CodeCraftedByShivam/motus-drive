import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { DriveEta, Speed, EmojiPeople } from '@mui/icons-material';

const Hero: React.FC = () => (
  <Box 
    sx={{ 
      py: 15, 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 8s ease infinite',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      '@keyframes gradientShift': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' }
      }
    }}
  >
    {/* Animated background elements */}
    <motion.div
      style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        color: 'rgba(255,255,255,0.1)',
        fontSize: '120px'
      }}
      animate={{
        rotate: 360,
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <DriveEta />
    </motion.div>

    <motion.div
      style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        color: 'rgba(255,255,255,0.1)',
        fontSize: '100px'
      }}
      animate={{
        y: [-20, 20, -20],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Speed />
    </motion.div>

    <motion.div
      style={{
        position: 'absolute',
        bottom: '20%',
        left: '20%',
        color: 'rgba(255,255,255,0.1)',
        fontSize: '80px'
      }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.8, 0.3]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <EmojiPeople />
    </motion.div>

    <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Typography 
          variant="h1" 
          fontWeight={800} 
          sx={{ 
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            mb: 2
          }}
        >
          <TypeAnimation
            sequence={[
              'Master Driving with Confidence',
              2000,
              'Learn from Expert Instructors',
              2000,
              'Your Road to Independence',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 5, 
            opacity: 0.95,
            fontWeight: 400,
            lineHeight: 1.6
          }}
        >
          Connect with certified instructors and book driving lessons at your convenience. 
          Start your journey to safe, confident driving today! 🚗✨
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1, ease: "backOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          component={RouterLink}
          to="/register"
          size="large"
          variant="contained"
          sx={{ 
            px: 6, 
            py: 2, 
            fontSize: '1.3rem',
            borderRadius: 50,
            background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            border: 0,
            color: 'white',
            fontWeight: 700,
            textTransform: 'none',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': {
              background: 'linear-gradient(45deg, #FF8E8E 30%, #6EEEE6 90%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'left 0.5s',
            },
            '&:hover:before': {
              left: '100%',
            }
          }}
        >
          🚀 Get Started Today
        </Button>
      </motion.div>
    </Container>
  </Box>
);

export default Hero;
