import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getDetailMovie, detailMovieSelector } from "../../../../app/userSlice"
import Calendar from "../../components/Calendar"
import { useTranslation } from "react-i18next"

function DetailMovie(props) {
  const params = useParams()
  const { id } = params
  const { t } = useTranslation()
  const movie = useSelector(detailMovieSelector)[0]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetailMovie({ id }))
  }, [dispatch, id])

  return (
    <div className="detail-movie">
      {movie && (
        <div className="container">
          <div className="page-title">{t("info")}</div>
          <div className="row mb-5">
            <div className="col-12 col-md-4">
              <img
                className="movie-avatar w-100"
                src={movie.avatar}
                alt="movie-img"
              />
            </div>
            <div className="col-12 col-md-8">
              <div className="movie">
                <div className="movie-title">
                  <strong>{t("name")} </strong>: {movie.name}
                </div>
                <div className="movie-decs">{movie.decs}</div>
                <div className="movie-director">
                  <strong>{t("director")} </strong>: {movie.director}
                </div>
                <div className="movie-cast">
                  <strong>{t("cast")} </strong>: {movie.cast}
                </div>
                <div className="movie-releaseDate">
                  <strong>{t("releaseDate")} </strong>: {movie.releaseDate}
                </div>
                <div className="movie-rate">
                  <strong>{t("rate")} </strong>: {movie.rate}
                </div>
                <div className="movie-language">
                  <strong>{t("language")} </strong>: {movie.language}
                </div>
                <div className="movie-runningtime">
                  <strong>{t("runningTime")} </strong>:{" "}
                  {`${movie.runningTime} ${t("minus")} `}
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <a href="#buy-ticket" className="movie-order">
                    {t("buyTicket")}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="buy-ticket">
            <Calendar />
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailMovie
