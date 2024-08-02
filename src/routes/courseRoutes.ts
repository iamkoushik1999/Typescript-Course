import { Router } from 'express';
import {
  addCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} from '../controllers/courseController';
const router = Router();

// ---------------------------------------------------

// POST
// Add Courses
router.route('/').post(addCourse);

// GET
// Add Courses
router.route('/').get(getCourses);

// GET
// Add Course
router.route('/:id').get(getCourse);

// PUT
// Add Course
router.route('/:id').put(updateCourse);

// DELETE
// Add Course
router.route('/:id').delete(deleteCourse);

export default router;
