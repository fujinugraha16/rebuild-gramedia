import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  province: [],
  dataProvince: [],
  city: [],
  dataCity: [],
  district: [],
  dataDistrict: [],
  courier: [],
  dataCourier: [],
  address: [],
  dataAddress: [],
  shipping: [],
  shippingMethod: null,
  dataOrder: [],
};

const setProvince = (state, action) => {
  return updateObject(state, {
    province: action.province,
    dataProvince: action.dataProvince,
  });
};

const setCity = (state, action) => {
  return updateObject(state, { city: action.city, dataCity: action.dataCity });
};

const setDistrict = (state, action) => {
  return updateObject(state, {
    district: action.district,
    dataDistrict: action.dataDistrict,
  });
};

const setCourier = (state, action) => {
  return updateObject(state, {
    courier: action.courier,
    dataCourier: action.dataCourier,
  });
};

const setListAddress = (state, action) => {
  return updateObject(state, {
    address: action.address,
    dataAddress: action.dataAddress,
  });
};

const setShippingMethod = (state, action) => {
  return updateObject(state, {
    shipping: action.shipping,
    shippingMethod: action.shippingMethod,
  });
};

const setOrder = (state, action) => {
  return updateObject(state, {
    dataOrder: action.dataOrder,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROVINCE:
      return setProvince(state, action);
    case actionTypes.SET_CITY:
      return setCity(state, action);
    case actionTypes.SET_DISTRICT:
      return setDistrict(state, action);
    case actionTypes.SET_COURIER:
      return setCourier(state, action);
    case actionTypes.SET_LIST_ADDRESS:
      return setListAddress(state, action);
    case actionTypes.SET_SHIPPING_METHOD:
      return setShippingMethod(state, action);
    case actionTypes.SET_ORDER:
      return setOrder(state, action);
    default:
      return state;
  }
};

export default reducer;
