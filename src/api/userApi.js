import axiosClient from "./axiosClient"
import {
  GET_BANNER,
  GET_CALENDAR,
  GET_ORDER,
  GET_EVENTS,
  GET_MOVIES,
  PUSH_ORDER,
  GET_NEWS,
  GET_CINEMAS,
  GET_ORDERED
} from "./../constant/route"

const userApi = {
  getOrdered: () => {
    const url = GET_ORDERED
    return axiosClient.get(url)
  },

  getBanner: () => {
    const url = GET_BANNER
    return axiosClient.get(url)
  },
  getOrder: () => {
    const url = GET_ORDER
    return axiosClient.get(url)
  },
  getEvent: () => {
    const url = GET_EVENTS
    return axiosClient.get(url)
  },
  getMovies: params => {
    const url = GET_MOVIES
    return axiosClient.get(url, { params })
  },
  getDetailMovie: params => {
    const url = GET_MOVIES
    return axiosClient.get(url, { params })
  },
  getCalendar: () => {
    const url = GET_CALENDAR
    return axiosClient.get(url)
  },
  getMovieByName: params => {
    const url = GET_MOVIES
    return axiosClient.get(url, { params })
  },
  getNews: params => {
    const url = GET_NEWS
    return axiosClient.get(url, { params })
  },
  getNew: params => {
    const url = GET_NEWS
    return axiosClient.get(url, { params })
  },
  pushOrder: data => {
    const url = PUSH_ORDER
    return axiosClient.post(url, data)
  },
  getCinemas: params => {
    const url = GET_CINEMAS
    return axiosClient.get(url, { params })
  }
}

export default userApi
