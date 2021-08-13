import React from "react"
import { Switch, Route, NavLink } from "react-router-dom"

import MainPage from "./pages/MainPage"
import TicketPage from "./pages/TicketPage"
import LoginAdminPage from "./pages/LoginPage"
import { useSelector } from "react-redux"
import { currentUserSelector } from "../../app/authSlice"
import {
  ADMIN_USER_PATH,
  ADMIN_TICKET_PATH,
  ADMIN_LOGIN_PATH
} from "./../../constant/route"

export default function Admin() {
  const currentUser = useSelector(currentUserSelector)
  return (
    <div className="Admin">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 vh-100 p-0">
            <div className="menu">
              <div className="user">
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
                <span>{currentUser.email}</span>
              </div>
              <div className="list-menu">
                <NavLink
                  activeClassName="item-selected"
                  className="item"
                  to="/admin/user"
                >
                  <i className="fas fa-users"></i>
                  <span>User</span>
                </NavLink>
                <NavLink
                  activeClassName="item-selected"
                  className="item"
                  to="/admin/ticket"
                >
                  <i className="fas fa-ticket-alt"></i>
                  <span>Ticket</span>
                </NavLink>
                <NavLink
                  activeClassName="item-selected"
                  className="item"
                  to="/admin/login"
                >
                  <i className="fas fa-sign-in-alt"></i>
                  <span>Login</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-10 p-5 overflow-auto vh-100">
            <Switch>
              <Route path={ADMIN_USER_PATH} component={MainPage} />
              <Route path={ADMIN_TICKET_PATH} component={TicketPage} />
              <Route path={ADMIN_LOGIN_PATH} component={LoginAdminPage} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}
