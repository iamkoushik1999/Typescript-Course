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
