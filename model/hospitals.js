const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxLength: [50, "Name cannot be more than 50 characters"],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
  },
  district: {
    type: String,
    required: [true, "Please add a district"],
  },
  province: {
    type: String,
    required: [true, "Please add a province"],
  },
  postalCode: {
    type: String,
    required: [true, "Please add a postalCode"],
    maxLength: [5, "Postal code cannot be more than 5 digits"],
  },
  tel: {
    type: String,
  },
  region: {
    type: String,
    required: [true, "Please add a region"],
  },
});

module.exports = mongoose.model("hospital", HospitalSchema);
