import React from "react";
import { Formik } from "formik";
import Submit from "../../components/IU/Submit/Submit";
import {Link, useNavigate} from "react-router-dom";
import {
  ContainerFormRegister,
  ContainerRegister,
  Form,
  RegisterWrapper,
} from "./RegisterStyles";
import LoginInput from "../../components/IU/LoginInput/LoginInput";
import { registerInitialValues } from "../../Formik/initialValues";
import { registerValidationSchema } from "../../Formik/validationSchema";
const Register = () => {
  const navigate = useNavigate();
  let createUser = JSON.parse(localStorage.getItem(`createUser`)) || [];

  return (
    <RegisterWrapper>
      <ContainerRegister>
        <ContainerFormRegister>
          <h1>Registrarse</h1>
          <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={(values,{resetForm}) => {
              createUser = [...createUser, values];
              localStorage.setItem(`createUser`, JSON.stringify(createUser));
              resetForm();
              navigate("/login");
            }}
          >
            <Form>
              <LoginInput name="name" type="text" placeholder="name" />
              <LoginInput name="surname" type="text" placeholder="surname" />
              <LoginInput name="phone" type="text" placeholder="phone" />
              <LoginInput name="email" type="text" placeholder="Email" />
              <LoginInput name="password" type="password" placeholder="Password"/>
              <Link to={"/Login"}>
                <p>¡Ya tengo cuenta!</p>
              </Link>
              <Submit type="button">Ingresar</Submit>
            </Form>
          </Formik>
        </ContainerFormRegister>
        <img
          src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1696889359/Moksha/tash47bkjazliqz2exei.webp"
          alt=""
        />
      </ContainerRegister>
    </RegisterWrapper>
  );
};

export default Register;
