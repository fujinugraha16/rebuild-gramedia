import * as actionTypes from "./actionTypes";

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
  return {
    typr: actionTypes.INIT_AUTH,
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
        const json = JSON.parse(res);
        const data = json.data;
        dispatch(setAuthData(data));
      })
      .catch((error) => console.log("error", error));
  };
};
