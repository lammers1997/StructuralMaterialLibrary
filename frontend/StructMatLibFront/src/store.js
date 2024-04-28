import { configureStore } from '@reduxjs/toolkit'

import concreteReducer from './reducers/concreteReducer'
import steelReducer from './reducers/steelReducer'
import timberReducer from './reducers/timberReducer'
import userReducer from './reducers/userReducer'

const store = configureStore({
    reducer: {
        concrete: concreteReducer,
        steel: steelReducer,
        timber: timberReducer,
        user: userReducer,
    }
})


export default store