import http from "@/axios/http";

const get = (url, data) => {
  return http
    .get(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }
      throw error;
    });
};

const post = (url, data) => {
  return http
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }
    });
};

export const login = (data) => post("/login", data);
export const register = (data) => post("/register", data);
