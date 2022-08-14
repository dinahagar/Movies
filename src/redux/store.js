import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import { movieApi } from './movieApi'
import movieSlice from "./movieSlice"

export const store = configureStore({
    reducer : {
        movie : movieSlice,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
})

setupListeners(store.dispatch)