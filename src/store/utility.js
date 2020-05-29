export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const rupiahFormat = (num = 0) => {
  let number_string = num.toString(),
    residual = number_string.length % 3,
    rupiah = number_string.substr(0, residual),
    thousand = number_string.substr(residual).match(/\d{3}/g);

  if (thousand) {
    let separator = residual ? "." : "";
    rupiah += separator + thousand.join(".");
  }

  return rupiah;
};
