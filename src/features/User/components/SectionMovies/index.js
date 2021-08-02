import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getMovies, moviesSelector } from "./../../userSlice.js"
import classNames from "classnames"
import ListMovies from "../ListMovies/index.js"

function SectionMovies(props) {
  const titles = [
    {
      name: "Phim đang chiếu",
      value: "showing"
    },
    {
      name: "Phim sắp chiếu",
      value: "coming"
    },
    {
      name: "Vé bán trước",
      value: "preShowing"
    }
  ]
  const [showTitle, setShowTitle] = useState("showing")
  const dispatch = useDispatch()
  const movies = useSelector(moviesSelector)
  useEffect(() => {
    dispatch(getMovies({ status: showTitle }))
  }, [dispatch, showTitle])
  return (
    <div className="section-movie">
      <ul className="title">
        {titles.map((title, index) => (
          <li
            onClick={() => setShowTitle(title.value)}
            className={classNames({ active: title.value === showTitle })}
            key={index}
          >
            {title.name}
          </li>
        ))}
      </ul>
      <div className="container">
        <ListMovies movies={movies} />
      </div>
    </div>
  )
}

export default SectionMovies
