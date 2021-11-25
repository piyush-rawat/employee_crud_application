import axios from "axios";
import filesaver from "file-saver";
import {
  GET_ALL_EMPLOYEES_FAILURE,
  GET_ALL_EMPLOYEES_SUCCESS,
  LOGOUT,
  SET_FULL_SCREEN_LOADER_TRUE,
  SET_FULL_SCREEN_LOADER_FALSE,
  SET_SHOW_MODAL_FALSE,
  DELETE_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
} from "../types";

export const getAllEmployees = () => async (dispatch) => {
  dispatch({ type: SET_FULL_SCREEN_LOADER_TRUE });

  try {
    const response = await axios.get("/api/employees");

    if (response.status === 200) {
      dispatch({
        type: GET_ALL_EMPLOYEES_SUCCESS,
        payload: response.data.employeeList,
      });
      dispatch({ type: SET_FULL_SCREEN_LOADER_FALSE });
    }
  } catch (error) {
    console.log(error);

    if (error.response.status === 401) {
      dispatch({ type: LOGOUT });
      dispatch({ type: SET_FULL_SCREEN_LOADER_FALSE });
    }

    if (error.response.status === 500) {
      dispatch({
        type: GET_ALL_EMPLOYEES_FAILURE,
        payload: error.response.data.error_msg,
      });
      dispatch({ type: SET_FULL_SCREEN_LOADER_FALSE });
    }
    dispatch({ type: SET_FULL_SCREEN_LOADER_FALSE });
  }
};

export const getEmployee = async (employee_id) => {
  try {
    const { data } = await axios.get(`/api/employees/${employee_id}`);
  } catch (error) {
    console.log(error);
  }
};

export const addEmployee = (formData) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/employees`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      dispatch({
        type: ADD_EMPLOYEE_SUCCESS,
        payload: response.data.newEmployee,
      });
      dispatch({ type: SET_SHOW_MODAL_FALSE });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_SHOW_MODAL_FALSE });
  }
};

export const updateEmployee = (employee_id, formData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `/api/employees/${employee_id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      dispatch({
        type: UPDATE_EMPLOYEE_SUCCESS,
        payload: response.data.updated_employee,
      });
      dispatch({ type: SET_SHOW_MODAL_FALSE });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: UPDATE_EMPLOYEE_FAILURE });
    dispatch({ type: SET_SHOW_MODAL_FALSE });
  }
};

export const deleteEmployee = (employee_id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/employees/${employee_id}`);

    if (response.status === 200) {
      dispatch({
        type: DELETE_EMPLOYEE_SUCCESS,
        payload: response.data.deleted_employee_id,
      });

      dispatch({ type: SET_SHOW_MODAL_FALSE });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_SHOW_MODAL_FALSE });
  }
};

export const downloadEmployeeList = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/employees/download", {
      responseType: "blob",
    });

    if (response.status === 200) {
      filesaver(response.data, "Employee List.xlsx");
    }
  } catch (error) {
    console.log(error);
  }
};
