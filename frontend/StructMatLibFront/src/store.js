import { configureStore } from '@reduxjs/toolkit'

import concreteReducer from './reducers/concreteReducer'
import steelReducer from './reducers/steelReducer'
import timberReducer from './reducers/timberReducer'

const store = configureStore({
    reducer: {
        concrete: concreteReducer,
        steel: steelReducer,
        timber: timberReducer
    }
})


export default store