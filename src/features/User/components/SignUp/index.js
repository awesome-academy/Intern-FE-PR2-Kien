import { Form, Formik, FastField } from "formik"
import React from "react"
import InputField from "../../../../components/CustomField/InputField"
import { Button, FormGroup } from "reactstrap"
import * as Yup from "yup"

function SignUp(props) {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required")
  })
  const hanldeSubmit = value => {
    console.log(value)
  }
  return (
    <div className="form-login">
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={value => hanldeSubmit(value)}
      >
        {formikProps => {
          return (
            <Form>
              <FastField
                name="firstName"
                component={InputField}
                label="Tên"
                placeholder="Nhập tên"
                type="text"
              />
              <FastField
                name="lastName"
                component={InputField}
                label="Tên Đệm"
                placeholder="Nhập tên đệm"
                type="text"
              />
              <FastField
                name="email"
                component={InputField}
                label="Email"
                placeholder="Nhập email"
                type="text"
              />
              <FastField
                name="password"
                component={InputField}
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                type="password"
              />
              <FastField
                name="confirmPassword"
                component={InputField}
                label="Nhập lại mật khẩu"
                placeholder="Nhập lại mật khẩu"
                type="password"
              />
              <FormGroup style={{ textAlign: "center" }}>
                <Button>Submit</Button>
              </FormGroup>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default SignUp
