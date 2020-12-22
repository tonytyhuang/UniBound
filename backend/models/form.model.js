const mongoose = require('mongoose');

const SChema = mongoose.Schema;

const formSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    university: {type: String, required: true},
    program: {type: String, required: true},
    facebook: {type: String, required: false},
    instagram: {type: String, required: false},
    weChat: {type: String, required: false},
    other: {type: String, required: false},
    message: {type: String, required: false},
}, {
    timestamps: true,
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;