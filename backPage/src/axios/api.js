/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-25 10:34:09
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-04-03 14:06:04
 * @RevisionHistory:
 */
import http from "@/axios/http";

const get = (url, params) => {
  return http
    .get(url, { params })
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
  console.log(data, 1212);
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

const uploadFile = (url, file) => {
  const formData = new FormData();
  formData.append("file", file);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return http
    .post(url, formData, config)
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
export const getArticle = (data) => get("/api/getArticle", data);
export const uploadImg = (data) => uploadFile("/api/uploadImg", data);
export const deleteArticle = (data) => post("/api/deleteArticle", data);
