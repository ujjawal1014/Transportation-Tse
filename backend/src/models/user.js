const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18, // Assuming the minimum age to drive
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v); // Validates a 10-digit phone number
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  kilometersDriven: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  drivesTaken: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  accidents: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  licenseType: {
    type: String,
    enum: ['Permanent', 'Learning'],
    required: true,
  },
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
