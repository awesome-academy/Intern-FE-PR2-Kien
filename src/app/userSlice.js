import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userApi from "../api/userApi"

const initialState = {
  banner: [],
  movies: [],
  events: [],
  detailMovie: {},
  calendar: [],
  order: [],
  movieByName: [],
  news: [],
  new: [],
  cinemas: [],
  cinema: [],
  ordered: []
}
export const getOrdered = createAsyncThunk("user/getOrdered", async () => {
  const response = await userApi.getOrdered()
  return response
})

export const getCinema = createAsyncThunk("user/getCinema", async data => {
  const response = await userApi.getCinemas(data)
  return response
})

export const getCinemas = createAsyncThunk("user/getCinemas", async data => {
  const response = await userApi.getCinemas(data)
  return response
})

export const getNew = createAsyncThunk("user/getNew", async data => {
  const response = await userApi.getNews(data)
  return response
})

export const getNews = createAsyncThunk("user/getNews", async data => {
  const response = await userApi.getNews(data)
  return response
})

export const getMoviesByName = createAsyncThunk(
  "user/getMovieByName",
  async data => {
    const response = await userApi.getMovieByName(data)
    return response
  }
)

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
      state.order.seat.forEach(element => {
        element.col.forEach(item => {
          if (item.name === newCol) {
            item.isChecked = !item.isChecked
          }
        })
      })
    },

    clearMovieByName: state => {
      state.movieByName = []
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

    [pushOrdered.fulfilled]: (state, action) => {},

    [getMoviesByName.fulfilled]: (state, action) => {
      action.payload.length === 0
        ? (state.movieByName = [
            { name: "Không tìm thấy kết quả nào", id: null }
          ])
        : (state.movieByName = action.payload)
    },

    [getNews.fulfilled]: (state, action) => {
      state.news = action.payload
    },

    [getNew.fulfilled]: (state, action) => {
      state.new = action.payload
    },

    [getCinemas.fulfilled]: (state, action) => {
      state.cinemas = action.payload
    },

    [getCinema.fulfilled]: (state, action) => {
      state.cinema = action.payload
    },

    [getOrdered.fulfilled]: (state, action) => {
      state.ordered = action.payload
    }
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
export const movieByNameSelector = state => state.user.movieByName
export const newsSelector = state => state.user.news
export const newSelector = state => state.user.new
export const cinemasSelector = state => state.user.cinemas
export const cinemaSelector = state => state.user.cinema
export const orderedSelector = state => state.user.ordered

export const { orderTicket, clearMovieByName } = userSlide.actions
