import axios from 'axios'

//ToDo: when creating frontend to BUILD: baseUrl = /api/concrete
const baseUrl = `http://localhost:3003/api/concrete`


const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default {
    getAll,
}