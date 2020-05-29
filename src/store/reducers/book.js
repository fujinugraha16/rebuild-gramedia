import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  books: [],
  detailBook: {},
  search: false,
};

const setBooks = (state, action) => {
  return updateObject(state, { books: action.books });
};

const setDetailBook = (state, action) => {
  return updateObject(state, { detailBook: action.detailBook });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BOOKS:
      return setBooks(state, action);
    case actionTypes.SEARCH_START:
      return updateObject(state, { search: true });
    case actionTypes.SEARCH_END:
      return updateObject(state, { search: false });
    case actionTypes.SET_DETAIL_BOOK:
      return setDetailBook(state, action);
    case actionTypes.INIT_DETAIL_BOOK_START:
      return updateObject(state, { detailBook: {} });
    default:
      return state;
  }
};

export default reducer;
