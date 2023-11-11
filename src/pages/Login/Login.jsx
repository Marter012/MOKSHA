import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Submit from "../../components/IU/Submit/Submit";
import {
  ContainerForm,
  ContainerLogin,
  Form,
  LoginWrapper,
} from "./LoginStyles";
import LoginInput from "../../components/IU/LoginInput/LoginInput";
import { loginInitialValues } from "../../Formik/initialValues";
import { loginValidationSchema } from "../../Formik/validationSchema";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";

const Login = () => {
  const users = JSON.parse(localStorage.getItem(`createUser`)) || [];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationUser = (user) => {
    const userFilter = users.filter((item) => item.email === user.email);
    if(!userFilter.length){
      alert("Usuario no registrado")
      return;
    }
    const valid =
      userFilter[0].email === user.email &&
      userFilter[0].password === user.password
        ? true
        : false;

    if (valid) {
      dispatch(setCurrentUser(userFilter[0]));
    }else{
      alert("Email o contraseña erronea.")
    }
    return valid;
  };

  return (
    <LoginWrapper>
      <ContainerLogin>
        <img
          src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1696889359/Moksha/tash47bkjazliqz2exei.webp"
          alt=""
        />
        <ContainerForm>
          <h1>Iniciar Sesión</h1>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={async (values, { resetForm }) => {
              if (validationUser(values)) {
                resetForm();

                navigate("/products");
              }
            }}
          >
            <Form>
              <LoginInput name="email" type="text" placeholder="Email" />
              <LoginInput
                name="password"
                type="password"
                placeholder="Password"
              />
              <Link to={"/Register"}>
                <p>¿No tenes cuenta? Registrate</p>
              </Link>
              <Submit type="button">Ingresar</Submit>
            </Form>
          </Formik>
        </ContainerForm>
      </ContainerLogin>
    </LoginWrapper>
  );
};

export default Login;
