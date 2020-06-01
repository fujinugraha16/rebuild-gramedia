import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility.js";

const initialState = {
  dataCart: [],
};

const setDataCart = (state, action) => {
  return updateObject(state, { dataCart: action.dataCart });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA_CART:
      return setDataCart(state, action);
    default:
      return state;
  }
};

export default reducer;
