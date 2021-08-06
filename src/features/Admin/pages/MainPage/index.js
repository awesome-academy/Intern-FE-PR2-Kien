import React, { useState } from "react"
import Pagination from "./../../components/Pagination"
import { Button } from "reactstrap"

import UserTable from "../../components/UserTable"
import AddUserForm from "../../AddUserForm"

function MainPage(props) {
  const [openForm, setOpenForm] = useState(false)
  return (
    <div className="MainAdminPage">
      <div className="container">
        <h1 className="text-center">Quản lý user</h1>
        <div className="row">
          <div>
            <Button onClick={() => setOpenForm(true)} color="primary">
              Thêm user
            </Button>
          </div>
          <div className={openForm ? "col-10" : "col-12"}>
            <UserTable setOpenForm={setOpenForm} />
            <div className="d-flex justify-content-center">
              <Pagination />
            </div>
          </div>
          {openForm && (
            <div className="col-2">
              <AddUserForm setOpenForm={setOpenForm} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MainPage
