import { configureStore } from '@reduxjs/toolkit'

import materialReducer from './reducers/materialReducer'

const store = configureStore({
    reducer: {
        materials: materialReducer,
    }
})


export default store