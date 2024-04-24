import { createSlice } from '@reduxjs/toolkit'


const materialSlice = createSlice({
    name: 'materials',
    initialState: [],
    reducers:
    {
        setMaterials(state, action) {
            return action.payload
        },
        appendMaterial(state, action) {
            state.push(action.payload)
        },
        deleteMaterial(state, action) {
            return state.filter(material => material.id !== action.payload);
        },
    }
})


export const { appendMaterial, setMaterials, deleteMaterial } = materialSlice.actions

export default materialSlice.reducer