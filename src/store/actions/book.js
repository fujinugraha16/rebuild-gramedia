import * as actionTypes from "./actionTypes";

export const setBooks = (books) => {
  return {
    type: actionTypes.SET_BOOKS,
    books,
  };
};

export const initBooks = () => {
  return (dispatch) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.olshop.webapps.my.id/v1/book?order_by=created_at&order=asc",
      requestOptions
    )
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        const data = json.data.data;
        dispatch(setBooks(data));
      })
      .catch((error) => console.log("error", error));
  };
};

export const searchStart = () => {
  return {
    type: actionTypes.SEARCH_START,
  };
};

export const searchEnd = () => {
  return {
    type: actionTypes.SEARCH_END,
  };
};

export const searchBooks = (keyword) => {
  return (dispatch) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    if (keyword.length > 0) {
      dispatch(searchStart());
    } else {
      dispatch(searchEnd());
    }

    fetch(
      "http://api.olshop.webapps.my.id/v1/book?keyword=" + keyword,
      requestOptions
    )
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        const data = json.data.data;
        dispatch(setBooks(data));
      })
      .catch((error) => console.log("error", error));
  };
};

export const setDetailBook = (detailBook) => {
  return {
    type: actionTypes.SET_DETAIL_BOOK,
    detailBook,
  };
};

export const initDetailBookStart = () => {
  return {
    type: actionTypes.INIT_DETAIL_BOOK_START,
  };
};

export const initDetailBook = (slug) => {
  return (dispatch) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://api.olshop.webapps.my.id/v1/book/" + slug, requestOptions)
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        const data = json.data;
        dispatch(setDetailBook(data));
      })
      .catch((error) => console.log("error", error));
  };
};
