import React, { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {
  getMoviesByName,
  movieByNameSelector
} from "./../../../../app/userSlice"

function SearchInput(props) {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const [params, setParams] = useState({ name_like: "lkasjdlasdjf" })
  const movieByName = useSelector(movieByNameSelector)
  const typingTimeoutReft = useRef(null)

  useEffect(() => {
    dispatch(getMoviesByName(params))
  }, [dispatch, params])

  const onHandleChangeInput = e => {
    const newValue = e.target.value
    setValue(newValue)
    if (typingTimeoutReft.current) {
      clearTimeout(typingTimeoutReft.current)
    }

    typingTimeoutReft.current = setTimeout(() => {
      const newParams = { name_like: newValue }
      setParams(newParams)
    }, 300)
  }

  const onHandleSubmit = e => {
    e.preventDefault()
    setValue("")
    setParams({ name_like: "lkasjdlasdjf" })
  }

  return (
    <div className="searchInput">
      <form onSubmit={e => onHandleSubmit(e)}>
        <input
          onChange={e => onHandleChangeInput(e)}
          value={value}
          type="text"
          placeholder="Tìm kiếm phim"
        />
      </form>
      {movieByName && (
        <ul>
          {movieByName.map((item, index) => (
            <li key={index}>
              <Link to={`/user/movie/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchInput
