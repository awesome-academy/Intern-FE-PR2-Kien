import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import MainPage from "./pages/MainPage"
import DetailMovie from "./pages/DetailMovie"
import Authen from "./pages/Authentication "
import OrderPage from "./pages/OrderPage"
import UserInfoPage from "./pages/UserInfoPage"
import NewsPage from "./pages/NewsPage"
import NewPage from "./pages/NewPage"
import {
  AUTHEN_PATH,
  USER_PATH,
  DETAIL_MOVIE_PATH,
  ORDER_PATH,
  USER_INFO_PATH,
  NEWS_PATH,
  NEW_PATH,
  CINEMAS_PATH,
  CINEMA_PATH
} from "./../../constant/route"
import Cinemas from "./pages/Cinemas"
import Cinema from "./pages/Cinema"

export default function User() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "70vh" }}>
        <Switch>
          <Route exact path={USER_PATH} component={MainPage} />
          <Route path={DETAIL_MOVIE_PATH} component={DetailMovie} />
          <Route path={AUTHEN_PATH} component={Authen} />
          <Route path={ORDER_PATH} component={OrderPage} />
          <Route path={USER_INFO_PATH} component={UserInfoPage} />
          <Route exact path={NEWS_PATH} component={NewsPage} />
          <Route path={NEW_PATH} component={NewPage} />
          <Route exact path={CINEMAS_PATH} component={Cinemas} />
          <Route path={CINEMA_PATH} component={Cinema} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}
