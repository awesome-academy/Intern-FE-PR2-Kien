import { ErrorMessage } from "formik"
import React from "react"
import { FormGroup, Label, Input, FormFeedback, Col } from "reactstrap"

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props
  const { name } = field
  const { errors, touched } = form
  const showErrors = errors[name] && touched[name]
  return (
    <FormGroup row className="m-2">
      {label && (
        <Label sm={3} for={name}>
          {label}
        </Label>
      )}
      <Col sm={9}>
        <Input
          {...field}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          invalid={showErrors}
          autoComplete="off"
        />
        <ErrorMessage name={name} component={FormFeedback} />
      </Col>
    </FormGroup>
  )
}

export default InputField
