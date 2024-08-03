import { Request, Response } from 'express';
import studentModel from '../models/studentModel';

// ------------------------------------------------------

// POST
// Add Student
export const addStudent = async (req: Request, res: Response) => {
  const {
    fname,
    lname,
    email,
    phoneNumber,
    gender,
    registrationDate,
    IDNumber,
    course,
    parentName,
    parentPhoneNumber,
    dob,
    bloodgroup,
  } = req.body;
  if (
    !fname ||
    !lname ||
    !email ||
    !phoneNumber ||
    !gender ||
    !registrationDate ||
    !IDNumber ||
    !course ||
    !parentName ||
    !parentPhoneNumber ||
    !dob ||
    !bloodgroup
  ) {
    return res.status(400).json({ message: 'All fields required' });
  }

  const student = await studentModel.create({
    fname,
    lname,
    email,
    phoneNumber,
    gender,
    registrationDate,
    IDNumber,
    course,
    parentName,
    parentPhoneNumber,
    dob,
    bloodgroup,
  });

  res.status(201).json({ message: 'Student Added', data: student });
};

// GET
// Get Student
export const getStudents = async (req: Request, res: Response) => {
  const students = await studentModel.find();
  const studentCount = await studentModel.countDocuments();

  res.status(200).json({ count: studentCount, data: students });
};

// GET
// Get One Student
export const getStudent = async (req: Request, res: Response) => {
  const id = req.params.id;
  const student = await studentModel.findById(id);
  if (!student) {
    return res.status(404).json({ message: 'No Student found' });
  }

  res.status(200).json({ data: student });
};

// PUT
// Edit Student
export const updateStudent = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newStudent = await studentModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!newStudent) {
    return res.status(404).json({ message: 'No Student found' });
  }

  res
    .status(200)
    .json({ message: 'Student Details Updated', data: newStudent });
};

// DELETE
// Delete Student
export const deleteStudent = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newStudent = await studentModel.findByIdAndDelete(id);
  if (!newStudent) {
    return res.status(404).json({ message: 'No Student found' });
  }

  res.status(200).json({ message: 'Student Data Deleted' });
};
