import { updateEmployee } from "../actions/employeeActions";
import {
  GET_ALL_EMPLOYEES_SUCCESS,
  GET_ALL_EMPLOYEES_FAILURE,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAILURE,
} from "../types";

const initialState = {
  employeeList: [],
  get_all_employee_loading: false,
  get_employee_loading: false,
  add_employee_loading: false,
  update_employee_loading: false,
  delete_employee_loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employeeList: action.payload,
        error_message: "",
      };
    case GET_ALL_EMPLOYEES_FAILURE:
      return {
        ...state,
        employeeList: [],
        error_message: "Error fetching data.",
      };
    case GET_EMPLOYEE_SUCCESS:
      return {};
    case GET_EMPLOYEE_FAILURE:
      return {};
    case ADD_EMPLOYEE_SUCCESS:
      const unsorted = [...state.employeeList, action.payload];
      return {
        ...state,
        employeeList: unsorted.sort((a, b) => a.name.localeCompare(b.name)),
      };
    case ADD_EMPLOYEE_FAILURE:
      return {};
    case UPDATE_EMPLOYEE_SUCCESS:
      let updatedEmployeeList = [];
      state.employeeList.map((employee) => {
        if (employee.employee_id !== action.payload.employee_id) {
          updatedEmployeeList.push(employee);
        } else {
          updatedEmployeeList.push(action.payload);
        }
      });

      return {
        ...state,
        employeeList: updatedEmployeeList,
      };
    case UPDATE_EMPLOYEE_FAILURE:
      return {};
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employeeList: state.employeeList.filter(
          (employee) => employee.employee_id !== action.payload
        ),
      };
    case DELETE_EMPLOYEE_FAILURE:
      return {};
    default:
      return state;
  }
};
