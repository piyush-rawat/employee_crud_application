import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllEmployees,
  downloadEmployeeList,
} from "../redux/actions/employeeActions";
import {
  showModalAction,
  hideModalAction,
  setModalUpdateEmployeeData,
  setModalEmployeeData,
} from "../redux/actions/modalActions";

import { BiDetail, BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiOutlineDocumentDownload } from "react-icons/hi";

import FullScreenLoader from "../components/FullScreenLoader";
import Modal from "../components/Modal";

const AdminDashboardPage = () => {
  const dispatch = useDispatch();

  const { showModal } = useSelector((state) => state.modal);
  const { isFullScreenLoading } = useSelector((state) => state.loader);
  const { employeeList } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);

  const handleClickAddEmployee = () => {
    // dispatch({ type: "SET_SHOW_MODAL_TRUE", payload: "add" });
    dispatch(showModalAction("add"));
  };

  const handleDownload = () => {
    dispatch(downloadEmployeeList());
  };

  return (
    <>
      {isFullScreenLoading && <FullScreenLoader />}

      {showModal && <Modal />}

      <div className="container">
        <div className="dashboard-options">
          {/* <button className="btn-downloa">Sort By</button> */}
          <div>
            <select className="btn-sortby">
              <option>Sort by</option>
              <option>Name</option>
              <option>Date of Joining</option>
            </select>
          </div>

          <div className="div-search">
            <button className="btn-add" onClick={handleClickAddEmployee}>
              Add Employee
            </button>
            <input
              className="input-search"
              type="text"
              placeholder="Search by name or designation."
            />
            <button className="btn-search">Search</button>
          </div>

          <div>
            <button className="btn-download" onClick={handleDownload}>
              Download <HiOutlineDocumentDownload />
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Date Of Joining</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map(
              ({
                employee_id,
                name,
                email,
                designation,
                dateOfJoining,
                salary,
              }) => (
                <tr>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{designation}</td>
                  <td>{dateOfJoining}</td>
                  <td>{salary}</td>
                  <td>
                    <BiDetail
                      onClick={() => {
                        dispatch(setModalEmployeeData(employee_id));
                        dispatch(showModalAction("detail"));
                      }}
                    />
                    <BiEdit
                      onClick={() => {
                        dispatch(setModalEmployeeData(employee_id));
                        dispatch(showModalAction("update"));
                      }}
                    />
                    <RiDeleteBin5Line
                      onClick={() => {
                        dispatch(showModalAction("delete", employee_id));
                      }}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboardPage;
