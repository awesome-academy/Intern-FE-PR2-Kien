import React from "react"
import UserInfo from "./../../components/UserInfo"
import OrderedTicket from "../../components/OrderedTicket"

function UserInfoPage(props) {
  return (
    <div className="UserInfoPage">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 p-5">
            <UserInfo />
          </div>
          <div className="col-12 col-lg-6 p-5">
            <OrderedTicket />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfoPage
