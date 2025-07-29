import React, { useState, useEffect } from "react";
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
  Pagination,
  CircularProgress,
} from "@mui/material";
import {
  DirectionsCar,
  Language,
  LocationOn,
  School,
  AccessTime,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

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
  price: number; // Use price instead of pricePerHour for consistency
  bio: string;
  availability: string;
}

// Mock data for frontend development/testing
const mockInstructors: Instructor[] = [
  {
    _id: "1",
    name: "Rajesh Kumar",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    rating: 4.8,
    totalLessons: 250,
    experience: 8,
    specializations: ["Basic Driving", "Highway Driving", "Parking"],
    languages: ["English", "Hindi", "Tamil"],
    serviceAreas: ["Chennai Central", "T Nagar", "Anna Nagar"],
    vehicleTypes: ["Manual Car", "Automatic Car"],
    price: 500,
    bio: "Expert driving instructor with 8 years of experience. Specializes in nervous beginners and highway driving.",
    availability: "Available Today",
  },
  // ... more instructors
];

const InstructorList: React.FC = () => {
  // State variables
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [filteredInstructors, setFilteredInstructors] = useState<Instructor[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    vehicleType: "", // e.g. 'manual', 'automatic'
    minRating: "",
    area: "",
    maxPrice: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const instructorsPerPage = 6; // Show 6 instructors per page

  // Simulated API data loading on mount
  useEffect(() => {
    setLoading(true);
    // Simulate async API call with delay
    setTimeout(() => {
      setInstructors(mockInstructors);
      setFilteredInstructors(mockInstructors);
      setLoading(false);
    }, 1000);
  }, []);

  // Apply filters whenever filters or instructors state changes
  useEffect(() => {
    let filtered = instructors;

    if (filters.vehicleType) {
      filtered = filtered.filter((instr) =>
        instr.vehicleTypes.some(
          (type) =>
            type.toLowerCase().includes(filters.vehicleType.toLowerCase()) ||
            filters.vehicleType.toLowerCase().includes(type.toLowerCase())
        )
      );
    }

    if (filters.minRating) {
      filtered = filtered.filter(
        (instr) => instr.rating >= parseFloat(filters.minRating)
      );
    }

    if (filters.area) {
      filtered = filtered.filter((instr) =>
        instr.serviceAreas.some((area) =>
          area.toLowerCase().includes(filters.area.toLowerCase())
        )
      );
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(
        (instr) => instr.price <= parseInt(filters.maxPrice)
      );
    }

    setFilteredInstructors(filtered);
    setCurrentPage(1); // Reset to first page whenever filters change
  }, [filters, instructors]);

  // Handle filter value change
  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Pagination calculation
  const indexOfLastInstructor = currentPage * instructorsPerPage;
  const indexOfFirstInstructor = indexOfLastInstructor - instructorsPerPage;
  const currentInstructors = filteredInstructors.slice(
    indexOfFirstInstructor,
    indexOfLastInstructor
  );
  const totalPages = Math.ceil(filteredInstructors.length / instructorsPerPage);

  // Handle pagination changes
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress size={60} />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Finding the best instructors for you...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Title */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          fontWeight={700}
          gutterBottom
          sx={{
            background: "linear-gradient(45deg, #667eea, #7642a, #7642a)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Find Your Perfect Instructor ✨
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Choose from {filteredInstructors.length} certified instructors in your
          area
        </Typography>
      </Box>

      {/* Filters */}
      <Box
        sx={{
          mb: 6,
          p: 3,
          bgcolor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 3,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel id="filter-vehicle-label">Vehicle Type</InputLabel>
          <Select
            labelId="filter-vehicle-label"
            value={filters.vehicleType}
            label="Vehicle Type"
            onChange={(e) => handleFilterChange("vehicleType", e.target.value)}
          >
            <MenuItem value="">All Vehicles</MenuItem>
            <MenuItem value="manual">Manual</MenuItem>
            <MenuItem value="automatic">Automatic</MenuItem>
            <MenuItem value="motorcycle">Motorcycle</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel id="filter-rating-label">Minimum Rating</InputLabel>
          <Select
            labelId="filter-rating-label"
            value={filters.minRating}
            label="Minimum Rating"
            onChange={(e) => handleFilterChange("minRating", e.target.value)}
          >
            <MenuItem value="">Any Rating</MenuItem>
            <MenuItem value="4">4+ Stars</MenuItem>
            <MenuItem value="4.5">4.5+ Stars</MenuItem>
            <MenuItem value="4.8">4.8+ Stars</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Search by City/Area"
          value={filters.area}
          onChange={(e) => handleFilterChange("area", e.target.value)}
          sx={{ minWidth: 180 }}
          placeholder="Eg: Mumbai"
        />

        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel id="filter-price-label">Max Price</InputLabel>
          <Select
            labelId="filter-price-label"
            value={filters.maxPrice}
            label="Max Price"
            onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
          >
            <MenuItem value="">Any Price</MenuItem>
            <MenuItem value="300">Up to ₹300</MenuItem>
            <MenuItem value="400">Up to ₹400</MenuItem>
            <MenuItem value="500">Up to ₹500</MenuItem>
            <MenuItem value="600">Up to ₹600</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Instructor Cards Area */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          mb: 6,
        }}
      >
        {currentInstructors.map((instructor) => (
          <Box
            key={instructor._id}
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 45%", lg: "1 1 30%" },
              maxWidth: { xs: "100%", sm: "400px", lg: "380px" },
              minWidth: 320,
            }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={
                    instructor.profileImage ||
                    "https://source.unsplash.com/random/300x220"
                  }
                  alt={instructor.name}
                  sx={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <Chip
                  label={instructor.availability}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    bgcolor: instructor.availability.includes("Now")
                      ? "green"
                      : "blue",
                    color: "white",
                    fontWeight: 600,
                  }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {instructor.name}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Rating value={instructor.rating} readOnly size="small" />
                  <Typography variant="body2" sx={{ ml: 1, fontWeight: 600 }}>
                    {instructor.rating} ({instructor.totalLessons} lessons)
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <AccessTime fontSize="small" />
                  <Typography sx={{ ml: 1 }} variant="body2">
                    {instructor.experience} years experience
                  </Typography>
                </Box>

                <Typography sx={{ mb: 2, minHeight: 70 }}>
                  {instructor.bio}
                </Typography>

                <Typography sx={{ fontWeight: "bold" }}>
                  Specializations:
                </Typography>
                <Box sx={{ my: 1 }}>
                  {instructor.specializations.slice(0, 3).map((spec) => (
                    <Chip
                      key={spec}
                      label={spec}
                      color="primary"
                      variant="outlined"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <DirectionsCar />
                  <Typography sx={{ ml: 1 }} variant="body2">
                    {(instructor.vehicleTypes ?? []).join(", ")}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Language />
                  <Typography sx={{ ml: 1 }} variant="body2">
                    {(instructor.languages ?? []).join(", ")}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <LocationOn />
                  <Typography sx={{ ml: 1 }} variant="body2">
                    {(instructor.serviceAreas ?? []).slice(0, 2).join(", ")}
                    {(instructor.serviceAreas && instructor.serviceAreas.length > 2) &&
                      ` +${instructor.serviceAreas.length - 2} more`}
                  </Typography>
                </Box>

                <Typography variant="h5" color="primary" fontWeight={700} sx={{ mb: 2 }}>
                  ₹{instructor.price} / hr
                </Typography>

                <Button
                  component={RouterLink}
                  to={`/instructor/${instructor._id}`}
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: 25,
                    py: 1.5,
                    fontWeight: 700,
                    textTransform: "none",
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
      {totalPages > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                fontSize: "1rem",
                fontWeight: 600,
              },
            }}
          />
        </Box>
      )}

      {/* No Results Found */}
      {!loading && filteredInstructors.length === 0 && (
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography variant="h5" gutterBottom>
            No instructors found.
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Please adjust your filters and try again.
          </Typography>
          <Button
            onClick={() =>
              setFilters({
                vehicleType: "",
                minRating: "",
                area: "",
                maxPrice: "",
              })
            }
          >
            Clear Filters
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default InstructorList;

