import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    // Debug: Check what URI is being loaded
    console.log('🔍 Debug - MongoDB URI:', process.env.MONGODB_URI ? 'Atlas URI loaded' : 'No URI found - using localhost fallback');
    
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/motus-drive'
    );
    console.log(`📊 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Database connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
