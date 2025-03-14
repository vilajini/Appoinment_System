const mongoose = require('mongoose');

const appoinmentSchema = new mongoose.Schema({
    appoinmentno:{
        type: Number,
        required: true,
        unique: true,
    },
    fullname:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Patient',
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    bloodType:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true
    },
    condition:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Appoinment', appoinmentSchema);
