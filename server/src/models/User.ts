import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'student' | 'instructor' | 'admin';
  profile: {
    address?: string;
    licenseNumber?: string;
    experience?: number;
    certifications?: string[];
  };
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['student', 'instructor', 'admin'], 
    default: 'student' 
  },
  profile: {
    address: String,
    licenseNumber: String,
    experience: Number,
    certifications: [String]
  }
}, {
  timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);
