const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  employee_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  dateOfJoining: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("employee", EmployeeSchema);
