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
    const courseCredits = Number(req.body.courseCredits);
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

// Get Student Info By ID
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
            courseInfo.courseCredits = Number(req.body.courseCredits);
            courseInfo.courseProgramme = req.body.courseProgramme;

            courseInfo
                .save()
                .then(() => res.json('Course Info Updated Successfully'))
                .catch(err => res.status(400).json('Error: ' + err));    
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Exports
module.exports = router;