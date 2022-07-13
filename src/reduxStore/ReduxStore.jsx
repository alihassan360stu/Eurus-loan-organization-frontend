import { configureStore } from '@reduxjs/toolkit'
import ReduxSlice from './ReduxSlice'
import AllFormData from './AllFormData'

export const ReduxStore = configureStore({
  reducer: {
    ReduxSlice,
    AllFormData
  },
})