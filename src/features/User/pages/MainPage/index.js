import React, { useEffect } from "react"

import BannerCarousel from "../../components/BannerCarousel"
import SectionMovies from "../../components/SectionMovies"
import MainEvent from "../../components/MainEvent"
import { useSelector, useDispatch } from "react-redux"
import {
  bannerSelector,
  eventsSelector,
  getBanner,
  getEvent
} from "./../../userSlice.js"

function MainPage() {
  const dispatch = useDispatch()
  const banner = useSelector(bannerSelector)
  const events = useSelector(eventsSelector)
  useEffect(() => {
    dispatch(getBanner())
    dispatch(getEvent())
  }, [dispatch])

  return (
    <div className="user">
      <BannerCarousel banner={banner} />
      <SectionMovies />
      <MainEvent events={events} />
    </div>
  )
}

export default MainPage
