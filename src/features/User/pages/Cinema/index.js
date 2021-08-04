import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCinema, cinemaSelector } from "./../../../../app/userSlice"
import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Cinema(props) {
  const dispatch = useDispatch()
  const cinemaArr = useSelector(cinemaSelector)
  const cinema = cinemaArr[0]
  const { t } = useTranslation()

  const params = useParams()
  const { id } = params

  useEffect(() => {
    dispatch(getCinema({ id: id }))
  }, [dispatch, id])

  return (
    <div className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-8">
            {cinema && (
              <div>
                <h1>{cinema.name}</h1>
                <ul>
                  <li>
                    <strong>{t("address")} : </strong>
                    {cinema.address}
                  </li>
                  <li>
                    <strong>Email : </strong>
                    {cinema.email}
                  </li>
                  <li>
                    <strong>{t("phone")} : </strong>
                    {cinema.phone}
                  </li>
                  <li>
                    <strong>{t("room")} : </strong>
                    {cinema.room}
                  </li>
                  <li>
                    <strong>{t("tablePrice")} :</strong>
                    <br />
                    <img
                      className="w-100"
                      src={cinema.tablePrice}
                      alt="price"
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cinema
