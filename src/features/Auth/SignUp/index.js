import React from "react"
import { Form, Formik, FastField } from "formik"
import InputField from "../../../components/CustomField/InputField"
import { Button, FormGroup } from "reactstrap"
import * as Yup from "yup"
import { useTranslation } from "react-i18next"
import firebase from "firebase"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"

function SignUp(props) {
  const { t } = useTranslation()
  const history = useHistory()
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(15, `${t("tooLong")}`)
      .required(`${t("mustRequire")}`),

    lastName: Yup.string()
      .max(20, `${t("tooLong")}`)
      .required(`${t("mustRequire")}`),

    email: Yup.string()
      .email(`${t("emailInvalid")}`)
      .required(`${t("mustRequire")}`),

    password: Yup.string()
      .min(6, `${t("tooShort")}`)
      .required(`${t("mustRequire")}`),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], `${t("idPasswordMatch")}`)
      .required(`${t("mustRequire")}`)
  })

  const hanldeSubmit = value => {
    const { email, password } = value
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        history.push("/user")
      })
      .catch(error => {
        var errorMessage = error.message
        toast.error(errorMessage)
      })
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
