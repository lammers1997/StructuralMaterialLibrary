import axios from 'axios'

//ToDo: when creating frontend to BUILD: baseUrl = /api/concrete

const baseUrl = 'http://localhost:3003/api/login'

let token = null
const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

const getToken =  () => {
    return token;
}

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}
export default { login, setToken, getToken }