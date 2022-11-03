import CustomAxios from "../../util/CustomAxios";
import { getUserName } from "../../util/getUsername";

export const postAuth = async () => {
  const { data } = await CustomAxios.post(`/auth?name=${getUserName()}`);
  console.log(data);
  return data;
};

export const postAttend = async () => {
  const { data } = await CustomAxios.post(`/attendance?name=${getUserName()}`);
  console.log(data);
  return data;
};

export const deleteAttend = async () => {
  const { data } = await CustomAxios.delete(
    `/attendance?name=${getUserName()}`
  );
  console.log(data);
  return data;
};

export const homeApply = async () => {
  const { data } = await CustomAxios.post(`/home​/apply?name=${getUserName()}`);
  console.log(data);
};
