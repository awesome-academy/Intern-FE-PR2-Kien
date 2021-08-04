import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCinemas, cinemasSelector } from "./../../../../app/userSlice"
import { Link } from "react-router-dom"
import { CINEMAS_PATH } from "./../../../../constant/route"

function Cinemas(props) {
  const dispatch = useDispatch()
  const cinemas = useSelector(cinemasSelector)

  useEffect(() => {
    dispatch(getCinemas())
  }, [dispatch])

  return (
    <div className="Cinemas">
      <div className="container">
        <h1>Hệ thống rạp</h1>
        <div className="row">
          {cinemas &&
            cinemas.map((cinema, index) => (
              <div key={index} className="col-4">
                <div className="cinema">
                  <Link to={`${CINEMAS_PATH}/${cinema.id}`}>
                    <img className="w-100" src={cinema.img} alt="avatar" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Cinemas
