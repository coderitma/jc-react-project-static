import axios from "axios";
import { BASE_URL } from "./helper.provider";

export const GetPostProvider = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + "/photos")
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
