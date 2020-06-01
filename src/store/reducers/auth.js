import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  modalOpen: false,
  isRegister: false,
  dataAuth: {},
  token: null,
  isLogout: false,
};

const setAuthData = (state, action) => {
  return updateObject(state, { dataAuth: action.dataAuth });
};

const setToken = (state, action) => {
  return updateObject(state, { token: action.token });
};

const modalLogout = (state, action) => {
  return updateObject(state, { isLogout: action.isLogout });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MODAL_TOGGLE:
      return updateObject(state, { modalOpen: !state.modalOpen });
    case actionTypes.IS_REGISTER:
      return updateObject(state, { isRegister: !state.isRegister });
    case actionTypes.SET_AUTH_DATA:
      return setAuthData(state, action);
    case actionTypes.SET_TOKEN:
      return setToken(state, action);
    case actionTypes.CLEAN_DATA_AUTH:
      return updateObject(state, {
        dataAuth: {},
        token: null,
        modalOpen: !state.modalOpen,
      });
    case actionTypes.LOGOUT:
      return updateObject(state, {
        dataAuth: {},
        token: null,
        isLogout: false,
      });
    case actionTypes.MODAL_LOGOUT:
      return modalLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
