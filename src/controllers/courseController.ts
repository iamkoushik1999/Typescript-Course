import { Request, Response } from 'express';
import courseModel from '../models/courseModel';

// ------------------------------------------------------

// POST
// Add Course
export const addCourse = async (req: Request, res: Response) => {
  const {
    name,
    code,
    startDate,
    duration,
    price,
    teacher,
    students,
    status,
    details,
  } = req.body;
  if (
    !name ||
    !code ||
    !startDate ||
    !duration ||
    !price ||
    !teacher ||
    !students ||
    !status ||
    !details
  ) {
    return res.status(400).json({ message: 'All fields required' });
  }

  const course = await courseModel.create({
    name,
    code,
    startDate,
    duration,
    price,
    teacher,
    students,
    status,
    details,
  });

  res.status(201).json({ message: 'Course Added', data: course });
};

// GET
// Get Course
export const getCourses = async (req: Request, res: Response) => {
  const courses = await courseModel.find();
  const courseCount = await courseModel.countDocuments();

  res.status(200).json({ count: courseCount, data: courses });
};
