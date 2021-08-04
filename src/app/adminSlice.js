import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import adminApi from "../api/adminApi"

const initialState = {
  users: [],
  params: { _limit: 10, _page: 1 },
  totalCount: 0
}

export const getUsers = createAsyncThunk("admin/getUsers", async params => {
  const response = await adminApi.getUsers({ ...params })
  return {
    totalCount: response.headers["x-total-count"],
    users: response.data
  }
})

export const deleteUser = createAsyncThunk("admin/deleteUser", async id => {
  await adminApi.deleteUser(id)
  return id
})

export const adminSlide = createSlice({
  name: "admin",
  initialState,
  reducers: {
    changeParams: (state, action) => {
      state.params = action.payload
    }
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload.users
      state.totalCount = action.payload.totalCount
    },

    [deleteUser.fulfilled]: (state, action) => {
      const userId = action.payload
      state.users = state.users.filter(user => user.id !== userId)
    }
  }
})

const adminReducer = adminSlide.reducer
export default adminReducer

export const usersSelector = state => state.admin.users
export const paramsSelector = state => state.admin.params
export const totalCountSelector = state => state.admin.totalCount

export const { changeParams } = adminSlide.actions
