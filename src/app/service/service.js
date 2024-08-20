import axios from "./customize_axios";

const login = (email, password) => {
  return axios.post(`/api/login`, {
    email: email,
    password: password,
    //   "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
  });
};

const register = async (email, password) => {
  return await axios.post("/api/register", { email, password });
  // "email": "eve.holt@reqres.in",
  //   "password": "pistol"
};

const viewDetail = (id) => {
  return axios.get(`/api/users/${id}`);
};
export { login, register, viewDetail };
