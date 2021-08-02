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
import {
  SIGN_IN_PATH,
  USER_INFO_PATH,
  USER_PATH,
  NEWS_PATH
} from "../../../../constant/route"

import SearchInput from "../SearchInput"

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
        <div className="header-search-input">
          <SearchInput />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex">
          {currentUser.id ? (
            <div>
              <Link to={USER_INFO_PATH}>
                <img
                  className="header-avatar-user"
                  src={currentUser.urlAvatar}
                  alt="avatar"
                />
              </Link>
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
      <Link to={USER_PATH} className="header-logo">
        <img className="w-100" src={logo} alt="logo" />
      </Link>
      <img className="header-line" src={lineHeader} alt="line-header" />
      <div className={classNames("header__list-menu", { "d-none": !showMenu })}>
        <NavLink
          activeClassName="header__list-menu-selected"
          className="header__list-menu-item"
          to={USER_PATH}
          exact
        >
          {t("mainPage")}
        </NavLink>
        <NavLink
          activeClassName="header__list-menu-selected"
          className="header__list-menu-item"
          to={USER_INFO_PATH}
        >
          {t("theaters")}
        </NavLink>
        <NavLink
          activeClassName="header__list-menu-selected"
          className="header__list-menu-item"
          to={NEWS_PATH}
        >
          {t("events")}
        </NavLink>
      </div>
    </div>
  )
}

export default Example
