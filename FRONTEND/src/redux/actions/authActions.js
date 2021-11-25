import axios from "axios";

import {
  SET_AUTH_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../types";

export const login = (formData) => async (dispatch) => {
  dispatch({ type: SET_AUTH_LOADING });

  try {
    const response = await axios.post("/api/auth/login", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error_msg });
    }
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
