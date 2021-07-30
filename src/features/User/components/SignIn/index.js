import { Form, Formik, FastField } from "formik"
import React from "react"
import InputField from "../../../../components/CustomField/InputField"
import { Button, FormGroup } from "reactstrap"
import * as Yup from "yup"

function SignIn(props) {
  const initialValue = {
    userName: "",
    userPassword: ""
  }
  const validationSchmea = Yup.object().shape({
    userName: Yup.string()
      .required("This field must require")
      .min(6, "Too short")
      .max(18, "Too long"),
    userPassword: Yup.string()
      .required("This field must require")
      .min(6, "Too short")
      .max(18, "Too long")
  })
  const hanldeSubmit = value => {
    console.log(value)
  }
  return (
    <div className="form-login">
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchmea}
        onSubmit={value => hanldeSubmit(value)}
      >
        {formikProps => {
          return (
            <Form>
              <FastField
                name="userName"
                component={InputField}
                label="Tài khoản"
                placeholder="Nhập tài khoản"
                type="text"
              />
              <FastField
                name="userPassword"
                component={InputField}
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
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

export default SignIn
