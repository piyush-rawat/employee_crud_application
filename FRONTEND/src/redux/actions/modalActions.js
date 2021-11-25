import axios from "axios";

import {
  SET_SHOW_MODAL_TRUE,
  SET_SHOW_MODAL_FALSE,
  SET_MODAL_UPDATE_EMPLOYEE_DATA,
  CLEAR_MODAL_UPDATE_EMPLOYEE_DATA,
  SET_MODAL_EMPLOYEE_DATA,
  SET_FULL_SCREEN_LOADER_TRUE,
  SET_FULL_SCREEN_LOADER_FALSE,
  CLEAR_MODAL_EMPLOYEE_DATA,
} from "../types";

export const showModalAction = (modalType, employee_id) => async (dispatch) => {
  dispatch({ type: SET_SHOW_MODAL_TRUE, payload: modalType, employee_id });
};

export const hideModalAction = () => async (dispatch) => {
  dispatch({ type: CLEAR_MODAL_EMPLOYEE_DATA });
  dispatch({ type: SET_SHOW_MODAL_FALSE });
};

export const setModalEmployeeData = (employee_id) => async (dispatch) => {
  dispatch({ type: SET_FULL_SCREEN_LOADER_TRUE });
  try {
    const response = await axios.get(`/api/employees/${employee_id}`);

    if (response.status === 200) {
      dispatch({
        type: SET_MODAL_EMPLOYEE_DATA,
        payload: response.data.employee,
      });
      dispatch({ type: SET_FULL_SCREEN_LOADER_FALSE });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_FULL_SCREEN_LOADER_FALSE });
  }
};

export const setModalUpdateEmployeeData = (employee_id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/employees/${employee_id}`);

    if (response.status === 200) {
      dispatch({
        type: SET_MODAL_UPDATE_EMPLOYEE_DATA,
        payload: response.data.employee,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const clearModalUpdateEmployeeData = () => (dispatch) => {
  dispatch({ type: CLEAR_MODAL_UPDATE_EMPLOYEE_DATA });
};
