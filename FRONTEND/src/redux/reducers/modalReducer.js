import {
  SET_SHOW_MODAL_TRUE,
  SET_SHOW_MODAL_FALSE,
  SET_MODAL_UPDATE_EMPLOYEE_DATA,
  CLEAR_MODAL_UPDATE_EMPLOYEE_DATA,
  SET_MODAL_EMPLOYEE_DATA,
  CLEAR_MODAL_EMPLOYEE_DATA,
} from "../types";

const initialState = {
  showModal: false,
  modalType: "",
  employee_data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_MODAL_TRUE:
      return {
        ...state,
        showModal: true,
        modalType: action.payload,
        employee_id: action.employee_id,
      };
    case SET_SHOW_MODAL_FALSE:
      return {
        ...state,
        showModal: false,
        modalType: "",
      };
    case SET_MODAL_UPDATE_EMPLOYEE_DATA:
      return {
        ...state,
        employee_data: action.payload,
      };
    case CLEAR_MODAL_UPDATE_EMPLOYEE_DATA:
      return {
        ...state,
        employee_data: {},
      };
    case SET_MODAL_EMPLOYEE_DATA:
      return {
        ...state,
        employee_data: action.payload,
      };
    case CLEAR_MODAL_EMPLOYEE_DATA:
      return {
        ...state,
        employee_data: {},
      };
    default:
      return state;
  }
};
