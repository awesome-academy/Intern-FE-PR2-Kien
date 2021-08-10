import React, { useEffect } from "react"
import TicketTable from "../../components/TicketTable"
import { useSelector, useDispatch } from "react-redux"
import {
  getTickets,
  paramsSelector,
  ticketsSelector,
  totalCountSelector,
  changeParams,
  putTicket
} from "./../../../../app/ticketSlice"
import AdminPagination from "../../components/Pagination2"

function TicketPage() {
  const dispatch = useDispatch()
  const tickets = useSelector(ticketsSelector)
  const params = useSelector(paramsSelector)
  const totalCount = useSelector(totalCountSelector)

  useEffect(() => {
    dispatch(getTickets(params))
  }, [dispatch, params])

  const onChangePage = data => {
    dispatch(changeParams({ ...data }))
  }

  const onChangeTicket = data => {
    dispatch(putTicket(data))
  }

  return (
    <div className="TicketPage">
      <TicketTable
        tickets={tickets}
        params={params}
        onHandleChangePage={onChangePage}
        onChangeTicket={onChangeTicket}
      />
      <AdminPagination
        totalCount={totalCount}
        params={params}
        onHandleChangePage={onChangePage}
      />
    </div>
  )
}

export default TicketPage
