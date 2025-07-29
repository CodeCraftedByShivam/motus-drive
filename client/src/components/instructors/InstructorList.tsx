import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  Rating,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Pagination
} from '@mui/material';
import { DirectionsCar, Star, Language, LocationOn } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

interface Instructor {
  _id: string;
  name: string;
  profileImage: string;
  rating: number;
  totalLessons: number;
  experience: number;
  specializations: string[];
  languages: string[];
  serviceAreas: string[];
  vehicleTypes: string[];
  pricePerHour: number;
  bio: string;
}

const InstructorList: React.FC = () => {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    vehicleType: '',
    minRating: '',
    area: ''
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalInstructors: 0
  });

  const fetchInstructors = async (page = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '12'
      });

      if (filters.vehicleType) params.append('vehicleType', filters.vehicleType);
      if (filters.minRating) params.append('minRating', filters.minRating);

      const response = await axios.get(`/api/instructors?${params}`);
      setInstructors(response.data.instructors);
      setPagination(response.data.pagination);
    } catch (error) {
      console.error('Error fetching instructors:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, [filters]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    fetchInstructors(page);
  };

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" fontWeight={700} gutterBottom>
          Find Your Perfect Driving Instructor
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Choose from {pagination.totalInstructors}+ certified instructors in your area
        </Typography>
      </Box>

      {/* Filters - Using Flexbox */}
      <Box sx={{ 
        mb: 4, 
        display: 'flex', 
        gap: 2, 
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Vehicle Type</InputLabel>
          <Select
            value={filters.vehicleType}
            label="Vehicle Type"
            onChange={(e) => handleFilterChange('vehicleType', e.target.value)}
          >
            <MenuItem value="">All Vehicles</MenuItem>
            <MenuItem value="manual-car">Manual Car</MenuItem>
            <MenuItem value="automatic-car">Automatic Car</MenuItem>
            <MenuItem value="motorcycle">Motorcycle</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Minimum Rating</InputLabel>
          <Select
            value={filters.minRating}
            label="Minimum Rating"
            onChange={(e) => handleFilterChange('minRating', e.target.value)}
          >
            <MenuItem value="">Any Rating</MenuItem>
            <MenuItem value="4">4+ Stars</MenuItem>
            <MenuItem value="4.5">4.5+ Stars</MenuItem>
            <MenuItem value="4.8">4.8+ Stars</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Search by Area"
          value={filters.area}
          onChange={(e) => handleFilterChange('area', e.target.value)}
          sx={{ minWidth: 200 }}
        />
      </Box>

      {/* Instructor Cards Container - Using Flexbox instead of Grid */}
      <Box 
        sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
          mb: 4
        }}
      >
        {instructors.map((instructor) => (
          <Box
            key={instructor._id}
            sx={{
              flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' },
              maxWidth: { xs: '100%', sm: '400px', md: '350px' },
              minWidth: '300px'
            }}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={instructor.profileImage || 'https://via.placeholder.com/300x200?text=Instructor'}
                alt={instructor.name}
                sx={{ objectFit: 'cover' }}
              />
              
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {instructor.name}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={instructor.rating} readOnly size="small" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    ({instructor.totalLessons} lessons)
                  </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {instructor.experience} years experience
                </Typography>

                <Typography variant="body2" sx={{ mb: 2 }}>
                  {instructor.bio?.substring(0, 100) || 'Experienced driving instructor'}...
                </Typography>

                {/* Specializations */}
                <Box sx={{ mb: 2 }}>
                  {instructor.specializations?.slice(0, 2).map((spec) => (
                    <Chip
                      key={spec}
                      label={spec}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                      color="primary"
                      variant="outlined"
                    />
                  )) || (
                    <Chip
                      label="General Training"
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  )}
                </Box>

                {/* Vehicle Types */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <DirectionsCar fontSize="small" color="action" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {instructor.vehicleTypes?.join(', ') || 'Manual Car, Automatic Car'}
                  </Typography>
                </Box>

                {/* Languages */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Language fontSize="small" color="action" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {instructor.languages?.join(', ') || 'English, Hindi'}
                  </Typography>
                </Box>

                {/* Price */}
                <Typography variant="h6" color="primary" fontWeight={600} sx={{ mb: 2 }}>
                  ₹{instructor.pricePerHour}/hour
                </Typography>

                <Button
                  component={RouterLink}
                  to={`/instructor/${instructor._id}`}
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: 25,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none'
                  }}
                >
                  View Profile & Book
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Pagination
            count={pagination.totalPages}
            page={pagination.currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>
      )}

      {/* Loading State */}
      {loading && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6">Loading instructors...</Typography>
        </Box>
      )}

      {/* Empty State */}
      {!loading && instructors.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" gutterBottom>
            No instructors found
          </Typography>
          <Typography color="text.secondary">
            Try adjusting your filters or search criteria
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default InstructorList;
