import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { calendarSelector, getCalendar } from "./../../../../app/userSlice"
import { Link } from "react-router-dom"

function Calendar(props) {
  const dispatch = useDispatch()
  const calendar = useSelector(calendarSelector)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getCalendar())
  }, [dispatch])

  return (
    <div className="calendars">
      {calendar &&
        calendar.map((item, index) => (
          <div key={index} className="calendar">
            <div className="d-flex">
              <div className="day w-25 text-center">
                <span className="day-title">Ngày</span>
                <span className="day-content">{item.day}</span>
              </div>
              <div className="theaters w-75 d-flex flex-column">
                {item.theater.map((item2, index2) => (
                  <div key={index2} className="d-flex mb-2">
                    <div className="theater">{item2.name}</div>
                    {item2.showTime.map((item3, index3) => (
                      <Link
                        to={`/user/order/${item3.id}`}
                        replace
                        key={index3}
                        className="show-time"
                      >
                        {item3.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Calendar
