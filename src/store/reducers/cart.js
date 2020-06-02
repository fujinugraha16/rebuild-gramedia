import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility.js";

const initialState = {
  dataCart: [],
  subtotal: 0,
  amountCart: 0,
};

const setDataCart = (state, action) => {
  return updateObject(state, { dataCart: action.dataCart });
};

const setSubTotal = (state, action) => {
  return updateObject(state, { subTotal: action.subtotal });
};

const setAmountCart = (state, action) => {
  return updateObject(state, { amountCart: action.amountCart });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA_CART:
      return setDataCart(state, action);
    case actionTypes.CLEAN_DATA_CART:
      return updateObject(state, { dataCart: [] });
    case actionTypes.SET_SUB_TOTAL:
      return setSubTotal(state, action);
    case actionTypes.SET_AMOUNT_CART:
      return setAmountCart(state, action);
    default:
      return state;
  }
};

export default reducer;
