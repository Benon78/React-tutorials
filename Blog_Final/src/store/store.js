import { configureStore } from '@reduxjs/toolkit'
import authSlice  from './authSlice'
 

const store = configureStore({
    reducer: {
        // Define your reducers here
        auth: authSlice,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        // Add your middleware here
    )
})


export default store




