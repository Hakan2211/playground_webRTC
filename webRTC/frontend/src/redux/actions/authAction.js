import { Navigate } from "react-router-dom";
import * as api from "../../api/api";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails) => dispatch(login(userDetails)),
    register: (userDetails) => dispatch(register(userDetails)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails) => {
  return async (dispatch) => {
    const response = api.login(userDetails);

    if (response.error) {
    } else {
      const { userDetails } = response.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      <Navigate to="/dashboard" />;
    }
  };
};
const register = (userDetails) => {
  return async (dispatch) => {
    const response = api.register(userDetails);

    if (response.error) {
    } else {
      const { userDetails } = response.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      <Navigate to="/dashboard" />;
    }
  };
};
