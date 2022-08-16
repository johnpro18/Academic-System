const router = require('express').Router();

let Lecturer = require('../models/lecturerinfo.model');

// Get All Lecturer Info
router.route('/').get((res) => {
    Lecturer
        .find()
        .then(lecturerinfos => res.json(lecturerinfos))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create New Lecturer Info
router.route('/add').post((req, res) => {
    const lecturerID = req.body.lecturerID;
    const lecturerName = req.body.lecturerName;
    const lecturerGender = req.body.lecturerGender;
    const lecturerIC = req.body.lecturerIC;
    const lecturerProgramme = req.body.lecturerProgramme;
    const lecturerNationality = req.body.lecturerNationality;
    const lecturerPhoneNo = req.body.lecturerPhoneNo;

    const newLecturer = new Lecturer ({
        lecturerID,
        lecturerName,
        lecturerGender,
        lecturerIC,
        lecturerProgramme,
        lecturerNationality,
        lecturerPhoneNo,
    });

    newLecturer
        .save()
        .then(() => res.json('Lecturer Added Successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Lecturer Info By ID
router.route('/:id').get((req, res) => {
    Lecturer
        .findById(req.params.id)
        .then(lecturerinfo => res.json(lecturerinfo))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Lecturer Info By ID
router.route('/:id').delete((req, res) => {
    Lecturer
        .findByIdAndDelete(req.params.id)
        .then(() => res.json('Lecturer Info Deleted Successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update Lecturer Info By ID
router.route('/update/:id').post((req, res) => {
    Lecturer
        .findById(req.params.id)
        .then(lecturerinfo => {
            lecturerinfo.lecturerID = req.body.lecturerID;
            lecturerinfo.lecturerName = req.body.lecturerName;
            lecturerinfo.lecturerGender = req.body.lecturerGender;
            lecturerinfo.lecturerIC = req.body.lecturerIC;
            lecturerinfo.lecturerProgramme = req.body.lecturerProgramme;
            lecturerinfo.lecturerNationality = req.body.lecturerNationality;
            lecturerinfo.lecturerPhoneNo = req.body.lecturerPhoneNo;

            lecturerinfo
                .save()
                .then(() => res.json('Lecturer Info Updated Successfully'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Exports
module.exports = router;