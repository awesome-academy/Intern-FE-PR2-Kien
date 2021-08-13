import React, { useState, useRef } from "react"
import { Table, Input, Button } from "reactstrap"
import classNames from "classnames"

function TicketTable({ tickets, params, onHandleChangePage, onChangeTicket }) {
  const { _page, _limit } = params
  const [userFilter, setUserFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const typingTimeoutReft = useRef(null)

  const onHandleFilterStatus = e => {
    const value = e.target.value
    setStatusFilter(value)
    const newParams = { ...params }
    if (value === "all") {
      delete newParams.status
      onHandleChangePage({ ...newParams, _page: 1 })
    } else {
      onHandleChangePage({ ...newParams, status: value, _page: 1 })
    }
  }

  const onHandleChangeUserFilter = e => {
    const newParams = { ...params }
    const value = e.target.value
    setUserFilter(value)
    if (typingTimeoutReft.current) {
      clearTimeout(typingTimeoutReft.current)
    }

    typingTimeoutReft.current = setTimeout(() => {
      if (value === "") {
        delete newParams.email_like
        onHandleChangePage({ ...newParams, _page: 1 })
      } else {
        onHandleChangePage({ ...newParams, email_like: value, _page: 1 })
      }
    }, 300)
  }

  const onHandleChangeStatus = (id, status) => {
    const ticket = tickets.find(ticket => ticket.id === id)
    const newTicket = { ...ticket }
    newTicket.status = status
    onChangeTicket(newTicket)
  }

  const onClearFilter = () => {
    setUserFilter("")
    setStatusFilter("all")
    onHandleChangePage({ _page: 1, _limit: 10 })
  }

  return (
    <div className="TicketTable">
      <Button onClick={() => onClearFilter()} color="success">
        Clear filter
      </Button>{" "}
      <Table>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>User</th>
            <th>Movie</th>
            <th>Time</th>
            <th>Place</th>
            <th>Payment</th>
            <th>Seats</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <td>
              <Input
                value={userFilter}
                onChange={e => onHandleChangeUserFilter(e)}
                autoComplete="false"
                name="user"
                placeholder="Search user"
              />
            </td>
            <td></td>
            <th></th>
            <td></td>
            <td></td>
            <th></th>
            <td>
              <Input
                value={statusFilter}
                type="select"
                name="status"
                onChange={e => onHandleFilterStatus(e)}
              >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="banned">Banned</option>
              </Input>
            </td>
          </tr>
          {tickets &&
            tickets.map((ticket, index) => (
              <tr key={ticket.id} className="text-center">
                <th scope="row">{(_page - 1) * _limit + index + 1}</th>
                <td>{ticket.email}</td>
                <td>{ticket.moviename}</td>
                <td>{ticket.time}</td>
                <td>{ticket.place}</td>
                <td>{ticket.payment}</td>
                <td>
                  {ticket.seats.map((seat, index) => (
                    <span className="me-2" key={index}>
                      {seat.col}
                    </span>
                  ))}
                </td>
                <td>
                  <span
                    className={classNames(
                      "status",
                      "position-relative",
                      {
                        "status-banned": ticket.status === "banned"
                      },
                      {
                        "status-active": ticket.status === "active"
                      },
                      {
                        "status-pending": ticket.status === "pending"
                      }
                    )}
                  >
                    {ticket.status}
                    <div className="actions">
                      <span
                        onClick={() =>
                          onHandleChangeStatus(ticket.id, "banned")
                        }
                        className="action status-banned"
                      >
                        <i class="fas fa-times"></i>
                      </span>
                      <span
                        onClick={() =>
                          onHandleChangeStatus(ticket.id, "pending")
                        }
                        className="action status-pending"
                      >
                        <i class="fas fa-pause"></i>
                      </span>
                      <span
                        onClick={() =>
                          onHandleChangeStatus(ticket.id, "active")
                        }
                        className="action status-active"
                      >
                        <i class="fas fa-check"></i>
                      </span>
                    </div>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default TicketTable
