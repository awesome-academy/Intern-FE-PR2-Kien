import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { currentUserSelector, signOut } from "../../../../app/authSlice"
import firebase from "firebase"
import { toast } from "react-toastify"
import { useHistory } from "react-router"

import SwitchLang from "./../SwitchLang"
import logo from "./../../../../assets/images/logo.png"
import lineHeader from "./../../../../assets/images/line-header1.png"
import {
  SIGN_IN_PATH,
  USER_INFO_PATH,
  USER_PATH
} from "../../../../constant/route"

import SearchInput from "../SearchInput"
import MenuBtn from "./MenuBtn"

const Example = () => {
  const history = useHistory()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const currentUser = useSelector(currentUserSelector)

  const onSignOut = () => {
    localStorage.removeItem("firebaseui::rememberedAccounts")
    localStorage.removeItem("rememberedUser")
    localStorage.removeItem("oldPath")
    firebase.auth().signOut()
    toast.success("Đăng xuất thành công")
    history.push("/user")
    dispatch(signOut())
  }

  return (
    <div className="header d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <MenuBtn />
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
                {currentUser.urlAvatar ? (
                  <img
                    className="header-avatar-user"
                    src={currentUser.urlAvatar}
                    alt="avatar"
                  />
                ) : (
                  <img
                    className="header-avatar-user"
                    src="https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"
                    alt="avatar"
                  />
                )}
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
    </div>
  )
}

export default Example
