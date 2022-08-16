const router = require('express').Router();

let Student = require('../models/studentinfo.model');

// Get All Student Info
router.route('/').get((res) => {
    Student
        .find()
        .then(studentinfos => res.json(studentinfos))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create New Student Info
router.route('/add').post((req, res) => {
    const studentID = req.body.studentID;
    const studentName = req.body.studentName;
    const studentGender = req.body.studentGender;
    const studentIC = req.body.studentIC;
    const studentProgramme = req.body.studentProgramme;
    const studentIntake = req.body.studentIntake;
    const studentNationality = req.body.studentNationality;
    const studentPhoneNo = req.body.studentPhoneNo;

    const newStudent = new Student ({
        studentID,
        studentName,
        studentGender,
        studentIC,
        studentProgramme,
        studentIntake,
        studentNationality,
        studentPhoneNo,
    });

    newStudent
        .save()
        .then(() => res.json('Student Added Successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Student Info By ID
router.route('/:id').get((req, res) => {
    Student
        .findById(req.params.id)
        .then(studentinfo => res.json(studentinfo))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Student Info By ID
router.route('/:id').delete((req, res) => {
    Student
        .findByIdAndDelete(req.params.id)
        .then(() => res.json('Student Info Deleted Successfully'))
        .catch(err => res.status(400).json('Error: '+ err));
});

// Update Student Info By ID
router.route('/update/:id').post((req, res) => {
    Student
        .findById(req.params.id)
        .then(studentinfo => {
            studentinfo.studentID = req.body.studentID;
            studentinfo.studentName = req.body.studentName;
            studentinfo.studentGender = req.body.studentGender;
            studentinfo.studentIC = req.body.studentIC;
            studentinfo.studentProgramme = req.body.studentProgramme;
            studentinfo.studentIntake = req.body.studentIntake;
            studentinfo.studentNationality = req.body.studentNationality;
            studentinfo.studentPhoneNo = req.body.studentPhoneNo;

            studentinfo
                .save()
                .then(() => res.json('Student Info Updated Successfully'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Exports
module.exports = router;