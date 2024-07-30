import { Request, Response } from 'express';
import teacherModel from '../models/teacherModel';

// ------------------------------------------------------

// POST
// Add Teacher
export const addTeacher = async (req: Request, res: Response) => {
  const {
    fname,
    lname,
    email,
    password,
    phoneNumber,
    gender,
    joiningDate,
    designation,
    department,
    education,
  } = req.body;
  if (
    !fname ||
    !lname ||
    !email ||
    !password ||
    !phoneNumber ||
    !gender ||
    !joiningDate ||
    !designation ||
    !department ||
    !education
  ) {
    return res.status(400).json({ message: 'All fields required' });
  }

  const teacher = await teacherModel.create({
    fname,
    lname,
    email,
    password,
    phoneNumber,
    gender,
    joiningDate,
    designation,
    department,
    education,
  });

  res.status(201).json({ message: 'Teacher Added', data: teacher });
};

// GET
// Get Teacher
export const getTeachers = async (req: Request, res: Response) => {
  const teachers = await teacherModel.find();
  const teacherCount = await teacherModel.countDocuments();

  res.status(200).json({ count: teacherCount, data: teachers });
};

// GET
// Get One Teacher
export const getTeacher = async (req: Request, res: Response) => {
  const id = req.params.id;
  const teacher = await teacherModel.findById(id);
  if (!teacher) {
    return res.status(404).json({ message: 'No teacher found' });
  }

  res.status(200).json({ data: teacher });
};

// PUT
// Edit Teacher
export const updateTeacher = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newTeacher = await teacherModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!newTeacher) {
    return res.status(404).json({ message: 'No teacher found' });
  }

  res
    .status(200)
    .json({ message: 'Teacher Details Updated', data: newTeacher });
};

// DELETE
// Delete Teacher
export const deleteTeacher = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newTeacher = await teacherModel.findByIdAndDelete(id);
  if (!newTeacher) {
    return res.status(404).json({ message: 'No teacher found' });
  }

  res.status(200).json({ message: 'Teacher Data Deleted' });
};
