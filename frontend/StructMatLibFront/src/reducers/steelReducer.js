import { createSlice } from '@reduxjs/toolkit'


const steelSlice = createSlice({
    name: 'steel',
    initialState: [],
    reducers:
    {
        setSteel(state, action) {
            return action.payload
        },
        appendSteel(state, action) {
            state.push(action.payload)
        },
        deleteSteel(state, action) {
            return state.filter(material => material.id !== action.payload);
        },
    }
})


export const { setSteel, appendSteel, deleteSteel } = steelSlice.actions

export default steelSlice.reducer