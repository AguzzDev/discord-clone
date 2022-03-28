import * as Yup from "yup"

// export const validateRegister = Yup.object({
//   username: Yup.string().required("Requerido"),
//   email: Yup.string().email("Correo invalido").required("Requerido"),
//   address: Yup.string().required("Requerido"),
//   city: Yup.string().required("Requerido"),
//   country: Yup.string().required("Requerido"),
//   province: Yup.string().required("Requerido"),
//   postal_code: Yup.number().required("Requerido"),
//   password: Yup.string().min(8, "Minimo 8 caracteres").required("Requerido"),
// })

export const validateLogin = Yup.object({
  password: Yup.string().min(8, "Minimo 8 caracteres").required("Requerido"),
  email: Yup.string().email("Correo invalido").required("Requerido"),
})

// export const validateAddress = Yup.object({
//   address: Yup.string().required("Requerido"),
//   city: Yup.string().required("Requerido"),
//   country: Yup.string().required("Requerido"),
//   province: Yup.string().required("Requerido"),
//   postal_code: Yup.number().required("Requerido"),
// })

// export const validateForgetPassword = Yup.object({
//   email: Yup.string().email("Correo invalido").required("Requerido"),
// })

// export const validateChangePassword = Yup.object({
//   password: Yup.string().min(8, "Minimo 8 caracteres").required("Requerido"),
// })
