import axios from "axios";
import { BASE_URL } from "./helper.provider";

export const SigninUserProvider = (email, password) => {
  // console.log({ email, password });
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + "/auth/api-token-auth/", {
        email,
        password,
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
