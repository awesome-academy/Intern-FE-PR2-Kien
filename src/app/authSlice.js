import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authApi from "./../api/authApi"

export const getMe = createAsyncThunk("auth/meFetched", async () => {
  const currentUser = await authApi.getMe()
  return currentUser
})

const initialState = {
  current: {},
  loading: false,
  error: ""
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: state => {
      state.current = {}
    }
  },
  extraReducers: {
    [getMe.pending]: state => {
      state.loading = true
    },
    [getMe.fulfilled]: (state, action) => {
      state.loading = false
      state.error = action.error
    },
    [getMe.fulfilled]: (state, action) => {
      state.loading = false
      state.current = action.payload
    }
  }
})

const authReducer = authSlice.reducer
export default authReducer

export const currentUserSelector = state => state.auth.current
export const { signOut } = authSlice.actions
