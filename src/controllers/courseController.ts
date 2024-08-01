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

// GET
// Get One Course
export const getCourse = async (req: Request, res: Response) => {
  const id = req.params.id;
  const course = await courseModel.findById(id);
  if (!course) {
    return res.status(404).json({ message: 'No course found' });
  }

  res.status(200).json({ data: course });
};

// PUT
// Edit Course
export const updateCourse = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newCourse = await courseModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!newCourse) {
    return res.status(404).json({ message: 'No course found' });
  }

  res.status(200).json({ message: 'Course Details Updated', data: newCourse });
};

// DELETE
// Delete Course
export const deleteCourse = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newCourse = await courseModel.findByIdAndDelete(id);
  if (!newCourse) {
    return res.status(404).json({ message: 'No Course found' });
  }

  res.status(200).json({ message: 'Course Data Deleted' });
};
