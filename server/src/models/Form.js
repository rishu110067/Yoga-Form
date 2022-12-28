const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Form', FormSchema);