import { createSlice } from '@reduxjs/toolkit'


const concreteSlice = createSlice({
    name: 'concrete',
    initialState: [],
    reducers:
    {
        setConcretes(state, action) {
            return action.payload
        },
        appendConcretes(state, action) {
            state.push(action.payload)
        },
        deleteConcrete(state, action) {
            return state.filter(material => material.id !== action.payload);
        },
    }
})


export const { setConcretes, appendConcretes, deleteConcrete } = concreteSlice.actions

export default concreteSlice.reducer