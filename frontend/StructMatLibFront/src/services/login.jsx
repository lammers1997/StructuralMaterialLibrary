import axios from 'axios'

//ToDo: when creating frontend to BUILD: baseUrl = /api/concrete

const baseUrl = 'http://localhost:3003/api/login'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}
export default { login }