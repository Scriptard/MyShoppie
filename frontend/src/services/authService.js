import axios from "axios";

export const signin = (username, password) => {
  axios
    .post(`http://localhost:4040/auth/login`, {
      username,
      password,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const signup = (username, password) => {
  console.log(username);
  axios
    .post(`http://localhost:4040/auth/register`, {
      username,
      password,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
