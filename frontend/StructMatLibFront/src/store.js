import { configureStore } from '@reduxjs/toolkit'

import concreteReducer from './reducers/concreteReducer'

const store = configureStore({
    reducer: {
        concretes: concreteReducer,
    }
})


export default store