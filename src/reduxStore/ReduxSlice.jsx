import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  breakPoint: null,
  responsiveContainer:null
}


export const ReduxSlice = createSlice({
  name: 'responsive',
  initialState,
  reducers: {
    checkingResponsive: (state, action) => {
      state.responsiveContainer =action.payload.xl ? "xl" : action.payload.lg ? "lg" : action.payload.md ? "md" : action.payload.sm ? "sm" : action.payload.sx ? "xs" : "xs";
      state.breakPoint = action.payload;

    }
  },
})

// Action creators are generated for each case reducer function
export const { checkingResponsive } = ReduxSlice.actions
export default ReduxSlice.reducer