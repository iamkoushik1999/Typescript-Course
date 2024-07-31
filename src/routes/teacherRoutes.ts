import { Router } from 'express';
import {
  addTeacher,
  getTeachers,
  getTeacher,
  updateTeacher,
  deleteTeacher,
} from '../controllers/teacherController';
const router = Router();

// ---------------------------------------------------

// POST
// Add Teachers
router.route('/').post(addTeacher);

// GET
// Add Teachers
router.route('/').get(getTeachers);

// GET
// Add Teacher
router.route('/:id').get(getTeacher);

// PUT
// Add Teacher
router.route('/:id').put(updateTeacher);

// DELETE
// Add Teacher
router.route('/:id').delete(deleteTeacher);

export default router;
