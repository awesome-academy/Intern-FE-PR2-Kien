import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { newsSelector, getNews } from "../../../../app/userSlice"
import { Link } from "react-router-dom"
import classNames from "classnames"
import { NEWS_PATH } from "../../../../constant/route"
import { useTranslation } from "react-i18next"

function NewsPage(props) {
  const [newType, setNewType] = useState("new")
  const dispatch = useDispatch()
  const news = useSelector(newsSelector)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(getNews({ type: newType }))
  }, [dispatch, newType])

  return (
    <div className="NewsPage">
      <div className="container">
        <div className="news__title">
          <span
            className={classNames({ "color-yellow": newType === "promotion" })}
            onClick={() => setNewType("promotion")}
          >
            {t("promotion")}
          </span>
          <span
            className={classNames({ "color-yellow": newType === "new" })}
            onClick={() => setNewType("new")}
          >
            {t("news")}
          </span>
        </div>
        <div className="row">
          {news &&
            news.map((item, index) => (
              <div key={index} className="col-lg-3 col-6 col-sm-4">
                <div className="new">
                  <img
                    className="w-100 new-avatar"
                    src={item.avatar}
                    alt="avatar"
                  />
                  <Link to={`${NEWS_PATH}/${item.id}`} className="new-name">{ item.title }</Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default NewsPage
