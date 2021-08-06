import React, { useState, useEffect } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { useSelector, useDispatch } from "react-redux"
import {
  postUser,
  editUserSelector,
  changeUser,
  putUser
} from "../../../app/adminSlice"

const AddUserForm = ({ setOpenForm }) => {
  const dispatch = useDispatch()
  const editUser = useSelector(editUserSelector)

  const [data, setData] = useState({
    fullName: "",
    email: "",
    gender: "Male"
  })

  useEffect(() => {
    if (editUser !== "") {
      setData(editUser)
    }
    return () => {
      dispatch(
        changeUser({
          fullName: "",
          email: "",
          gender: "Male"
        })
      )
    }
  }, [editUser])

  const onHandleChange = e => {
    const { name, value } = e.target
    const newData = {
      ...data,
      [name]: value
    }
    setData(newData)
  }

  const onHandleSubmit = e => {
    e.preventDefault()
    editUser === "" ? dispatch(postUser(data)) : dispatch(putUser(data))
    setOpenForm(false)
  }

  const onHandleCancelForm = () => {
    setOpenForm(false)
  }

  return (
    <Form onSubmit={e => onHandleSubmit(e)}>
      {editUser.fullName === "" ? <h1>Thêm user</h1> : <h1>Sửa user</h1>}
      <FormGroup>
        <Label for="exampleEmail">Full name</Label>
        <Input
          required
          value={data.fullName}
          onChange={e => onHandleChange(e)}
          type="text"
          name="fullName"
          placeholder="Enter your full name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Email</Label>
        <Input
          required
          value={data.email}
          onChange={e => onHandleChange(e)}
          type="text"
          name="email"
          placeholder="Enter your email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Gender</Label>
        <Input
          value={data.gender}
          onChange={e => onHandleChange(e)}
          type="select"
          name="gender"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Input>
      </FormGroup>
      <div className="mt-2">
        <Button type="submit" className="me-2">
          Cập nhật
        </Button>
        <Button type="button" onClick={() => onHandleCancelForm()}>
          Huỷ
        </Button>
      </div>
    </Form>
  )
}

export default AddUserForm
