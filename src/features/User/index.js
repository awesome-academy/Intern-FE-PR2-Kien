import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import MainPage from "./pages/MainPage"
import DetailMovie from "./pages/DetailMovie"
import Authen from "./pages/Authentication "
import OrderPage from "./pages/OrderPage"
import {
  AUTHEN_PATH,
  USER_PATH,
  DETAIL_MOVIE_PATH,
  ORDER_PATH
} from "./../../constant/route"

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
        </Switch>
      </div>
      <Footer />
    </div>
  )
}
