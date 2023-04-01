import { get } from "../config/axios";
export const getSearchedImages = async (params: any) => {
  return new Promise((resolve, reject) => {
    get(params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
