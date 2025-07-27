import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/database';
import userRoutes from './routes/userRoutes';

// Configure dotenv to look for .env file in the root directory
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Motus Drive API is running!',
    endpoints: {
      register: 'POST /api/users/register',
      login: 'POST /api/users/login',
      profile: 'GET /api/users/profile'
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Motus Drive Server running on port ${PORT}`);
  console.log(`📍 API available at: http://localhost:${PORT}`);
});
