import {
  SET_AUTH_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../types";

const initialState = {
  isAuth: false,
  auth_loading: false,
  auth_error: "",
  token: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_LOADING:
      return {
        ...state,
        auth_loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        auth_loading: false,
        auth_error: "",
        token: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        auth_loading: false,
        auth_error: action.payload,
        token: "",
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
        auth_loading: false,
        auth_error: "",
        token: "",
      };
    default:
      return state;
  }
};
