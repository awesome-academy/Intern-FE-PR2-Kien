import { GET_USER, POST_USER, DELETE_USER } from "../constant/route"
import axiosClient from "./adminAxiosClient"

const adminApi = {
  getUsers: params => {
    const url = GET_USER
    return axiosClient.get(url, { params })
  },
  postUser: data => {
    const url = POST_USER
    return axiosClient.post(url, data)
  },
  putUser: data => {
    const url = `${POST_USER}/${data.id}`
    return axiosClient.put(url, data)
  },
  deleteUser: id => {
    const url = `${DELETE_USER}/${id}`
    return axiosClient.delete(url)
  },
  getDetailUser: id => {
    const url = `${GET_USER}/${id}`
    return axiosClient.get(url)
  }
}

export default adminApi
