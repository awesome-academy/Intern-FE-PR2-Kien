import React from "react"
import Pagination from "./../../components/Pagination"

import UserTable from "../../components/UserTable"

function MainPage(props) {
  return (
    <div className="MainAdminPage">
      <div className="container">
        <h1 className="text-center">Quản lý user</h1>
        <div className="row">
          <div className="col-10">
            <UserTable />
            <div className="d-flex justify-content-center">
              <Pagination />
            </div>
          </div>
          <div className="col-2">This is form add user</div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
