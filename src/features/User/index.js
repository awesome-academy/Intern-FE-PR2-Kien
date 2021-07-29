import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import MainPage from "./pages/MainPage"
import { USER_PATH } from "./../../constant/route"

export default function User() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={USER_PATH} component={MainPage} />
        {/* <Route path="/uawr" component={Admin} /> */}
      </Switch>
      <Footer />
    </div>
  )
}
