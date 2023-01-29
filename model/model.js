const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    course: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        min: 1,
        max: 4
    }
})

const StudentProfileModel = new mongoose.model("studentprofiles", schema, "studentprofiles");

module.exports = StudentProfileModel;