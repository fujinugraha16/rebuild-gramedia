import * as actionTypes from "./actionTypes";

export const setBooks = (books) => {
  return {
    type: actionTypes.SET_BOOKS,
    books,
  };
};

export const setDataPage = (dataPage) => {
  return {
    type: actionTypes.SET_DATA_PAGE,
    dataPage,
  };
};

export const initBooks = (page = 0) => {
  return (dispatch) => {
    dispatch(setBooks({}));
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.olshop.webapps.my.id/v1/book?page=" + page,
      requestOptions
    )
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        const data = json.data.data;
        const dataPage = {
          currentPage: json.data.current_page,
          fromPage: json.data.from,
          nextPage: json.data.current_page + 1,
          prevPage: json.data.current_page - 1,
          lastPage: json.data.last_page,
        };
        dispatch(setBooks(data));
        dispatch(setDataPage(dataPage));
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
      "https://api.olshop.webapps.my.id/v1/book?keyword=" + keyword,
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

export const setDetailBook = (detailBook, categories) => {
  return {
    type: actionTypes.SET_DETAIL_BOOK,
    detailBook,
    categories,
  };
};

export const initDetailBookStart = () => {
  return {
    type: actionTypes.INIT_DETAIL_BOOK_START,
  };
};

export const setCategoryBook = (categoryBook) => {
  return {
    type: actionTypes.SET_CATEGORY_BOOK,
    categoryBook,
  };
};

export const initCategoryBook = () => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.olshop.webapps.my.id/v1/category", requestOptions)
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        const data = json.data;
        dispatch(setCategoryBook(data.data));
      })
      .catch((error) => console.log("error", error));
  };
};

export const initDetailBook = (slug) => {
  return (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.olshop.webapps.my.id/v1/book/" + slug, requestOptions)
      .then((res) => res.text())
      .then(async (res) => {
        const json = JSON.parse(res);
        const data = json.data;
        const categories = [];
        data.categories.map((item) => categories.push(item.name));
        dispatch(setDetailBook(data, categories.join(", ")));
      })
      .catch((error) => console.log("error", error));
  };
};

export const filterCategoryBook = (slug) => {
  return (dispatch) => {
    dispatch(setBooks({}));
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.olshop.webapps.my.id/v1/book/category/" + slug,
      requestOptions
    )
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        const data = json.data.data;
        const dataPage = {
          currentPage: json.data.current_page,
          fromPage: json.data.from,
          nextPage: json.data.current_page + 1,
          prevPage: json.data.current_page - 1,
          lastPage: json.data.last_page,
        };
        dispatch(setBooks(data));
        dispatch(setDataPage(dataPage));
      })
      .catch((error) => console.log("error", error));
  };
};
