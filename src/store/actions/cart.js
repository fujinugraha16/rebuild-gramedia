import * as actionTypes from "./actionTypes.js";

export const setDataCart = (dataCart) => {
  return {
    type: actionTypes.SET_DATA_CART,
    dataCart,
  };
};

export const setSubTotal = (subtotal) => {
  return {
    type: actionTypes.SET_SUB_TOTAL,
    subtotal,
  };
};

export const setAmountCart = (amountCart) => {
  return {
    type: actionTypes.SET_AMOUNT_CART,
    amountCart,
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
        dispatch(setAmountCart(data.length));
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
        dispatch(initCart(token));
      })
      .catch((error) => console.log("error", error));
  };
};

export const deleteItemCart = (token, cartId) => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const urlencoded = new URLSearchParams();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://api.olshop.webapps.my.id/v1/cart/" + cartId + "/delete",
      requestOptions
    )
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        if (json.success) {
          dispatch(initCart(token));
        }
        console.log(json);
      })
      .catch((error) => console.log("error", error));
  };
};

export const cleanDataCart = () => {
  return {
    type: actionTypes.CLEAN_DATA_CART,
  };
};
