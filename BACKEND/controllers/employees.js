const { v4: uuid } = require("uuid");
const XLSX = require("xlsx");

const Employee = require("../models/Employee");

const searchEmployee = async (req, res) => {
  const { query } = req.body;

  try {
    const employees = Employee.find({ name: /Piyush/ }).exec();

    employees.map((doc) => console.log(doc));

    return res.status(200).json({ employeeList: employees });
  } catch (error) {
    console.log(error);
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
      .select("-_id -__v -phone -address")
      .sort("name");
    return res.status(200).json({ employeeList: employees });
  } catch (error) {
    console.log(error);
  }
};

const getEmployee = async (req, res) => {
  const { employee_id } = req.params;
  try {
    const employee = await Employee.findOne({ employee_id }).select(
      "-_id -__v"
    );

    return res.status(200).json({ employee });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error_msg: "Server error." });
  }
};

const addEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      dateOfBirth,
      address,
      designation,
      dateOfJoining,
      salary,
    } = req.body;

    const newEmployee = await Employee.create({
      employee_id: uuid(),
      name,
      email,
      phone,
      dateOfBirth,
      address,
      designation,
      dateOfJoining,
      salary,
    });

    return res.status(200).json({ newEmployee });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error_msg: "Server error." });
  }
};

const updateEmployee = async (req, res) => {
  const employee_id = req.params.employee_id;

  try {
    const updated_employee = await Employee.findOneAndUpdate(
      { employee_id },
      req.body,
      { new: true }
    );

    return res.status(200).json({ updated_employee });
  } catch (error) {
    console.log(error);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { employee_id } = req.params;

    const deletedEmployee = await Employee.findOneAndDelete({ employee_id });

    return res
      .status(200)
      .json({ deleted_employee_id: deletedEmployee.employee_id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error_msg: "Server error." });
  }
};

const downloadEmployeeList = async (req, res) => {
  try {
    const aoa = [];

    aoa.push([
      "Name",
      "Email",
      "Phone",
      "Date Of Birth",
      "Designation",
      "Date Of Joining",
      "Salary",
    ]);

    const employees = await Employee.find();
    employees.map(
      ({
        name,
        email,
        phone,
        dateOfBirth,
        designation,
        dateOfJoining,
        salary,
      }) => {
        aoa.push([
          name,
          email,
          phone,
          dateOfBirth,
          designation,
          dateOfJoining,
          salary,
        ]);
      }
    );

    const worksheet = XLSX.utils.aoa_to_sheet(aoa);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    res.header(
      "Content-Disposition",
      `attachment; filename="Employee List.xlsx"`
    );

    return res.status(200).send(buffer);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  searchEmployee,
  getAllEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  downloadEmployeeList,
};
