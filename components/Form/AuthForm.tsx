import { Formik, Form } from "formik"

import { FieldBox } from "components/Form/FieldBox"
import { validateLogin } from "components/Form/validate"

interface inputValues {
  email: string
  password: string
}

export const AuthForm = () => {
  const values: inputValues = { email: "", password: "" }
  return (
    <Formik
      initialValues={values}
      validationSchema={validateLogin}
      onSubmit={(v) => console.log(v)}
    >
      {({ values, handleChange }) => (
        <Form className="flex flex-col">
          <FieldBox
            type="email"
            value={values.email}
            handleChange={handleChange}
            placeholder=""
            inputType="email"
          />
          <button type="submit">asd</button>
        </Form>
      )}
    </Formik>
  )
}
