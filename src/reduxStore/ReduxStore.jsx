import { configureStore } from '@reduxjs/toolkit'
import ReduxSlice from './ReduxSlice'

export const ReduxStore = configureStore({
  reducer: {
    ReduxSlice
  },
})