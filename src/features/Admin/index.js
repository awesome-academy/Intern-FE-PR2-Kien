import React from "react"
import { Switch, Route } from "react-router-dom"

import MainPage from "./pages/MainPage"
import { ADMIN_PATH } from "./../../constant/route"
import HeaderAdmin from "./components/Header"

export default function Admin() {
  return (
    <div>
      <HeaderAdmin />
      <Switch>
        <Route exact path={ADMIN_PATH} component={MainPage} />
      </Switch>
    </div>
  )
}
