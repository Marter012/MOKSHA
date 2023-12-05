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
import { loginUser } from "../../axios/axiosUser";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
            onSubmit={async(values)=>{

              const user = await loginUser(values.email, values.password);
                if(user){
                  dispatch(setCurrentUser({
                    ...user,
                    token : user.token
                  }))
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
