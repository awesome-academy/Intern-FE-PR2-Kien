import { GET_TICKET } from "../constant/route"
import axiosClient from "./adminAxiosClient"

const ticketApi = {
  getTickets: params => {
    const url = GET_TICKET
    return axiosClient.get(url, { params })
  },
  putTicket: data => {
    const url = `${GET_TICKET}/${data.id}`
    return axiosClient.put(url, data)
  }
}

export default ticketApi
