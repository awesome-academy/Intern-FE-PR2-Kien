import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOrdered, orderedSelector } from "./../../../../app/userSlice"
import { currentUserSelector } from "../../../../app/authSlice"
import classNames from "classnames"

function OrderedTicket(props) {
  const dispatch = useDispatch()
  const totalOrdered = useSelector(orderedSelector)
  const curentUser = useSelector(currentUserSelector)
  const ordered = totalOrdered.filter(
    element => element.email === curentUser.email
  )

  useEffect(() => {
    dispatch(getOrdered())
  }, [dispatch])
  return (
    <div className="OrderedTicket">
      <h1 className="text-center mb-4">Vé đã đặt</h1>
      {ordered &&
        ordered.map((order, index) => (
          <div
            className={classNames(
              "box mb-4",
              { "border-pending": order.status === "pending" },
              { "border-active": order.status === "active" },
              { "border-banned": order.status === "banned" }
            )}
            key={index}
          >
            <div className="movieName">{order.place}</div>
            <ul>
              <li>
                <strong>Tên phim</strong> {order.moviename}
              </li>
              <li>
                <strong>Thời gian</strong> {order.time}
              </li>
              <li>
                <strong>Hình thức thanh toán</strong> {order.payment}
              </li>
              <li className="d-flex">
                <strong>Chỗ ngồi</strong>
                <ul className="seat">
                  {order.seats.map((item, index) => (
                    <li key={index}>{item.col}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        ))}
    </div>
  )
}

export default OrderedTicket
