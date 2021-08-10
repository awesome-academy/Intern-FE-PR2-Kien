import React, { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  getOrder,
  orderSelector,
  orderTicket,
  getEvent,
  eventsSelector,
  pushOrdered
} from "../../../../app/userSlice"
import { currentUserSelector } from "../../../../app/authSlice"

import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
import classNames from "classnames"
import { toast } from "react-toastify"
import { isEmpty } from "lodash"
import MainEvent from "../../components/MainEvent"

import { SIGN_IN_PATH, USER_PATH } from "./../../../../constant/route"

function OrderPage(props) {
  const params = useParams()
  const location = useLocation()
  const { t } = useTranslation()
  const { id } = params
  const inforOrder = useSelector(orderSelector)
  const order = inforOrder.seat
  const { name, time, place } = inforOrder
  const events = useSelector(eventsSelector)
  const currentUser = useSelector(currentUserSelector)
  const history = useHistory()
  const dispatch = useDispatch()
  const curentUser = useSelector(currentUserSelector)

  const ordered = []
  order &&
    order.forEach(element => {
      element.col.forEach(item => {
        if (item.isChecked === true) {
          ordered.push(item)
        }
      })
    })

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getEvent())
  }, [dispatch])

  useEffect(() => {
    dispatch(getOrder())
  }, [dispatch, id])

  const onHandleClick = data => {
    if (data.isEmpty) {
      dispatch(orderTicket(data))
    } else {
      toast.dark(`${t("changeSeatFail")}`)
    }
  }

  const onHandleClickBuy = data => {
    const seatsInfo = ordered.map(item => {
      return { row: item.row, col: item.name }
    })
    const result = {
      moviename: name,
      time: time,
      place: place,
      payment: data,
      seats: seatsInfo,
      email: curentUser.email,
      status: "pending"
    }

    if (isEmpty(currentUser)) {
      localStorage.setItem("oldPath", location.pathname)
      history.push(SIGN_IN_PATH)
      toast.dark(`${t("mustLogin")}`)
    } else {
      dispatch(pushOrdered(result))
      history.push(USER_PATH)
      toast.dark(`${t("orderSuccessful")}`)
    }
  }

  return (
    <div>
      <div className="order-page">
        <div className="row mb-5">
          <div className="col-12 col-lg-6">
            <div className="order-title">{t("seatingChart")}</div>
            <div className="order-box">
              {order &&
                order.map((item, index) => (
                  <div key={index} className="order-box__row">
                    <div className="order-box__row-title">{item.row}</div>
                    <div className="order-box__cols">
                      {item.col.map((item2, index2) => (
                        <div
                          key={index2}
                          className={classNames(
                            "order-box__col",
                            "color-green",
                            {
                              "color-gray": item2.isNearScreen,
                              "color-red": !item2.isEmpty,
                              "cursor-not-allowed": !item2.isEmpty,
                              "color-blue": item2.isChecked
                            }
                          )}
                          onClick={() => onHandleClick(item2)}
                        >
                          {item2.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="order-title">{t("Regulation")}</div>
            <div className="order-content d-flex flex-column align-items-center">
              <div className="w-75">
                <div className="d-flex">
                  <div className="w-25 d-flex justify-content-center">
                    <div className="order-box__col color-red me-2">R</div>
                  </div>
                  <p>{t("Regulation1")}</p>
                </div>
                <div className="d-flex">
                  <div className="w-25 d-flex justify-content-center">
                    <div className="order-box__col color-blue me-2">B</div>
                    <div className="order-box__col color-gray me-2">G</div>
                  </div>
                  <p>{t("Regulation2")}</p>
                </div>
                <div className="d-flex">
                  <div className="w-25 d-flex justify-content-center">
                    <div className="order-box__col color-green me-2">G</div>
                  </div>
                  <p>{t("Regulation3")}</p>
                </div>
              </div>
            </div>
            <div className="order-title mt-3">{t("selected")}</div>
            <div className="d-flex justify-content-center">
              {ordered.map((item, index) => (
                <div
                  key={index}
                  className="order-box__col color-blue border-white"
                >
                  {item.name}
                </div>
              ))}
            </div>
            {ordered.length && (
              <div>
                <button
                  onClick={() => onHandleClickBuy("Online")}
                  className="order-btn me-3"
                >
                  {t("paymentOnline")}
                </button>
                <button
                  onClick={() => onHandleClickBuy("Offline")}
                  className="order-btn"
                >
                  {t("paymentOffline")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <MainEvent events={events} />
    </div>
  )
}

export default OrderPage
