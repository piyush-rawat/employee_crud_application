import {
  SET_FULL_SCREEN_LOADER_TRUE,
  SET_FULL_SCREEN_LOADER_FALSE,
} from "../types";

const initialState = {
  isFullScreenLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FULL_SCREEN_LOADER_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    case SET_FULL_SCREEN_LOADER_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
