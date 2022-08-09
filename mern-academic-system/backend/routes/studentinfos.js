const router = require('express').Router();

let Student = require('../models/studentinfo.model');

router.route('/').get((req, res) => {
    Student.find()
        .then(studentinfos => res.json(studentinfos))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const studentID = req.body.studentID;
    const studentName = req.body.studentName;
    const studentGender = req.body.studentGender;
    const studentIC = req.body.studentIC;
    const studentProgramme = req.body.studentProgramme;
    const studentIntake = req.body.studentIntake;
    const studentNationality = req.body.studentNationality;
    const studentPhoneNo = req.body.studentPhoneNo;

    const newStudent = new Student({
        studentID,
        studentName,
        studentGender,
        studentIC,
        studentProgramme,
        studentIntake,
        studentNationality,
        studentPhoneNo,
    });

    newStudent.save()
        .then(studentinfos => res.json(studentinfos))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Exports
module.exports = router;