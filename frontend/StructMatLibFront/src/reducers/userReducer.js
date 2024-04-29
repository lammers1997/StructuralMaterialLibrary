import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: false,
    user: null,
}

const storedUser = JSON.parse(localStorage.getItem('loggedAppUser'));


const userSlice = createSlice({
    name: 'user',
    initialState: storedUser ? {loggedIn: true, user: storedUser} : initialState,
    reducers:
    {
        login(state, action) {
            state.loggedIn = true;
            state.user = action.payload;
            localStorage.setItem('loggedAppUser', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.loggedIn = false;
            state.user = null;
            localStorage.removeItem('loggedAppUser');
        },
        isLoginExpired:(state,action) => {
            if(!action.payload){
                localStorage.removeItem('loggedAppUser')
            }
        }
    }
})


export const { login, logout } = userSlice.actions

export default userSlice.reducer