import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  modalOpen: true,
  isRegister: false,
  dataAuth: {},
};

const setAuthData = (state, action) => {
  return updateObject(state, { dataAuth: action.dataAuth });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MODAL_TOGGLE:
      return updateObject(state, { modalOpen: !state.modalOpen });
    case actionTypes.IS_REGISTER:
      return updateObject(state, { isRegister: !state.isRegister });
    case actionTypes.SET_AUTH_DATA:
      return setAuthData(state, action);
    default:
      return state;
  }
};

export default reducer;
