import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  books: [],
  detailBook: {},
  categories: "",
  search: false,
  categoryBook: [],
  dataPage: {},
};

const setBooks = (state, action) => {
  return updateObject(state, { books: action.books });
};

const setDataPage = (state, action) => {
  return updateObject(state, { dataPage: action.dataPage });
};

const setDetailBook = (state, action) => {
  return updateObject(state, {
    detailBook: action.detailBook,
    categories: action.categories,
  });
};

const setCategoryBook = (state, action) => {
  return updateObject(state, { categoryBook: action.categoryBook });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BOOKS:
      return setBooks(state, action);
    case actionTypes.SET_DATA_PAGE:
      return setDataPage(state, action);
    case actionTypes.SEARCH_START:
      return updateObject(state, { search: true });
    case actionTypes.SEARCH_END:
      return updateObject(state, { search: false });
    case actionTypes.SET_DETAIL_BOOK:
      return setDetailBook(state, action);
    case actionTypes.INIT_DETAIL_BOOK_START:
      return updateObject(state, { detailBook: {} });
    case actionTypes.SET_CATEGORY_BOOK:
      return setCategoryBook(state, action);
    default:
      return state;
  }
};

export default reducer;
