import axios from 'axios'

//ToDo: when creating frontend to BUILD: baseUrl = /api/concrete
const baseUrl = `http://localhost:3003/api/steel`


const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const addNewMaterial = async (newMaterial) => {
    // NO AUTHORIZATION DONE YET
    const response = await axios.post(baseUrl, newMaterial)
    return response.data
}

const deleteMaterial = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
}

export default {
    getAll,
    addNewMaterial,
    deleteMaterial
}