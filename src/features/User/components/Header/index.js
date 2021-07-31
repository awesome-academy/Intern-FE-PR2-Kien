import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { currentUserSelector, signOut } from "../../../../app/authSlice"
import classNames from "classnames"
import firebase from "firebase"
import { toast } from "react-toastify"

import SwitchLang from "./../SwitchLang"
import logo from "./../../../../assets/images/logo.png"
import lineHeader from "./../../../../assets/images/line-header1.png"
import { SIGN_IN_PATH } from "../../../../constant/route"

const Example = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const currentUser = useSelector(currentUserSelector)

  const onSignOut = () => {
    localStorage.removeItem("firebaseui::rememberedAccounts")
    firebase.auth().signOut()
    toast.success("Đăng xuất thành công")
    dispatch(signOut())
  }

  return (
    <div className="header d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <div
          className="header__icon-menu me-3"
          onClick={() => setShowMenu(!showMenu)}
        >
          <i className="fas fa-bars"></i>
          <span>Menu</span>
        </div>
        <SwitchLang />
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex">
          {currentUser.id ? (
            <div>
              <img
                className="header-avatar-user"
                src={currentUser.urlAvatar}
                alt="avatar"
              />
              <button
                onClick={() => onSignOut()}
                className="btn header-btn me-4"
              >
                {t("logout")}
              </button>
            </div>
          ) : (
            <Link className="btn header-btn me-4" to={SIGN_IN_PATH}>
              {t("login")}
            </Link>
          )}
        </div>
      </div>
      <img className="header-logo" src={logo} alt="logo" />
      <img className="header-line" src={lineHeader} alt="line-header" />
      <div className={classNames("header__list-menu", { "d-none": !showMenu })}>
        <NavLink
          activeClassName="header__list-menu-selected"
          className="header__list-menu-item"
          to="/"
        >
          {t("showTime")}
        </NavLink>
        <NavLink
          activeClassName="header__list-menu-selected"
          className="header__list-menu-item"
          to="/"
        >
          {t("theaters")}
        </NavLink>
        <NavLink
          activeClassName="header__list-menu-selected"
          className="header__list-menu-item"
          to="/"
        >
          {t("events")}
        </NavLink>
        <NavLink
          activeClassName="header__list-menu-selected"
          className="header__list-menu-item"
          to="/"
        >
          {t("service")}
        </NavLink>
        <NavLink
          activeClassName="header__list-menu-selected"
          className="header__list-menu-item"
          to="/"
        >
          {t("recruitment")}
        </NavLink>
        <NavLink
          activeClassName="header__list-menu-selected"
          className="header__list-menu-item"
          to="/"
        >
          {t("aboutUs")}
        </NavLink>
      </div>
    </div>
  )
}

export default Example
