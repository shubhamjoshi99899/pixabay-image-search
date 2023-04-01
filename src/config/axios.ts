import axios from "axios";

// const API_URL = process.env.API_URL;
export const get = async (params?: any, options?: any) => {
  return axios.get(`https://pixabay.com/api`, {
    ...options,
    params,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};
