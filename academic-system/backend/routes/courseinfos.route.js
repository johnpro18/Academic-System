const router = require('express').Router();

let Course = require('../models/courseinfo.model');

// Get All Course Info
router.route('/').get((req, res) => {
    Course
        .find()
        .then(courseinfos => res.json(courseinfos))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create New Course Info
router.route('/add').post((req, res) => {
    const courseID = req.body.courseID;
    const courseName = req.body.courseName;
    const courseCredits = req.body.courseCredits;
    const courseProgramme = req.body.courseProgramme;

    const newCourse = new Course ({
        courseID,
        courseName,
        courseCredits,
        courseProgramme,
    });

    newCourse
        .save()
        .then(() => res.json('Course Added Successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Course Info By ID
router.route('/:id').get((req, res) => {
    Course
        .findById(req.params.id)
        .then(courseinfo => res.json(courseinfo))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Course Info By ID
router.route('/:id').delete((req, res) => {
    Course 
        .findByIdAndDelete(req.params.id)
        .then(() => res.json('Course Info Deleted Successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update Course Info By ID
router.route('update/:id').post((req, res) => {
    Course
        .findById(req.params.id)
        .then(courseInfo => {
            courseInfo.courseID = req.body.courseID;
            courseInfo.courseName = req.body.courseName;
            courseInfo.courseCredits = req.body.courseCredits;
            courseInfo.courseProgramme = req.body.courseProgramme;

            courseInfo
                .save()
                .then(() => res.json('Course Info Updated Successfully'))
                .catch(err => res.status(400).json('Error: ' + err));    
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add Student To Course By ID
router.route('students/:id').post((req, res) => {
    Course
        .findById(req.params.id)
        .then(courseInfo => {
            courseInfo.courseStudents.studentID = req.body.studentID;
            courseInfo.courseStudents.studentName = req.body.studentName;
            courseInfo.courseStudents.studentGroup = req.body.studentGroup;

            courseInfo
                .save()
                .then(() => res.json('Student Added To Course Successfully'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Remove Student From Course By ID
router.route('students/:id').delete((req, res) => {
    Course
        .find
})

// Add Lecturer To Course By ID

// Remove Lecturer From Course By ID

// Exports
module.exports = router;