import * as actionTypes from "./actionTypes";
import * as actionCreators from "./index";
import { rupiahFormat } from "../utility";

export const setProvince = (province, dataProvince) => {
  return {
    type: actionTypes.SET_PROVINCE,
    province,
    dataProvince,
  };
};

export const initProvince = (token) => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.olshop.webapps.my.id/v1/region/province", requestOptions)
      .then((res) => res.text())
      .then(async (res) => {
        const json = JSON.parse(res);
        const dataProvince = json.data;
        const province = [];
        await dataProvince.map((item) =>
          province.push({ value: item.province_id, label: item.province })
        );
        dispatch(setProvince(province, dataProvince));
      })
      .catch((error) => console.log("error", error));
  };
};

export const setCity = (city, dataCity) => {
  return {
    type: actionTypes.SET_CITY,
    city,
    dataCity,
  };
};

export const initCity = (token, provinceId) => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.olshop.webapps.my.id/v1/region/city/" + provinceId,
      requestOptions
    )
      .then((res) => res.text())
      .then(async (res) => {
        const json = JSON.parse(res);
        const dataCity = json.data;
        const city = [];
        await dataCity.map((item) =>
          city.push({
            value: item.city_id,
            label: item.type + " " + item.city_name,
          })
        );
        dispatch(setCity(city, dataCity));
      })
      .catch((error) => console.log("error", error));
  };
};

export const setDistrict = (district, dataDistrict) => {
  return {
    type: actionTypes.SET_DISTRICT,
    district,
    dataDistrict,
  };
};

export const initDistrict = (token, cityId) => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.olshop.webapps.my.id/v1/region/district/" + cityId,
      requestOptions
    )
      .then((res) => res.text())
      .then(async (res) => {
        const json = JSON.parse(res);
        const dataDistrict = json.data;
        const district = [];
        await dataDistrict.map((item) =>
          district.push({
            value: item.subdistrict_id,
            label: item.subdistrict_name,
          })
        );
        dispatch(setDistrict(district, dataDistrict));
      })
      .catch((error) => console.log("error", error));
  };
};

export const setCourier = (courier, dataCourier) => {
  return {
    type: actionTypes.SET_COURIER,
    courier,
    dataCourier,
  };
};

export const initCourier = (token) => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.olshop.webapps.my.id/v1/courier/list", requestOptions)
      .then((res) => res.text())
      .then(async (res) => {
        const json = JSON.parse(res);
        const dataCourier = json.data;
        const courier = [];
        await dataCourier.map((item) =>
          courier.push({ value: item.code, label: item.name })
        );
        dispatch(setCourier(courier, dataCourier));
      })
      .catch((error) => console.log("error", error));
  };
};

export const setListAddress = (address, dataAddress) => {
  return {
    type: actionTypes.SET_LIST_ADDRESS,
    address,
    dataAddress,
  };
};

export const initListAddress = (token) => {
  return (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.olshop.webapps.my.id/v1/address", requestOptions)
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        const dataAddress = json.data.data;
        const address = dataAddress.filter((item) => item.is_primary === 1);
        dispatch(setListAddress(address, dataAddress));
      })
      .catch((error) => console.log("error", error));
  };
};

export const setShippingMethod = (shipping, shippingMethod) => {
  return {
    type: actionTypes.SET_SHIPPING_METHOD,
    shipping,
    shippingMethod,
  };
};

export const initShippingMethod = (token, dataShipping) => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Bearer " + token);

    const urlencoded = new URLSearchParams();
    urlencoded.append("origin", "2095");
    urlencoded.append("destination", dataShipping.destination);
    urlencoded.append("weight", dataShipping.weight);
    urlencoded.append("courier", dataShipping.courier);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://api.olshop.webapps.my.id/v1/courier/check-ongkir",
      requestOptions
    )
      .then((res) => res.text())
      .then(async (res) => {
        const json = JSON.parse(res);
        const data = json.data;
        const shipping = [];
        await data[0].costs.map((item) =>
          shipping.push({
            value: item.cost[0].value,
            label:
              dataShipping.label +
              "-" +
              item.service +
              " " +
              item.cost[0].etd +
              " Hari (Rp. " +
              rupiahFormat(item.cost[0].value) +
              ")",
          })
        );
        dispatch(setShippingMethod(shipping, data[0]));
      })
      .catch((error) => console.log("error", error));
  };
};

export const setOrder = (dataOrder) => {
  return {
    type: actionTypes.SET_ORDER,
    dataOrder,
  };
};

export const setOrderProcess = (orderProcess) => {
  return {
    type: actionTypes.SET_ORDER_PROCESS,
    orderProcess,
  };
};

export const placeOrder = (token, rawData) => {
  return (dispatch) => {
    dispatch(setOrderProcess({}));
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify(rawData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://api.olshop.webapps.my.id/v1/order/place_order",
      requestOptions
    )
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        dispatch(initOrder(token));
        dispatch(setOrderProcess(json));
        dispatch(actionCreators.deleteAllCart(token));
      })
      .catch((error) => console.log("error", error));
  };
};

export const setMyOrderProcess = (myOrderProcess) => {
  return {
    type: actionTypes.SET_MY_ORDER_PROCESS,
    myOrderProcess,
  };
};

export const initOrder = (token) => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.olshop.webapps.my.id/v1/order/list_order?order_by=created_at",
      requestOptions
    )
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        const data = json.data;
        dispatch(setOrder(data.data));
      })
      .catch((error) => console.log("error", error));
  };
};

export const cancelOrder = (token, orderId) => {
  return (dispatch) => {
    dispatch(setMyOrderProcess({}));
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.olshop.webapps.my.id/v1/order/" + orderId + "/cancel",
      requestOptions
    )
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        dispatch(setMyOrderProcess(json));
        dispatch(initOrder(token));
      })
      .catch((error) => console.log("error", error));
  };
};

export const setDetailOrder = (dataDetailOrder) => {
  return {
    type: actionTypes.SET_DETAIL_ORDER,
    dataDetailOrder,
  };
};

export const detailOrder = (token, orderId) => {
  return (dispatch) => {
    dispatch(setDetailOrder(null));
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.olshop.webapps.my.id/v1/order/" + orderId + "/detail",
      requestOptions
    )
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        const data = json.data;
        dispatch(setDetailOrder(data));
      })
      .catch((error) => console.log("error", error));
  };
};

export const clearDetailOrder = () => {
  return (dispatch) => {
    dispatch(setDetailOrder(null));
  };
};
