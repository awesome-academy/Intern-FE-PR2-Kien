import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import classNames from "classnames"

import SwitchLang from "./../SwitchLang"
import logo from "./../../../../assets/images/logo.png"
import lineHeader from "./../../../../assets/images/line-header1.png"

const Example = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="header d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <div
          className="header__icon-menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          <i className="fas fa-bars"></i>
          <span>Menu</span>
        </div>
        <Link className="btn header-btn ms-4 me-4" to="/">
          {t("buyTicket")}
        </Link>
        <SwitchLang />
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex">
          <Link className="btn header-btn me-4" to="/">
            {t("login")}
          </Link>
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
