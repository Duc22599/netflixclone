import axios from "axios";

export const getToken = () => {
  const token = sessionStorage.getItem("userToken");
  const bearer = `Bearer ${token}`;

  return bearer;
};

export const httpAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 10000,
  //   headers: {
  //     "X-Custom-Header": "foobar",
  //     Authorization: getToken(),
  //   },
});

export const instance = axios.create({
  baseURL: "https://api.realworld.io/api/",
  timeout: 10000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: getToken(),
  },
});

httpAxios.interceptors.request.use((config) => {
  config.headers.Authorization = getToken();

  return config;
});
