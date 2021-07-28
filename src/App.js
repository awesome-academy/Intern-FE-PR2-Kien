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
const User = React.lazy(() => import("./features/User"))
const Admin = React.lazy(() => import("./features/Admin"))

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        {/* <ul>
          <li>
            <Link to="/">Users 1</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul> */}
        <Switch>
          <Redirect exact from={ROOT_PATH} to={USER_PATH} />

          <Route exact path={USER_PATH} component={User} />
          <Route path={ADMIN_PATH} component={Admin} />
        </Switch>
      </Router>
    </Suspense>
  )
}
