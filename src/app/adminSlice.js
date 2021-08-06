import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import adminApi from "../api/adminApi"
import { nanoid } from "@reduxjs/toolkit"

const initialState = {
  users: [],
  params: { _limit: 10, _page: 1 },
  totalCount: 0,
  editUser: ""
}
export const putUser = createAsyncThunk("admin/putUsers", async data => {
  await adminApi.putUser(data)
  return data
})

export const postUser = createAsyncThunk("admin/postUsers", async data => {
  await adminApi.postUser(data)
  return data
})

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
    },

    changeUser: (state, action) => {
      state.editUser = action.payload
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
    },

    [postUser.fulfilled]: (state, action) => {
      state.users.unshift({ ...action.payload, id: nanoid() })
    },

    [putUser.fulfilled]: (state, action) => {
      const data = action.payload
      state.users = state.users.map(user => {
        if (user.id === data.id) user = data
        return user
      })
    }
  }
})

const adminReducer = adminSlide.reducer
export default adminReducer

export const usersSelector = state => state.admin.users
export const paramsSelector = state => state.admin.params
export const totalCountSelector = state => state.admin.totalCount
export const editUserSelector = state => state.admin.editUser

export const { changeParams, changeUser } = adminSlide.actions
