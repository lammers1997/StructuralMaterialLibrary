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
    }
})


export const { appendMaterial, setMaterials } = materialSlice.actions

export default materialSlice.reducer