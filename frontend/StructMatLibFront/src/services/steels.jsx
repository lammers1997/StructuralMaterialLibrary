import axios from "axios";
import loginService from "./login";

const baseUrl = `http://localhost:3003/api/steel`;

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addNewMaterial = async (newMaterial) => {
  const config = {
    headers: { Authorization: loginService.getToken() },
  };
  console.log(config);
  const response = await axios.post(baseUrl, newMaterial, config);
  return response.data;
};

const deleteMaterial = async (id) => {
  const config = {
    headers: { Authorization: loginService.getToken() },
  };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

export default {
  getAll,
  addNewMaterial,
  deleteMaterial,
};
