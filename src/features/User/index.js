import React from "react"
import { Switch, Route } from "react-router-dom"

import MainPage from "./pages/MainPage"
import { USER_PATH } from "./../../constant/route"
export default function User() {
  return (
    <div>
      <Switch>
        <Route exact path={USER_PATH} component={MainPage} />
        {/* <Route path="/admin" component={Admin} /> */}
      </Switch>
    </div>
  )
}
