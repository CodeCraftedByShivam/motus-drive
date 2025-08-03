import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CircularProgress, Box } from '@mui/material';

import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './components/landing/LandingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import InstructorRegister from './components/auth/InstructorRegister';
import Dashboard from './components/dashboard/Dashboard';
import InstructorList from './components/instructors/InstructorList';
import InstructorDashboard from './components/instructors/InstructorDashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
    },
    secondary: {
      main: '#f093fb',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

// Role-based protected route component
const ProtectedRoute: React.FC<{ 
  children: React.ReactNode;
  allowedRoles?: string[];
}> = ({ children, allowedRoles = [] }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on user role
    if (user.role === 'instructor') {
      return <Navigate to="/instructor/dashboard" />;
    } else if (user.role === 'learner') {
      return <Navigate to="/dashboard" />;
    }
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (user) {
    // Redirect to appropriate dashboard based on user role
    if (user.role === 'instructor') {
      return <Navigate to="/instructor/dashboard" />;
    } else if (user.role === 'learner') {
      return <Navigate to="/dashboard" />;
    }
  }

  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/instructors" element={<InstructorList />} />
            
            {/* Public routes */}
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />
            <Route 
              path="/register" 
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              } 
            />
            <Route 
              path="/register/instructor" 
              element={
                <PublicRoute>
                  <InstructorRegister />
                </PublicRoute>
              } 
            />
            
            {/* Protected routes for learners */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['learner']}>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Protected routes for instructors */}
            <Route 
              path="/instructor/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['instructor']}>
                  <InstructorDashboard />
                </ProtectedRoute>
              } 
            />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
