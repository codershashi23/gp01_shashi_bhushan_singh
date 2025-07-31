const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentcontrollers.js');

router.post('/', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);
router.patch('/:id/enroll', studentController.enrollInCourse);

module.exports = router;
