import mongoose from 'mongoose';
import Instructor from './models/Instructor';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const sampleInstructors = [
  {
    name: 'Rajesh Kumar',
    email: 'rajesh@motusdrive.com',
    phone: '9876543210',
    experience: 8,
    rating: 4.8,
    totalLessons: 250,
    pricePerHour: 500,
    specializations: ['Basic Driving', 'Highway Driving'],
    languages: ['English', 'Hindi'],
    vehicleTypes: ['manual-car', 'automatic-car'],
    bio: 'Expert driving instructor with 8 years of experience'
  },
  {
    name: 'Priya Sharma',
    email: 'priya@motusdrive.com', 
    phone: '9876543211',
    experience: 5,
    rating: 4.6,
    totalLessons: 180,
    pricePerHour: 450,
    specializations: ['Basic Driving', 'Parking'],
    languages: ['English', 'Hindi'],
    vehicleTypes: ['automatic-car'],
    bio: 'Friendly instructor specializing in nervous beginners'
  }
];

async function seedInstructors() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected to MongoDB');

    await Instructor.deleteMany({}); // Clear existing
    await Instructor.insertMany(sampleInstructors);
    
    console.log('Sample instructors added successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding instructors:', error);
    process.exit(1);
  }
}

seedInstructors();
