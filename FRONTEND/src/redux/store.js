import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import modalReducer from "./reducers/modalReducer";
import loaderReducer from "./reducers/loaderReducer";
import authReducer from "./reducers/authReducer";
import employeeReducer from "./reducers/employeeReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  loader: loaderReducer,
  auth: authReducer,
  employee: employeeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
