import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import classNames from "classnames"
import {
  USER_INFO_PATH,
  USER_PATH,
  NEWS_PATH,
  CINEMAS_PATH
} from "../../../../../constant/route"
import useClickOutside from "../../../../../customHook/useClickOutside"

function MenuBtn(props) {
  const [showMenu, setShowMenu] = useState(false)
  const { t } = useTranslation()

  let domNode = useClickOutside(() => {
    setShowMenu(false)
  })

  return (
    <div ref={domNode}>
      <div
        className="header__icon-menu me-3"
        onClick={() => setShowMenu(!showMenu)}
      >
        <i className="fas fa-bars"></i>
        <span>Menu</span>
      </div>
      <div
        className={classNames(
          "header__list-menu",
          { "open-menu": showMenu },
          { "close-menu": !showMenu }
        )}
      >
        <NavLink
          onClick={() => setShowMenu(false)}
          activeClassName="header__list-menu-selected"
          className="header__list-menu-item"
          to={USER_PATH}
          exact
        >
          {t("mainPage")}
        </NavLink>
        <NavLink
          onClick={() => setShowMenu(false)}
          activeClassName="header__list-menu-selected"
          className="header__list-menu-item"
          to={CINEMAS_PATH}
        >
          {t("theaters")}
        </NavLink>
        <NavLink
          onClick={() => setShowMenu(false)}
          activeClassName="header__list-menu-selected"
          className="header__list-menu-item"
          to={USER_INFO_PATH}
        >
          {t("userInfo")}
        </NavLink>
        <NavLink
          onClick={() => setShowMenu(false)}
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

export default MenuBtn
