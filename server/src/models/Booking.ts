import mongoose, { Document, Schema } from 'mongoose';

export interface IBooking extends Document {
  studentId: mongoose.Types.ObjectId;
  instructorId: mongoose.Types.ObjectId;
  lessonType: string;
  vehicleType: string;
  duration: number;
  scheduledDate: Date;
  scheduledTime: string;
  pickupLocation: {
    address: string;
    coordinates: [number, number];
  };
  status: 'pending' | 'confirmed' | 'ongoing' | 'completed' | 'cancelled';
  totalAmount: number;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  paymentId: string;
  notes: string;
  groupMembers: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const bookingSchema = new Schema<IBooking>({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  instructorId: { type: Schema.Types.ObjectId, ref: 'Instructor', required: true },
  lessonType: { 
    type: String, 
    required: true,
    enum: ['basic', 'highway', 'parking', 'license-test', 'night-driving', 'monsoon']
  },
  vehicleType: { 
    type: String, 
    required: true,
    enum: ['manual-car', 'automatic-car', 'motorcycle']
  },
  duration: { type: Number, required: true }, // in hours
  scheduledDate: { type: Date, required: true },
  scheduledTime: { type: String, required: true },
  pickupLocation: {
    address: { type: String, required: true },
    coordinates: { type: [Number], required: true }
  },
  status: { 
    type: String, 
    default: 'pending',
    enum: ['pending', 'confirmed', 'ongoing', 'completed', 'cancelled']
  },
  totalAmount: { type: Number, required: true },
  paymentStatus: { 
    type: String, 
    default: 'pending',
    enum: ['pending', 'paid', 'refunded']
  },
  paymentId: { type: String, default: '' },
  notes: { type: String, default: '' },
  groupMembers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IBooking>('Booking', bookingSchema);
