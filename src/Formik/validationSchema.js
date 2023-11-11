import * as Yup from "yup"
import { regEmail } from "../utils/regExp"

export const contactoValidationSchema = Yup.object({
    name : Yup.string().required('Campo requerido'),
    email : Yup.string().matches(regEmail,"Email no valido").required('Campo requerido'),
    textData : Yup.string().required('Campo requerido'),
})


export const registerValidationSchema = Yup.object({
    name : Yup.string().required('Campo requerido'),
    surname : Yup.string().required('Campo requerido'),
    phone : Yup.number().required('Campo requerido'),
    email : Yup.string().matches(regEmail,"Email no valido").required('Campo requerido'),
    password : Yup.string().min(6,"Minimo de 6 caracteres").required('Campo requerido'),
})

export const loginValidationSchema = Yup.object({
    email : Yup.string().matches(regEmail,"Email no valido").required('Campo requerido'),
    password : Yup.string().min(6,"Minimo de 6 caracteres").required('Campo requerido'),
})