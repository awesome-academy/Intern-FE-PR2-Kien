import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  getOrder,
  orderSelector,
  orderTicket,
  getEvent,
  eventsSelector,
  pushOrdered
} from "../../../../app/userSlice"
import { currentUserSelector } from "./../../../../app/authSlice"
import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
import classNames from "classnames"
import { toast } from "react-toastify"
import { isEmpty } from "lodash"
import MainEvent from "../../components/MainEvent"

function OrderPage(props) {
  const params = useParams()
  const { t } = useTranslation()
  const { id } = params
  const order = useSelector(orderSelector)
  const events = useSelector(eventsSelector)
  const currentUser = useSelector(currentUserSelector)
  const history = useHistory()
  const dispatch = useDispatch()

  const ordered = []
  order.forEach(element => {
    element.col.forEach(item => {
      if (item.isChecked === true) {
        ordered.push(item)
      }
    })
  })

  useEffect(() => {
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

  const onHandleClickBuy = () => {
    if (isEmpty(currentUser)) {
      history.push("/user/account/signin")
      toast.dark(`${t("mustLogin")}`)
    } else {
      dispatch(pushOrdered(ordered))
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
            <div className="order-content">
              <p>{t("Regulation1")}</p>
              <p>{t("Regulation2")}</p>
              <p>{t("Regulation3")}</p>
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
              <button onClick={() => onHandleClickBuy()} className="order-btn">
                {t("payment")}
              </button>
            )}
          </div>
        </div>
      </div>
      <MainEvent events={events} />
    </div>
  )
}

export default OrderPage
