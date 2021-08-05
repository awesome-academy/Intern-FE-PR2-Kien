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
  deleteUser: id => {
    const url = `${DELETE_USER}/${id}`
    return axiosClient.delete(url)
  }
}

export default adminApi
