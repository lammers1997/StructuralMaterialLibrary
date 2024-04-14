import axios from 'axios'

//ToDo: when creating frontend to BUILD: baseUrl = /api/concrete
const baseUrl = `http://localhost:3003/api/concrete`


const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const addNewMaterial = async (newMaterial) => {
    // NO AUTHORIZATION YET
    const response = await axios.post(baseUrl, newMaterial)
    return response.data
  }

export default {
    getAll,
    addNewMaterial
}