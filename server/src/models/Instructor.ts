import mongoose, { Document, Schema } from 'mongoose';

export interface IInstructor extends Document {
  name: string;
  email: string;
  phone: string;
  experience: number;
  rating: number;
  totalLessons: number;
  pricePerHour: number;
  specializations: string[];
  languages: string[];
  vehicleTypes: string[];
  bio: string;
  isActive: boolean;
  createdAt: Date;
}

const instructorSchema = new Schema<IInstructor>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  experience: { type: Number, required: true, default: 0 },
  rating: { type: Number, default: 4.5, min: 0, max: 5 },
  totalLessons: { type: Number, default: 0 },
  pricePerHour: { type: Number, required: true },
  specializations: [{ type: String, default: ['Basic Driving'] }],
  languages: [{ type: String, default: ['English', 'Hindi'] }],
  vehicleTypes: [{ type: String, default: ['manual-car'] }],
  bio: { type: String, default: 'Experienced driving instructor' },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IInstructor>('Instructor', instructorSchema);
