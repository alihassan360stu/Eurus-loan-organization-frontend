import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  breakPoint: null,
}


export const ReduxSlice = createSlice({
  name: 'responsive',
  initialState,
  reducers: {
    checkingResponsive: (state, action) => {
      state.breakPoint = action.payload;

    }
  },
})

// Action creators are generated for each case reducer function
export const { checkingResponsive } = ReduxSlice.actions
export default ReduxSlice.reducer