import { createSlice } from '@reduxjs/toolkit'


const timberSlice = createSlice({
    name: 'timber',
    initialState: [],
    reducers:
    {
        setTimber(state, action) {
            return action.payload
        },
        appendTimber(state, action) {
            state.push(action.payload)
        },
        deleteConcrete(state, action) {
            return state.filter(material => material.id !== action.payload);
        },
    }
})


export const { setTimber, appendTimber, deleteConcrete } = timberSlice.actions

export default timberSlice.reducer