import * as actionTypes from "./actionTypes";
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
        console.log(province);
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
        console.log(city);
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
        console.log(district);
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
        console.log(courier);
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
        console.log(address);
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
        console.log(shipping);
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

export const placeOrder = (token, rawData) => {
  return (dispatch) => {
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
        dispatch(initOrder(token));
        console.log(JSON.parse(res));
      })
      .catch((error) => console.log("error", error));
  };
};

export const initOrder = (token) => {
  return (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.olshop.webapps.my.id/v1/order/list_order",
      requestOptions
    )
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        const data = json.data;
        dispatch(setOrder(data));
        console.log(json);
      })
      .catch((error) => console.log("error", error));
  };
};
