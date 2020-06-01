import * as actionTypes from "./actionTypes.js";

export const setDataCart = (dataCart) => {
  return {
    type: actionTypes.SET_DATA_CART,
    dataCart,
  };
};

export const initCart = (token) => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.olshop.webapps.my.id/v1/cart", requestOptions)
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        const data = json.data;
        console.log(json);
        dispatch(setDataCart(data));
      })
      .catch((error) => console.log("error", error));
  };
};

export const incDecCart = (token, bookId, value) => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Bearer " + token);

    const urlencoded = new URLSearchParams();
    urlencoded.append("book_id", bookId);
    urlencoded.append("quantity", value);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://api.olshop.webapps.my.id/v1/cart/add", requestOptions)
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        console.log(json);
      })
      .catch((error) => console.log("error", error));
  };
};
