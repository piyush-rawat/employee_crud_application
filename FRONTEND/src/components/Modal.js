import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import M from "react-bootstrap/Modal";
import { hideModalAction } from "../redux/actions/modalActions";
import {
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../redux/actions/employeeActions";

const Modal = () => {
  const dispatch = useDispatch();

  const { showModal, modalType, employee_data, employee_id } = useSelector(
    (state) => state.modal
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addEmployeeFormData, setAddEmployeeFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    designation: "",
    dateOfJoining: "",
    salary: "",
  });

  const [updateEmployeeFormData, setUpdateEmployeeFormData] = useState({
    name: employee_data.name,
    email: employee_data.email,
    phone: employee_data.phone,
    dateOfBirth: employee_data.dateOfBirth,
    address: employee_data.address,
    designation: employee_data.designation,
    dateOfJoining: employee_data.dateOfJoining,
    salary: employee_data.salary,
  });

  useEffect(() => {
    setUpdateEmployeeFormData({
      name: employee_data.name,
      email: employee_data.email,
      phone: employee_data.phone,
      dateOfBirth: employee_data.dateOfBirth,
      address: employee_data.address,
      designation: employee_data.designation,
      dateOfJoining: employee_data.dateOfJoining,
      salary: employee_data.salary,
    });
  }, [employee_data]);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const dateOfBirthRef = useRef(null);
  const addressRef = useRef(null);
  const designationRef = useRef(null);
  const dateOfJoiningRef = useRef(null);
  const salaryRef = useRef(null);

  const nameAlertRef = useRef(null);
  const emailAlertRef = useRef(null);
  const phoneAlertRef = useRef(null);
  const dateOfBirthAlerthRef = useRef(null);
  const addressAlertRef = useRef(null);
  const designationAlertRef = useRef(null);
  const dateOfJoiningAlertRef = useRef(null);
  const salaryAlertRef = useRef(null);

  const handleHideModal = () => {
    dispatch(hideModalAction());
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      dateOfBirth,
      address,
      designation,
      dateOfJoining,
      salary,
    } = addEmployeeFormData;

    const errors = [];

    if (name === "") {
      errors.push(1);
      nameRef.current.classList.add("form-input-alert");
      nameAlertRef.current.innerText = "Name is required.";
    }

    if (email === "") {
      errors.push(1);
      emailRef.current.classList.add("form-input-alert");
      emailAlertRef.current.innerText = "Email is required.";
    }

    if (phone === "") {
      errors.push(1);
      phoneRef.current.classList.add("form-input-alert");
      phoneAlertRef.current.innerText = "Phone is required.";
    }

    if (dateOfBirth === "") {
      errors.push(1);
      dateOfBirthRef.current.classList.add("form-input-alert");
      dateOfBirthAlerthRef.current.innerText = "Date of birth is required.";
    }

    if (address === "") {
      errors.push(1);
      addressRef.current.classList.add("form-input-alert");
      addressAlertRef.current.innerText = "Address is required.";
    }

    if (designation === "") {
      errors.push(1);
      designationRef.current.classList.add("form-input-alert");
      designationAlertRef.current.innerText = "Designation is required.";
    }

    if (dateOfJoining === "") {
      errors.push(1);
      dateOfJoiningRef.current.classList.add("form-input-alert");
      dateOfJoiningAlertRef.current.innerText = "Date of Joining is required.";
    }

    if (salary === "") {
      errors.push(1);
      salaryRef.current.classList.add("form-input-alert");
      salaryAlertRef.current.innerText = "Salary is required.";
    }

    if (errors.length === 0) {
      dispatch(addEmployee(addEmployeeFormData));
    }
  };

  const handleUpdateEmployee = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      dateOfBirth,
      address,
      designation,
      dateOfJoining,
      salary,
    } = updateEmployeeFormData;

    const errors = [];

    if (name === "") {
      errors.push(1);
      nameRef.current.classList.add("form-input-alert");
      nameAlertRef.current.innerText = "Name is required.";
    }

    if (email === "") {
      errors.push(1);
      emailRef.current.classList.add("form-input-alert");
      emailAlertRef.current.innerText = "Email is required.";
    }

    if (phone === "") {
      errors.push(1);
      phoneRef.current.classList.add("form-input-alert");
      phoneAlertRef.current.innerText = "Phone is required.";
    }

    if (dateOfBirth === "") {
      errors.push(1);
      dateOfBirthRef.current.classList.add("form-input-alert");
      dateOfBirthAlerthRef.current.innerText = "Date Of Birth is required.";
    }

    if (address === "") {
      errors.push(1);
      addressRef.current.classList.add("form-input-alert");
      addressAlertRef.current.innerText = "Address is required.";
    }

    if (designation === "") {
      errors.push(1);
      designationRef.current.classList.add("form-input-alert");
      designationAlertRef.current.innerText = "Designation is required.";
    }

    if (dateOfJoining === "") {
      errors.push(1);
      dateOfJoiningRef.current.classList.add("form-input-alert");
      dateOfJoiningAlertRef.current.innerText = "Date Of Joining is required.";
    }

    if (salary === "") {
      errors.push(1);
      salaryRef.current.classList.add("form-input-alert");
      salaryAlertRef.current.innerText = "Salary is required.";
    }

    if (errors.length === 0) {
      dispatch(
        updateEmployee(employee_data.employee_id, updateEmployeeFormData)
      );
    }
  };

  if (modalType === "add") {
    return (
      <>
        <div className="modal-backdrop" onClick={handleHideModal}></div>
        <div className="modal">
          <form className="modal-form-add">
            <h1>Add Employee</h1>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={addEmployeeFormData.name}
                onChange={(e) => {
                  nameRef.current.classList.remove("form-input-alert");
                  nameAlertRef.current.innerText = "";
                  setAddEmployeeFormData({
                    ...addEmployeeFormData,
                    name: e.target.value,
                  });
                }}
                ref={nameRef}
              />
              <p className="form-alert" ref={nameAlertRef}></p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={addEmployeeFormData.email}
                onChange={(e) => {
                  emailRef.current.classList.remove("form-input-alert");
                  emailAlertRef.current.innerText = "";
                  setAddEmployeeFormData({
                    ...addEmployeeFormData,
                    email: e.target.value,
                  });
                }}
                ref={emailRef}
              />
              <p className="form-alert" ref={emailAlertRef}></p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                value={addEmployeeFormData.phone}
                onChange={(e) => {
                  phoneRef.current.classList.remove("form-input-alert");
                  phoneAlertRef.current.innerText = "";
                  setAddEmployeeFormData({
                    ...addEmployeeFormData,
                    phone: e.target.value,
                  });
                }}
                ref={phoneRef}
              />
              <p className="form-alert" ref={phoneAlertRef}></p>
            </div>

            <div>
              <input
                type="text"
                placeholder="Date Of Birth"
                value={addEmployeeFormData.dateOfBirth}
                onFocus={() => {
                  dateOfBirthRef.current.type = "date";
                }}
                onChange={(e) => {
                  dateOfBirthRef.current.classList.remove("form-input-alert");
                  dateOfBirthAlerthRef.current.innerText = "";
                  setAddEmployeeFormData({
                    ...addEmployeeFormData,
                    dateOfBirth: e.target.value,
                  });
                }}
                ref={dateOfBirthRef}
              />
              <p className="form-alert" ref={dateOfBirthAlerthRef}></p>
            </div>

            <div>
              <input
                type="text"
                placeholder="Address"
                value={addEmployeeFormData.address}
                onChange={(e) => {
                  addressRef.current.classList.remove("form-input-alert");
                  addressAlertRef.current.innerText = "";
                  setAddEmployeeFormData({
                    ...addEmployeeFormData,
                    address: e.target.value,
                  });
                }}
                ref={addressRef}
              />
              <p className="form-alert" ref={addressAlertRef}></p>
            </div>

            <div>
              <select
                value={addEmployeeFormData.designation}
                onChange={(e) => {
                  designationRef.current.classList.remove("form-input-alert");
                  designationAlertRef.current.innerText = "";
                  setAddEmployeeFormData({
                    ...addEmployeeFormData,
                    designation: e.target.value,
                  });
                }}
                ref={designationRef}
              >
                <option value="">Select Designation</option>
                <option value="ReactJS Developer">ReactJS Developer</option>
                <option value="Java Developer">Java Developer</option>
                <option value="NodeJS Developer">NodeJS Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="iOS Developer">iOS Developer</option>
                <option value="Software Tester">Software Tester</option>
              </select>
              <p className="form-alert" ref={designationAlertRef}></p>
            </div>

            <div>
              <input
                type="text"
                placeholder="Date Of Joining"
                value={addEmployeeFormData.dateOfJoining}
                onFocus={(e) => {
                  console.log(e);
                  dateOfJoiningRef.current.type = "date";
                }}
                onChange={(e) => {
                  console.log(e);
                  dateOfJoiningRef.current.classList.remove("form-input-alert");
                  dateOfJoiningAlertRef.current.innerText = "";
                  setAddEmployeeFormData({
                    ...addEmployeeFormData,
                    dateOfJoining: e.target.value,
                  });
                }}
                ref={dateOfJoiningRef}
              />
              <p className="form-alert" ref={dateOfJoiningAlertRef}></p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Salary"
                value={addEmployeeFormData.salary}
                onChange={(e) => {
                  salaryRef.current.classList.remove("form-input-alert");
                  salaryAlertRef.current.innerText = "";
                  setAddEmployeeFormData({
                    ...addEmployeeFormData,
                    salary: e.target.value,
                  });
                }}
                ref={salaryRef}
              />
              <p className="form-alert" ref={salaryAlertRef}></p>
            </div>
            <div>
              {/* <p className="form-alert">{auth_error}</p> */}
              <button className="btn-login" onClick={handleAddEmployee}>
                Add
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }

  if (modalType === "update") {
    return (
      <>
        <div className="modal-backdrop" onClick={handleHideModal}></div>
        <div className="modal">
          <form className="modal-form-update">
            <h1>Update Employee</h1>
            <div>
              <p>Name</p>
              <input
                type="text"
                placeholder="Name"
                value={updateEmployeeFormData.name}
                onChange={(e) => {
                  nameRef.current.classList.remove("form-input-alert");
                  nameAlertRef.current.innerText = "";
                  setUpdateEmployeeFormData({
                    ...updateEmployeeFormData,
                    name: e.target.value,
                  });
                }}
                ref={nameRef}
              />
              <p className="form-alert" ref={nameAlertRef}></p>
            </div>

            <div>
              <p>Email</p>
              <input
                type="text"
                placeholder="Email"
                value={updateEmployeeFormData.email}
                onChange={(e) => {
                  emailRef.current.classList.remove("form-input-alert");
                  emailAlertRef.current.innerText = "";
                  setUpdateEmployeeFormData({
                    ...updateEmployeeFormData,
                    email: e.target.value,
                  });
                }}
                ref={emailRef}
              />
              <p className="form-alert" ref={emailAlertRef}></p>
            </div>
            <div>
              <p>Phone</p>
              <input
                type="text"
                placeholder="Phone"
                value={updateEmployeeFormData.phone}
                onChange={(e) => {
                  phoneRef.current.classList.remove("form-input-alert");
                  phoneAlertRef.current.innerText = "";
                  setUpdateEmployeeFormData({
                    ...updateEmployeeFormData,
                    phone: e.target.value,
                  });
                }}
                ref={phoneRef}
              />
              <p className="form-alert" ref={phoneAlertRef}></p>
            </div>
            <div>
              <label>Date Of Birth</label>
              <input
                type="date"
                placeholder="Date Of Birth"
                value={updateEmployeeFormData.dateOfBirth}
                onChange={(e) => {
                  phoneRef.current.classList.remove("form-input-alert");
                  phoneAlertRef.current.innerText = "";
                  setUpdateEmployeeFormData({
                    ...updateEmployeeFormData,
                    dateOfBirth: e.target.value,
                  });
                }}
                ref={dateOfBirthRef}
              />
              <p className="form-alert" ref={dateOfBirthAlerthRef}></p>
            </div>

            <div>
              <p>Address</p>
              <input
                type="text"
                placeholder="Address"
                value={updateEmployeeFormData.address}
                onChange={(e) => {
                  addressRef.current.classList.remove("form-input-alert");
                  addressAlertRef.current.innerText = "";
                  setUpdateEmployeeFormData({
                    ...updateEmployeeFormData,
                    address: e.target.value,
                  });
                }}
                ref={addressRef}
              />
              <p className="form-alert" ref={addressAlertRef}></p>
            </div>

            <div>
              <p>Designation</p>
              <select
                value={updateEmployeeFormData.designation}
                onChange={(e) => {
                  designationRef.current.classList.remove("form-input-alert");
                  designationAlertRef.current.innerText = "";
                  setUpdateEmployeeFormData({
                    ...updateEmployeeFormData,
                    designation: e.target.value,
                  });
                }}
                ref={designationRef}
              >
                <option value="">Select Designation</option>
                <option value="ReactJS Developer">ReactJS Developer</option>
                <option value="Java Developer">Java Developer</option>
                <option value="NodeJS Developer">NodeJS Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="iOS Developer">iOS Developer</option>
                <option value="Software Tester">Software Tester</option>
              </select>
              <p className="form-alert" ref={designationAlertRef}></p>
            </div>

            <div>
              <p>Date Of Joining</p>
              <input
                type="date"
                placeholder="Date Of Joining"
                value={updateEmployeeFormData.dateOfJoining}
                onChange={(e) => {
                  dateOfJoiningRef.current.classList.remove("form-input-alert");
                  dateOfJoiningAlertRef.current.innerText = "";
                  setUpdateEmployeeFormData({
                    ...updateEmployeeFormData,
                    dateOfJoining: e.target.value,
                  });
                }}
                ref={dateOfJoiningRef}
              />
              <p className="form-alert" ref={dateOfJoiningAlertRef}></p>
            </div>
            <div>
              <p>Salary</p>
              <input
                type="text"
                placeholder="Salary"
                value={updateEmployeeFormData.salary}
                onChange={(e) => {
                  salaryRef.current.classList.remove("form-input-alert");
                  salaryAlertRef.current.innerText = "";
                  setUpdateEmployeeFormData({
                    ...updateEmployeeFormData,
                    salary: e.target.value,
                  });
                }}
                ref={salaryRef}
              />
              <p className="form-alert" ref={salaryAlertRef}></p>
            </div>
            <div>
              {/* <p className="form-alert">{auth_error}</p> */}
              <button className="btn-login" onClick={handleUpdateEmployee}>
                Update
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }

  if (modalType === "detail") {
    return (
      <>
        <div className="modal-backdrop" onClick={handleHideModal}></div>
        <div className="modal modal-form-detail">
          <h1>Employee Details</h1>
          <p>Name : {employee_data.name}</p>
          <p>Email : {employee_data.email}</p>
          <p>Phone : {employee_data.phone}</p>
          <p>Date Of Birth : {employee_data.dateOfBirth}</p>
          <p>Address : {employee_data.address}</p>
          <p>Date Of Joining : {employee_data.dateOfJoining}</p>
          <p>Designation : {employee_data.designation} </p>
          <p>Salary : {employee_data.salary}</p>
        </div>
      </>
    );
  }

  if (modalType === "delete") {
    return (
      <>
        <div className="modal-backdrop" onClick={handleHideModal}></div>
        <div className="modal modal-form-delete">
          <h1>Please Comfirm</h1>
          <p>Are you sure you want to delete this employee from database ?</p>
          <div>
            <button
              className="btn-cancel"
              onClick={() => dispatch(hideModalAction())}
            >
              Cancel
            </button>
            <button
              className="btn-delete"
              onClick={() => dispatch(deleteEmployee(employee_id))}
            >
              Delete
            </button>
          </div>
        </div>
      </>
    );
  }
};
export default Modal;
