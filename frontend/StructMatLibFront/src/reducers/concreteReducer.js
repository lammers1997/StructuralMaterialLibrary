import { createSlice } from '@reduxjs/toolkit'


const concreteSlice = createSlice({
    name: 'concretes',
    initialState: [],
    reducers:
    {
        setConcretes(state, action) {
            return action.payload
        },
        appendConcrete(state, action) {
            state.push(action.payload)
        },
    }
})


export const { createConcrete, appendConcrete, setConcretes } = concreteSlice.actions

export default concreteSlice.reducer