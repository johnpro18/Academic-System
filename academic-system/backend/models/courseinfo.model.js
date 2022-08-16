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
        type: Number,
        required: true
    },
    courseProgramme: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

//Exports
module.exports = Course;