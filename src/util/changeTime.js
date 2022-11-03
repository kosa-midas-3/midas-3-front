const zero = (value) => {
  return value.toString().length < 2 ? "0" + value : value;
};

export const minus1Second = (setTime) => {
  setTime((prev) => {
    const k = prev.split(":");
    if (Number(k[2]) > 0) {
      return k[0] + ":" + k[1] + ":" + zero(Number(k[2]) - 1);
    } else if (Number(k[2]) === 0 && Number(k[1]) > 0) {
      return k[0] + ":" + zero(Number(k[1]) - 1) + ":59";
    } else if (Number(k[1]) === 0 && Number(k[0]) > 0) {
      return zero(Number(k[0]) - 1) + ":59:59";
    }
  });
};
