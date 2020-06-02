import * as actionTypes from "./actionTypes";
import * as actionCreators from "./index";

export const modalToggle = () => {
  return {
    type: actionTypes.MODAL_TOGGLE,
  };
};

export const isRegister = () => {
  return {
    type: actionTypes.IS_REGISTER,
  };
};

export const setAuthData = (dataAuth) => {
  return {
    type: actionTypes.SET_AUTH_DATA,
    dataAuth,
  };
};

export const initAuth = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (token) {
      const dataAuth = {
        success: true,
        data: {
          token,
          name,
        },
        message: "User login successfully.",
      };
      dispatch(setAuthData(dataAuth));
      dispatch(setToken(token));
      dispatch(actionCreators.initCart(token));
    } else {
      dispatch(setAuthData({}));
      dispatch(setToken(null));
    }
  };
};

export const setToken = (token) => {
  return {
    type: actionTypes.SET_TOKEN,
    token,
  };
};

export const authProcess = (authType, formData) => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();

    let url = "";

    if (authType === "LOGIN") {
      urlencoded.append("username", formData.username);
      urlencoded.append("password", formData.password);

      url = "https://api.olshop.webapps.my.id/v1/login";
    }

    if (authType === "REGISTER") {
      urlencoded.append("username", formData.username);
      urlencoded.append("password", formData.password);
      urlencoded.append("name", formData.name);
      urlencoded.append("email", formData.email);
      urlencoded.append("confirm_password", formData.confirm_password);

      url = "https://api.olshop.webapps.my.id/v1/register";
    }

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((res) => res.text())
      .then((res) => {
        const data = JSON.parse(res);
        dispatch(setAuthData(data));
        if (data.success) {
          dispatch(setToken(data.data.token));
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("name", data.data.name);
          dispatch(actionCreators.initCart(data.data.token));
        }
        dispatch(modalLogout(false));
      })
      .catch((error) => console.log("error", error));
  };
};

export const cleanDataAuth = () => {
  return {
    type: actionTypes.CLEAN_DATA_AUTH,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  return (dispatch) => {
    dispatch(cleanDataAuth());
    dispatch(actionCreators.cleanDataCart());
  };
};

export const modalLogout = (isLogout) => {
  return {
    type: actionTypes.MODAL_LOGOUT,
    isLogout,
  };
};
