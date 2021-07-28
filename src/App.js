import React from "react"
import { Suspense } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import { ROOT_PATH, ADMIN_PATH, USER_PATH } from "./constant/route"

import Loading from "./components/Loading"

import "./App.sass"
import NotFound from "./components/NotFound"
const User = React.lazy(() => import("./features/User"))
const Admin = React.lazy(() => import("./features/Admin"))

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Redirect exact from={ROOT_PATH} to={USER_PATH} />

          <Route path={USER_PATH} component={User} />
          <Route path={ADMIN_PATH} component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  )
}
