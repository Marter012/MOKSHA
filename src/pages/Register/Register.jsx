import React, { useState } from "react";
import { Formik } from "formik";
import Submit from "../../components/IU/Submit/Submit";
import { Link, useNavigate } from "react-router-dom";
import {
  ContainerFormRegister,
  ContainerRegister,
  Form,
  RegisterWrapper,
} from "./RegisterStyles";
import LoginInput from "../../components/IU/LoginInput/LoginInput";
import { registerInitialValues } from "../../Formik/initialValues";
import { registerValidationSchema } from "../../Formik/validationSchema";
import { createUser, loginUser } from "../../axios/axiosUser";
import ModalRegister from "../../components/ModalPanel/ModalRegister";
import { setCurrentUser } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
const Register = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <RegisterWrapper>
      <ModalRegister show={show} setShow={setShow} />

      <ContainerRegister>
        <ContainerFormRegister>
          <h1>Registrarse</h1>
          <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={async (values, { resetForm }) => {
              const { name, surname, phone, email, password } = values;

              const user = await createUser(
                name,
                surname,
                phone,
                email,
                password
              );
              if (user) {
                const user = await loginUser(email, password);
                dispatch(
                  setCurrentUser({
                    ...user,
                    token: user.token,
                  })
                );
                resetForm();
                setShow(!show);
                setTimeout(() => {
                  navigate("/products");
                }, 5000);
              }
            }}
          >
            <Form>
              <LoginInput name="name" type="text" placeholder="name" />
              <LoginInput name="surname" type="text" placeholder="surname" />
              <LoginInput name="phone" type="text" placeholder="phone" />
              <LoginInput name="email" type="text" placeholder="Email" />
              <LoginInput
                name="password"
                type="password"
                placeholder="Password"
              />
              <Link to={"/Login"}>
                <p>¡Ya tengo cuenta!</p>
              </Link>
              <Submit type="button">Registrarme</Submit>
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
