import { Router } from 'express';
import {
  addStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/studentController';
const router = Router();

// ---------------------------------------------------

// POST
// Add Students
router.route('/').post(addStudent);

// GET
// Add Students
router.route('/').get(getStudents);

// GET
// Add Student
router.route('/:id').get(getStudent);

// PUT
// Add Student
router.route('/:id').put(updateStudent);

// DELETE
// Add Student
router.route('/:id').delete(deleteStudent);

export default router;
