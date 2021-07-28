import React from "react"
import { NavLink, Route, Switch } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { SIGN_IN_PATH, SIGN_UP_PATH } from "../../../../constant/route"
import SignIn from "./../../components/SignIn"
import SignUp from "./../../components/SignUp"

function Authen(props) {
  const { t } = useTranslation()
  return (
    <div className="authentication d-flex flex-column align-items-center justify-content-center h-100">
      <div className="authentication__title">
        <NavLink activeClassName="active" to={SIGN_IN_PATH}>
          {t("signin")}
        </NavLink>
        <NavLink activeClassName="active" to={SIGN_UP_PATH}>
          {t("signup")}
        </NavLink>
      </div>
      <Switch>
        <Route path={SIGN_IN_PATH} component={SignIn} />
        <Route path={SIGN_UP_PATH} component={SignUp} />
      </Switch>
    </div>
  )
}

export default Authen
