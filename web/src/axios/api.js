/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-25 10:34:09
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-26 12:34:11
 * @RevisionHistory: 
 */
import http from "@/axios/http";

const get = (url, data) => {
  return http
    .get(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (process.env.NODE_ENV !== "production") {
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
      if (process.env.NODE_ENV !== "production") {
        console.error(error);
      }
    });
};

export const login = (data) => post("/login", data);
export const register = (data) => post("/register", data);
export const subArticle = (data) => post("/api/addArticle", data);
