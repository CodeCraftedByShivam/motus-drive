import { Request, Response } from 'express';
import Instructor from '../models/Instructor';

export const getInstructors = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 12;
    const skip = (page - 1) * limit;

    const filters: any = { isActive: true };
    
    if (req.query.vehicleType) {
      filters.vehicleTypes = { $in: [req.query.vehicleType] };
    }
    
    if (req.query.minRating) {
      filters.rating = { $gte: parseFloat(req.query.minRating as string) };
    }

    const instructors = await Instructor.find(filters)
      .sort({ rating: -1, totalLessons: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Instructor.countDocuments(filters);

    res.json({
      instructors,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalInstructors: total,
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
      }
    });
  } catch (error: any) {
    console.error('Error fetching instructors:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getInstructorById = async (req: Request, res: Response) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    
    if (!instructor) {
      return res.status(404).json({ message: 'Instructor not found' });
    }

    res.json(instructor);
  } catch (error: any) {
    console.error('Error fetching instructor:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getInstructorsByArea = async (req: Request, res: Response) => {
  try {
    const { area } = req.params;
    const instructors = await Instructor.find({
      isActive: true,
      // Add area filtering when serviceAreas field is available
    }).sort({ rating: -1 });

    res.json(instructors);
  } catch (error: any) {
    console.error('Error fetching instructors by area:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const createInstructor = async (req: Request, res: Response) => {
  try {
    const instructor = new Instructor(req.body);
    await instructor.save();
    res.status(201).json({
      message: 'Instructor created successfully',
      instructor
    });
  } catch (error: any) {
    console.error('Error creating instructor:', error);
    res.status(400).json({ message: 'Error creating instructor', error: error.message });
  }
};

export const updateInstructor = async (req: Request, res: Response) => {
  try {
    const instructor = await Instructor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!instructor) {
      return res.status(404).json({ message: 'Instructor not found' });
    }

    res.json({
      message: 'Instructor updated successfully',
      instructor
    });
  } catch (error: any) {
    console.error('Error updating instructor:', error);
    res.status(400).json({ message: 'Error updating instructor', error: error.message });
  }
};

export const deleteInstructor = async (req: Request, res: Response) => {
  try {
    const instructor = await Instructor.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    
    if (!instructor) {
      return res.status(404).json({ message: 'Instructor not found' });
    }

    res.json({ 
      message: 'Instructor deactivated successfully',
      instructor 
    });
  } catch (error: any) {
    console.error('Error deleting instructor:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
