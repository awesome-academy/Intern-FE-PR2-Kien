import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  banner: [],
  movies: [],
  events: []
}
export const getBanner = createAsyncThunk("user/bannerFetched", async () => {
  const response = await axios.get("http://localhost:3001/banner")
  return response.data
})
export const getEvent = createAsyncThunk("user/eventsFetched", async () => {
  const response = await axios.get("http://localhost:3001/events")
  return response.data
})
export const getMovies = createAsyncThunk("user/moviesFetched", async data => {
  const response = await axios.get(`http://localhost:3001/movies`, {
    params: { ...data }
  })
  return response.data
})
export const userSlide = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getBanner.fulfilled]: (state, action) => {
      state.banner = action.payload
    },

    [getMovies.fulfilled]: (state, action) => {
      state.movies = action.payload
    },

    [getEvent.fulfilled]: (state, action) => {
      state.events = action.payload
    }
  }
})

const userReducer = userSlide.reducer
export default userReducer

export const bannerSelector = state => state.user.banner
export const moviesSelector = state => state.user.movies
export const eventsSelector = state => state.user.events

export const {} = userSlide.actions
