import React, { useEffect } from "react"
import { unwrapResult } from "@reduxjs/toolkit"
import firebase from "firebase"
import { toast } from "react-toastify"
import { Suspense } from "react"
import { ToastContainer } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { currentUserSelector } from "./app/authSlice"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import { ROOT_PATH, ADMIN_PATH, USER_PATH } from "./constant/route"
import { getMe } from "./app/authSlice"
import { useTranslation } from "react-i18next"

import Loading from "./components/Loading"
import NotFound from "./components/NotFound"

import "./App.scss"

const User = React.lazy(() => import("./features/User"))
const Admin = React.lazy(() => import("./features/Admin"))

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_URL,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
}

firebase.initializeApp(config)

export default function App() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const curentUser = useSelector(currentUserSelector)

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async user => {
        if (!user) {
          return
        }
        try {
          const actionResult = await dispatch(getMe())
          const currentUser = unwrapResult(actionResult)
          localStorage.setItem("rememberedUser", JSON.stringify(currentUser))
          toast.success(`${t("loginSuccessful")}`)
        } catch (error) {
          toast.error(`${t("loginFail")}`)
        }

        localStorage.setItem(
          "firebaseui::rememberedAccounts",
          JSON.stringify(user.providerData)
        )
      })
    return () => unregisterAuthObserver()
    // eslint-disable-next-line
  }, [dispatch]) 

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <ToastContainer />
        <Switch>
          <Redirect exact from={ROOT_PATH} to={USER_PATH} />

          <Route path={USER_PATH} component={User} />
          {curentUser.id ? (
            <Route path={ADMIN_PATH} component={Admin} />
          ) : (
            <Route component={NotFound} />
          )}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  )
}
