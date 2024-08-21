import axios from "axios";

const baseUrl = "http://localhost:3003/api/login";

let token = null;
const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
  sessionStorage.setItem("token", token);
};

const getToken = () => {
  if (!token) {
    token = sessionStorage.getItem("token");
  }
  return token;
};

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};
export default { login, setToken, getToken };
