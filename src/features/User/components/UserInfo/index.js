import React from "react"
import { useSelector } from "react-redux"
import { currentUserSelector } from "../../../../app/authSlice"

function UserInfo(props) {
  const curentUser = useSelector(currentUserSelector)
  return (
    <div className="userInfo">
      <ul>
        <li className="d-flex justify-content-center">
          {curentUser.urlAvatar ? (
            <img src={curentUser.urlAvatar} alt="avatar" />
          ) : (
            <img
              className="w-25"
              src="https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"
              alt="avatar"
            />
          )}
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
