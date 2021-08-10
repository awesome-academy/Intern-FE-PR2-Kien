import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import ticketApi from "./../api/ticketApi"

export const getTickets = createAsyncThunk(
  "ticket/getTickets",
  async params => {
    const response = await ticketApi.getTickets(params)
    return {
      totalCount: response.headers["x-total-count"],
      tickets: response.data
    }
  }
)

export const putTicket = createAsyncThunk("ticket/putTicket", async data => {
  await ticketApi.putTicket(data)
  return data
})

const initialState = {
  tickets: [],
  params: {
    _page: 1,
    _limit: 10
  },
  totalCount: 0,
  loading: false,
  error: ""
}

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    changeParams: (state, action) => {
      state.params = action.payload
    }
  },
  extraReducers: {
    [getTickets.fulfilled]: (state, action) => {
      const { totalCount, tickets } = action.payload
      state.tickets = tickets
      state.totalCount = totalCount
    },

    [putTicket.fulfilled]: (state, action) => {
      const data = action.payload
      state.tickets = state.tickets.map(ticket => {
        if (ticket.id === data.id) ticket = data
        return ticket
      })
    }
  }
})

const ticketReducer = ticketSlice.reducer
export default ticketReducer

export const ticketsSelector = state => state.ticket.tickets
export const paramsSelector = state => state.ticket.params
export const totalCountSelector = state => state.ticket.totalCount
export const { changeParams } = ticketSlice.actions
