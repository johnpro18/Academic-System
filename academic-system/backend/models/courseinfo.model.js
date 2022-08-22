const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const courseSchema = new Schema ({
    courseID: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseCredits: {
        type: String,
        required: true
    },
    courseProgramme: {
        type: String,
        required: true
    },
    courseLecturer: [{
        lecturerID: {
            type: String,
            required: true
        },
        lecturerName: {
            type: String,
            required: true
        },
        lecturerGroup: {
            type: String,
            require: true
        }
    }],
    courseStudents: [{
        studentID: {
            type: String,
            required: true
        },
        studentName: {
            type: String,
            required: true 
        },
        studentGroup: {
            tpye: String,
            required: true
        }
    }]
}, {
    timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

//Exports
module.exports = Course;