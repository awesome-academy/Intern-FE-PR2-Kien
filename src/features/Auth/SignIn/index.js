import { Form, Formik, FastField } from "formik"
import React from "react"
import InputField from "../../../components/CustomField/InputField"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { Button, FormGroup } from "reactstrap"
import firebase from "firebase"
import * as Yup from "yup"
import { useTranslation } from "react-i18next"

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
}

function SignIn(props) {
  const { t } = useTranslation()
  const initialValue = {
    userName: "",
    userPassword: ""
  }

  const validationSchmea = Yup.object().shape({
    userName: Yup.string()
      .required(`${t("mustRequire")}`)
      .min(6, `${t("tooShort")}`)
      .max(18, `${t("tooLong")}`),
    userPassword: Yup.string()
      .required(`${t("mustRequire")}`)
      .min(6, `${t("tooShort")}`)
      .max(18, `${t("tooLong")}`)
  })

  const hanldeSubmit = value => {}

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
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
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
