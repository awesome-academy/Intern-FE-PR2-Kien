import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userApi from "../api/userApi"

const initialState = {
  banner: [],
  movies: [],
  events: [],
  detailMovie: {},
  calendar: [],
  order: []
}

export const pushOrdered = createAsyncThunk("user/orderPush", async data => {
  await userApi.pushOrder(data)
  return data
})

export const getBanner = createAsyncThunk("user/bannerFetched", async () => {
  const response = await userApi.getBanner()
  return response
})

export const getOrder = createAsyncThunk("user/orderFetched", async () => {
  const response = await userApi.getOrder()
  return response
})

export const getEvent = createAsyncThunk("user/eventsFetched", async () => {
  const response = await userApi.getEvent()
  return response
})

export const getMovies = createAsyncThunk("user/moviesFetched", async data => {
  const response = await userApi.getMovies(data)
  return response
})

export const getDetailMovie = createAsyncThunk(
  "user/movieFetched",
  async data => {
    const response = await userApi.getDetailMovie(data)
    return response
  }
)
export const getCalendar = createAsyncThunk(
  "user/calendarFetched",
  async () => {
    const response = await userApi.getCalendar()
    return response
  }
)

export const userSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    orderTicket: (state, action) => {
      const newCol = action.payload.name
      state.order.forEach(element => {
        element.col.forEach(item => {
          if (item.name === newCol) {
            item.isChecked = !item.isChecked
          }
        })
      })
    }
  },
  extraReducers: {
    [getBanner.fulfilled]: (state, action) => {
      state.banner = action.payload
    },

    [getMovies.fulfilled]: (state, action) => {
      state.movies = action.payload
    },

    [getEvent.fulfilled]: (state, action) => {
      state.events = action.payload
    },

    [getDetailMovie.fulfilled]: (state, action) => {
      state.detailMovie = action.payload
    },

    [getCalendar.fulfilled]: (state, action) => {
      state.calendar = action.payload
    },

    [getOrder.fulfilled]: (state, action) => {
      state.order = action.payload
    },

    [pushOrdered.fulfilled]: (state, action) => {}
  }
})

const userReducer = userSlide.reducer
export default userReducer

export const bannerSelector = state => state.user.banner
export const moviesSelector = state => state.user.movies
export const eventsSelector = state => state.user.events
export const detailMovieSelector = state => state.user.detailMovie
export const calendarSelector = state => state.user.calendar
export const orderSelector = state => state.user.order

export const { orderTicket } = userSlide.actions
