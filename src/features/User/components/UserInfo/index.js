import React from "react"
import { useSelector } from "react-redux"
import { currentUserSelector } from "../../../../app/authSlice"

function UserInfo(props) {
  const curentUser = useSelector(currentUserSelector)
  return (
    <div className="userInfo">
      <ul>
        <li className="d-flex justify-content-center">
          <img src={curentUser.urlAvatar} alt="avatar" />
        </li>
        <li>
          <strong>Tên :</strong> {curentUser.name}
        </li>
        <li>
          <strong>Email :</strong> {curentUser.email}
        </li>
      </ul>
    </div>
  )
}

export default UserInfo
