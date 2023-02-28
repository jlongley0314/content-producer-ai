import axios from "axios";

// TODO: change this to the actual url when the login api gets hosted
const BASE_URL = "http://localhost:4000";

export function signUpUser(params) {
  const url = `${BASE_URL}/users/register`;
  return axios.post(url, params);
}

export function signInUser(params) {
  const url = `${BASE_URL}/users/authenticate`;
  return axios.post(url, params);
}
