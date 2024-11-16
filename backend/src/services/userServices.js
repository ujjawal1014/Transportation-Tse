const Driver = require('../models/driver.model'); // Assuming you renamed `User` to `Driver`
const bcrypt = require('bcryptjs');

// Find driver by phone number (or any unique field)
const findDriverByPhoneNumber = async (phoneNumber) => {
    return await Driver.findOne({ phoneNumber });
};

// Create new driver (with validation and error handling)
const createDriver = async (driverData) => {
    const {
        name,
        gender,
        age,
        phoneNumber,
        kilometersDriven = 0,
        drivesTaken = 0,
        accidents = 0,
        licenseType,
    } = driverData;

    // Validate license type
    if (!['Permanent', 'Learning'].includes(licenseType)) {
        throw new Error('Invalid license type. Must be "Permanent" or "Learning".');
    }

    // Check if the driver already exists (unique by phone number)
    const existingDriver = await findDriverByPhoneNumber(phoneNumber);
    if (existingDriver) {
        throw new Error('Driver already exists with this phone number');
    }

    // Validate age
    if (age < 18) {
        throw new Error('Driver must be at least 18 years old');
    }

    // Create and save new driver
    const newDriver = new Driver({
        name,
        gender,
        age,
        phoneNumber,
        kilometersDriven,
        drivesTaken,
        accidents,
        licenseType,
    });

    await newDriver.save();

    return newDriver;
};

module.exports = {
    findDriverByPhoneNumber,
    createDriver,
};
