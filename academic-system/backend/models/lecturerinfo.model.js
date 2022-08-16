const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const lecturerSchema = new Schema ({
    lecturerID: {
        type: String,
        required: true
    },
    lecturerName: {
        type: String,
        required: true
    },
    lecturerGender: {
        type: String,
        required: true
    },
    lecturerIC: {
        type: String,
        required: true
    },
    lecturerProgramme: {
        type: String,
        required: true
    },
    lecturerNationality: {
        type: String,
        required: true
    },
    lecturerPhoneNo: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Lecturer = mongoose.model('Lecturer', lecturerSchema);

// Exports
module.exports = Lecturer;