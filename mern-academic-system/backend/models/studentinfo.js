const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const studentSchema = new Schema({
    studentID: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    studentGender: {
        type: String,
        required: true
    },
    studentIC: {
        type: String,
        required: true
    },
    studentProgramme: {
        type: String,
        required: true
    },
    studentIntake: {
        type: String,
        required: true
    },
    studentNationality: {
        type: String,
        required: true
    },
    studentPhoneNo: {
        type: String,
        required: true
    }
}, {
    timestamps: true,    
});

const Student = mongoose.model('Student', studentSchema);

// Exports
module.exports = Student;