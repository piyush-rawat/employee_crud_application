const express = require("express");
const router = express.Router();

const {
  searchEmployee,
  getAllEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  downloadEmployeeList,
} = require("../controllers/employees");

router.get("/download", downloadEmployeeList);

router.get("/", getAllEmployees);

router.post("/", addEmployee);

router.post("/search", searchEmployee);

router
  .route("/:employee_id")
  .get(getEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
